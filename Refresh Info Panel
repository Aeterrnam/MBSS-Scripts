// ==UserScript==
// @name         Refresh Info Panel on Chat Switch (fix loop)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  При смене чата панель Info закрывается и открывается один раз для обновления данных.
// @match        https://support-admin-common-master.mbss.maxbit.private/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  const LOG = true;
  const log = (...a) => LOG && console.log("[INFO PANEL]", ...a);
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

  let lastChatKey = null;

  function getActiveChatKey() {
    const active = document.querySelector(".vac-room-item.vac-room-selected");
    if (!active) return null;
    const id =
      active.getAttribute("id") ||
      active.dataset.roomId ||
      active.dataset.id ||
      active.textContent?.trim();
    return id;
  }

  function getInfoButton() {
    return document.querySelector(".vac-svg-button.vac-icon-info");
  }

  async function refreshPanel() {
    const btn = getInfoButton();
    if (!btn) {
      log("Info button not found");
      return;
    }
    log("Refreshing panel...");
    btn.click(); // закрыть
    await sleep(200); // маленькая пауза
    btn.click(); // открыть
    log("Panel toggled");
  }

  function observeChatSwitch() {
    const chatList = document.querySelector(".vac-room-list");
    if (!chatList) {
      setTimeout(observeChatSwitch, 500);
      return;
    }

    const observer = new MutationObserver(async () => {
      const currentKey = getActiveChatKey();
      if (currentKey && currentKey !== lastChatKey) {
        log("Chat changed:", lastChatKey, "→", currentKey);
        lastChatKey = currentKey;
        await refreshPanel();
      }
    });

    observer.observe(chatList, { childList: true, subtree: true, attributes: true, attributeFilter: ["class"] });

    log("Observer attached for chat switching");
  }

  window.addEventListener("load", () => {
    observeChatSwitch();
    setTimeout(() => {
      const key = getActiveChatKey();
      if (key) lastChatKey = key; // запоминаем текущий чат
    }, 500);
  });
})();
