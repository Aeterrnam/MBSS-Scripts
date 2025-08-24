
// ==UserScript==
// @name        User ID Checker
// @namespace   Violentmonkey Scripts
// @match       https://admin.crimson.*.prd.maxbit.private/admin/*
// @grant       none
// @version     1.0
// @description
// ==/UserScript==

(function() {
    'use strict';


    const style = document.createElement('style');
    style.textContent = `
        @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);


    function getUserIdFromUrl() {
        const url = window.location.href;
        const parts = url.split('/');
        const userId = parts[parts.length - 1];

        return parseInt(userId, 10);
    }

    function checkUserId() {
        const userId = getUserIdFromUrl();

        if (!isNaN(userId)) {
            let pageTitle = document.getElementById('page_title');

            if (pageTitle) {
                let statusElement = document.createElement('div');
                statusElement.style.padding = '5px 10px';
                statusElement.style.color = 'white';
                statusElement.style.display = 'inline-block';
                statusElement.style.marginLeft = '10px';
                statusElement.style.borderRadius = '5px';
                statusElement.style.boxShadow = '0 3px 4px rgba(0, 0, 0, 0.1)';
                statusElement.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.2)';
                statusElement.style.fontSize = '12px';

                if (userId % 2 === 0) {
                    statusElement.textContent = 'Четный ID';
                    statusElement.style.backgroundColor = 'red';
                    statusElement.style.backgroundImage = 'linear-gradient(to bottom, #ff4d4d, #ff0000)';
                    statusElement.style.animation = 'blink 1s infinite';
                } else {
                    statusElement.textContent = 'Нечетный ID';
                    statusElement.style.backgroundColor = 'green';
                    statusElement.style.backgroundImage = 'linear-gradient(to bottom, #4dff4d, #00ff00)';
                }

                pageTitle.appendChild(statusElement);
            }
        }
    }

    checkUserId();
})();
