const toggleBtn = document.getElementById('toggle');

// Загружаем состояние
chrome.storage.sync.get(['isEnabled'], (data) => {
  const isEnabled = data.isEnabled !== false;
  updateButton(isEnabled);
});

// Обработчик клика
toggleBtn.addEventListener('click', () => {
  chrome.storage.sync.get(['isEnabled'], (data) => {
    const newState = !(data.isEnabled !== false);
    chrome.storage.sync.set({ isEnabled: newState }, () => {
      updateButton(newState);
      updateIcon(newState);
    });
  });
});

function updateButton(isEnabled) {
  toggleBtn.textContent = isEnabled ? 'Включено' : 'Выключено';
  toggleBtn.classList.toggle('off', !isEnabled);
}

function updateIcon(isEnabled) {
  const path = isEnabled ? 'icons/icon_on.png' : 'icons/icon_off.png';
  chrome.action.setIcon({ path });
}