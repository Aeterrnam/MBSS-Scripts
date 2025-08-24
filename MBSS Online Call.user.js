// ==UserScript==
// @name         onlinecall
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  onlinecall с поддержкой нескольких языков
// @author       v.kondratenya
// @match        https://support-admin-common-master.mbss.maxbit.private/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Создаем элемент уведомления
    const notificationDiv = document.createElement('div');
    notificationDiv.innerHTML = `
        <div style="
            font-family: 'Arial', sans-serif;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            padding: 12px 20px;
            border-radius: 8px;
            background: linear-gradient(135deg, #ff4e50, #f9d423);
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            text-align: center;
            max-width: 300px;
            margin: auto;
        ">
            Был запрошен <br>онлайн-звонок
        </div>
    `;
    Object.assign(notificationDiv.style, {
        position: 'fixed',
        top: '160px',
        right: '60px',
        zIndex: '9999',
        display: 'none',
        transition: 'opacity 0.5s ease',
        opacity: '0'
    });
    document.body.appendChild(notificationDiv);

    // Функция для плавного появления
    function showNotification() {
        notificationDiv.style.display = 'block';
        setTimeout(() => {
            notificationDiv.style.opacity = '1';
        }, 10);
    }

    // Функция для плавного скрытия
    function hideNotification() {
        notificationDiv.style.opacity = '0';
        setTimeout(() => {
            notificationDiv.style.display = 'none';
        }, 500);
    }

    // Функция для задержки
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Основная функция с бесконечным циклом
    async function monitor() {
        let onlineCallActive = false;

        while (true) {
            // Замените селектор на нужный класс элементов
            const containers = document.querySelectorAll('.vac-card-info.vac-card-system');
            let foundOnlineCall = false;

            containers.forEach(container => {
                const text = container.innerText.trim().toLowerCase();

                // Проверяем наличие нужных фраз (учитываем регистр)
                if (
                    text.includes('онлайн-звонок') ||
                    text.includes('online call') ||
                    text.includes('rückruf durch einen englischsprachigen mitarbeiter anfordern') ||
                    text.includes('ligação por voz em inglês com um agente')
                ) {
                    container.style.backgroundColor = '#D64646'; // подсветка блока красным
                    foundOnlineCall = true;

                    // Обновляем уведомление и его стиль при необходимости
                    if (
                        text.includes('rückruf durch einen englischsprachigen mitarbeiter anfordern') ||
                        text.includes('ligação por voz em inglês com um agente')
                    ) {
                        // Для этих случаев делаем уведомление красным и меняем текст
                        notificationDiv.firstElementChild.innerHTML = `
                            <div style="
                                font-family: 'Arial', sans-serif;
                                font-size: 16px;
                                font-weight: bold;
                                color: #fff;
                                padding: 12px 20px;
                                border-radius: 8px;
                                background: linear-gradient(135deg, #D64646, #A93232); /* более темный красный градиент */
                                box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                                text-align: center;
                                max-width: 300px;
                                margin: auto;
                            ">
                                Запрос на голосовой звонок на английском языке
                            </div>
                        `;
                        showNotification();
                        return; // прерываем цикл для этого контейнера (если нужно)
                    }
                } else {
                    container.style.backgroundColor = '';
                }
            });

            if (foundOnlineCall) {
                if (!onlineCallActive) {
                    onlineCallActive = true;
                    showNotification();
                }
            } else {
                if (onlineCallActive) {
                    onlineCallActive = false;
                    hideNotification();
                }
            }

            await sleep(500);
        }
    }

    monitor();
})();
