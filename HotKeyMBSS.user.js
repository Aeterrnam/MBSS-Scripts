// ==UserScript==
// @name         HotKeyMBSS
// @version      2.1
// @description  Горячие клавиши для MBSS
// @author       v.stazhok
// @match        https://support-admin-common-master.mbss.maxbit.private/*
// @grant       GM.getValue
// @grant       GM_getValue
// @grant       GM.setValue
// @grant       GM_setValue
// @namespace http://tishka.xyz/
// @downloadURL https://update.greasyfork.org/scripts/543871/HotKeyMBSS.user.js
// @updateURL https://update.greasyfork.org/scripts/543871/HotKeyMBSS.meta.js
// ==/UserScript==

(async function () {
  "use strict";

  // Функция транслитерации
  const transliterate = (function () {
    const rus = "щ  ш  ч  ц  ю  я  ё  ж  ъ  ы  э  а б в г д е з и й к л м н о п р с т у ф х ь"
      .split(/ +/g);
    const eng = "shh sh ch cz yu ya yo zh `` y' e` a b v g d e z i j k l m n o p r s t u f x `"
      .split(/ +/g);

    return function (text, engToRus) {
      for (let i = 0; i < rus.length; i++) {
        // заменяем букву, учитывая регистр
        const from = engToRus ? eng[i] : rus[i];
        const to   = engToRus ? rus[i] : eng[i];
        text = text
          .split(from)
          .join(to)
          .split(from.toUpperCase())
          .join(to.toUpperCase());
      }
      return text;
    };
  })();

  /**
   * Вставляет фразу в контролируемый React-input и эмулирует событие input,
   * чтобы React обновил своё internal state.
   *
   * @param {string} phrase — текст для вставки
   * @param {boolean} name  — вставлять как имя (с транслитерацией и запятой)
   */
  function update(phrase, name) {
    const el = document.querySelector('[placeholder="Type message..."]');
    if (!el) return;

    const oldValue = el.value;
    let newValue;

    if (name === true) {
      // вставляем имя с транслитерацией и запятой
      const comma = oldValue && oldValue[0] !== "," ? ", " : "";
      const nm = transliterate(phrase, true);
      newValue = oldValue
        ? nm + comma + oldValue[0].toLowerCase() + oldValue.slice(1)
        : nm + ", ";
    } else {
      newValue = oldValue + phrase;
    }

    el.value = newValue;
    // эмулируем ввод, чтобы React зарегистрировал изменение
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }

  async function onKeydown(evt) {
    if (!evt.altKey) return;

    switch (evt.keyCode) {
      case 81: // Alt+Q
        await update(
          document.querySelector(".vac-room-wrapper").innerText.split(" ")[0],
          true
        );
        break;

      case 87: // Alt+W
        await update("благодарю за ожидание.🤗", false);
        break;

      case 82: // Alt+R
        await update(
          "Поздравляю вас с днем рождения!🥳 Бонус будет зачислен автоматически в день вашего рождения до 16:00 по московскому времени. Если бонус не зачислится — обратитесь в чат нашей технической поддержки, пожалуйста. Обратиться за начислением вы можете в день рождения и в течение 7 дней после него.🤗",
          false
        );
        break;

      case 83: // Alt+S
        await update(
          "Мы не можем предоставить вам информацию о доступности и сумме кешбека.😔 Кешбек будет начислен сегодня до 13:00 по московскому времени. Мы просим вас ожидать до указанного времени, чтобы получить полную информацию.😊",
          false
        );
        break;

      case 65: // Alt+A
        await update("скажите, пожалуйста, чем я могу вам помочь?🤗", false);
        break;

      case 49: // Alt+1
        await update(
          `на данный момент ваш персональный менеджер отсутствует, поэтому консультацию для вас проведу я.`,
          false
        );
        break;

      case 50: // Alt+2
        await update(
          'по информации из вашего профиля вижу, что вы закреплены за персональным менеджером, который сейчас находится на рабочем месте и свободен для осуществления консультации, переведу вас на него, ожидайте, пожалуйста.',
          false
        );
        break;

      case 51: // Alt+3
        await update(
          "ваш запрос на выплату был отклонен финансовым отделом, так как вы создали заявку с помощью карты, которую ранее не использовали в профиле. Пожалуйста, оформите новую заявку на тот платежный инструмент, который вы использовали в вашем аккаунте ранее.😊",
          false
        );
        break;

      case 52: // Alt+4
        await update(
          "ваш запрос на выплату средств был отклонен финансовым отделом, так как вы создали несколько заявок. Для успешного вывода средств вам достаточно оставить одну заявку на выплату на общую сумму. Несколько одновременных заявок на вывод средств можно оставлять только в случае, если общая сумма выигрыша превышает лимит платежной системы для одной транзакции.",
          false
        );
        break;

      case 90: // Alt+Z
        await update(
          "Все заявки на выплату рассматриваются в течение нескольких часов. Среднее время ожидания обычно составляет 1-2 часа, максимальное - 4 часа. ⏳ ",
          false
        );
        break;

      case 88: // Alt+X
        await update(
          "Ваш запрос на вывод средств был одобрен нашими специалистами ✅, и заявка на текущий момент находится в обработке на стороне платежной системы. Как правило, денежные средства поступают в течение 24 часов. Ожидайте, пожалуйста, поступления средств. ⏳ ",
          false
        );
        break;

      case 67: // Alt+C
        await update(
          "Для решения вопроса загрузите, пожалуйста, в данный чат скриншот удачного списания из приложения мобильного банкинга, где будет указана дата, сумма, время, статус операции, а также реквизиты отправителя и получателя платежа.",
          false
        );
        break;

      case 86: // Alt+V
        await update(
          "Не беспокойтесь, пожалуйста, ваш депозит обрабатывается платежной системой. Если в течение 30 минут с момента создания запроса средства не будут зачислены на ваш игровой баланс, обратитесь, пожалуйста, в чат технической поддержки повторно.😉",
          false
        );
        break;

      case 78: // Alt+N
        await update(
          "Отдача в нашем казино достаточно высокая, при этом распределяется она случайным образом между игроками. Никто не может знать, в какой момент вам повезет.",
          false
        );
        break;

      case 66: // Alt+B
        await update(
          "Я с радостью вам помогу, но уточните, пожалуйста, как я могу к вам обращаться?😇",
          false
        );
        break;

      case 75: // Alt+K
        await update(
          "На данный момент актуальными зеркалами нашего сайта являются: https://roxcasino1553.com/,  https://roxcasino1556.com/, https://roxcasino1557.com/",
          false
        );
        break;

      case 80: // Alt+P
        await update(
          "Для решения данного вопроса загрузите, пожалуйста, скриншот письма с уведомлением о получении бонуса в чат. На скриншоте должны быть указаны ваша почта, название промокода и условия получения бонуса.😇",
          false
        );
        break;

      case 79: // Alt+O
        await update(
          "Я с радостью вам помогу, но уточните, пожалуйста, название бонуса, о котором идет речь.😇",
          false
        );
        break;

      case 191: // Alt+/
        await update("Оставайтесь, пожалуйста, в чате, скоро я отвечу на ваш вопрос.☺️", false);
        break;

      case 190: // Alt+.
        await update(
          "Я обязательно вам помогу, однако подскажите, пожалуйста, денежные средства были списаны с вашего счета?😇",
          false
        );
        break;

      case 188: // Alt+,
        await update("На текущий момент у вас выполнены все условия для успешного вывода средств.😇", false);
        break;
    }
  }

  document.addEventListener("keydown", onKeydown, true);
})();
