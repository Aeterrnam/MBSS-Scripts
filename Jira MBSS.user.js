// ==UserScript==
// @name         Jira MBSS
// @namespace    http://tampermonkey.net/
// @version      1.5
// @description  Добавляет кнопку "Jira"
// @author       mevr1k
// @match        https://support-admin-common-master.mbss.maxbit.private/*/chats?room_id=*
// @grant        none
// ==/UserScript==
(function () {
    'use strict';
    function addJiraButton() {
        const generalInfoBlock = document.querySelector('.el-card__body');
        const emailElement = document.querySelector('#enhancerLinkElem');
        if (generalInfoBlock && emailElement) {
            let jiraButton = document.getElementById('jiraButton');
            if (!jiraButton) {
                jiraButton = document.createElement('button');
                jiraButton.id = 'jiraButton';
                jiraButton.textContent = 'Jira';
                // Применяем стили
                jiraButton.style.cssText = `
                    margin-top: 2px;
                    padding: 6px 13px;
                    background: linear-gradient(to bottom, #2E466E 5%, #415989 100%);
                    background-color: #2E466E;
                    border-radius: 17px;
                    border: 1px solid #1F2F47;
                    display: inline-block;
                    cursor: pointer;
                    color: white;
                    font-family: Arial, sans-serif;
                    font-size: 15px;
                    text-decoration: none;
                    text-shadow: 0px 1px 0px #263666;
                    box-shadow: inset 0px 0px 15px 3px #23395E;
                `;
                jiraButton.style.position = 'absolute';
                jiraButton.style.top = '10px';
                jiraButton.style.right = '10px';
                generalInfoBlock.style.position = 'relative';
                generalInfoBlock.appendChild(jiraButton);
            }
            jiraButton.onclick = () => {
                const textContent = emailElement.textContent;
                const email = textContent.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
                if (email) {
                    navigator.clipboard.writeText(email[0]).then(() => {
                        const searchUrl = `https://supdeskt.atlassian.net/servicedesk/customer/user/requests?filter=${encodeURIComponent(email[0])}&page=1&reporter=all&search=${encodeURIComponent(email[0])}`;
                        window.open(searchUrl, '_blank');
                    });
                }
            };
        }
    }
    function waitForElement(selector, callback, interval = 500, timeout = 10000) {
        const startTime = Date.now();
        const checkElement = () => {
            const element = document.querySelector(selector);
            if (element) {
                callback(element);
            } else if (Date.now() - startTime < timeout) {
                setTimeout(checkElement, interval);
            }
        };
        checkElement();
    }
    window.addEventListener('load', () => {
        waitForElement('.el-card__body', () => {
            addJiraButton();
            const observer = new MutationObserver(() => {
                addJiraButton();
            });
            observer.observe(document.body, { childList: true, subtree: true });
        });
    });
})();
