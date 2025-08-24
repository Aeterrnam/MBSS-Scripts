let isEnabled = true;
let userScrolledUp = false;
const MY_USER_ID = "9f126f17-efe3-483f-b3b2-68fc93187213";

// Получаем состояние из хранилища
chrome.storage.sync.get(['isEnabled'], (data) => {
  isEnabled = data.isEnabled !== false;
});

// Селекторы для вашего чата
const SELECTORS = {
  CHAT_CONTAINER: '.vac-container-scroll',
  MESSAGE: '[data-v-07f68fb6]',
  MY_MESSAGE: `[id="${MY_USER_ID}"]`
};

// Прокрутка вниз
function scrollToBottom() {
  const chatContainer = document.querySelector(SELECTORS.CHAT_CONTAINER);
  if (chatContainer) {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }
}

// Проверка, является ли сообщение "своим"
function isMyMessage(node) {
  return node.matches(SELECTORS.MY_MESSAGE) || 
         node.querySelector(SELECTORS.MY_MESSAGE);
}

// Наблюдатель за изменениями
const observer = new MutationObserver((mutations) => {
  if (!isEnabled || userScrolledUp) return;

  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      const hasNewMessages = Array.from(mutation.addedNodes).some(node => {
        return node.matches(SELECTORS.MESSAGE) && !isMyMessage(node);
      });
      
      if (hasNewMessages) {
        setTimeout(scrollToBottom, 100); // Небольшая задержка для стабильности
      }
    }
  });
});

// Инициализация
function init() {
  const chatContainer = document.querySelector(SELECTORS.CHAT_CONTAINER);
  if (chatContainer) {
    // Отслеживаем ручную прокрутку
    chatContainer.addEventListener('scroll', () => {
      const threshold = 50;
      userScrolledUp = chatContainer.scrollTop + chatContainer.clientHeight < 
                      chatContainer.scrollHeight - threshold;
    });

    // Начинаем наблюдение
    observer.observe(chatContainer, {
      childList: true,
      subtree: true
    });

    // Первоначальная прокрутка
    if (isEnabled) scrollToBottom();
  } else {
    // Повторная попытка через 1 сек, если контейнер не загрузился
    setTimeout(init, 1000);
  }
}

// Запускаем
init();