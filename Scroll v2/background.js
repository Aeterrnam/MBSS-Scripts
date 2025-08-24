// Фоновый скрипт (для Manifest V3)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getState") {
    chrome.storage.sync.get(['isEnabled'], (data) => {
      sendResponse({ isEnabled: data.isEnabled !== false });
    });
    return true;
  }
});