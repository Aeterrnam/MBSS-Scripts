let paySystem = document.querySelector("#customfield_10071");
let payLink = document.querySelector("#customfield_10069");
let payAmount = document.querySelector("#customfield_10070");
let payUser = document.querySelector("#summary");

function setValue(el, value) {
    if (!el) {
        console.error("Element not found");
        return;
    }

    let e = {
        target: {
            value: value
        }
    };

    let reactHandlerName = Object.keys(el).find((item) => item.includes('__reactEventHandlers'));
    if (reactHandlerName) {
        let reactHandler = el[reactHandlerName];
        if (reactHandler && typeof reactHandler.onChange === 'function') {
            reactHandler.onChange(e);
        } else {
            console.error("React handler or on Change method not found");
        }
    } else {
        console.error("React handler not found");
    }
}

setValue(paySystem)
setValue(payLink)
setValue(payAmount)
setValue(payUser)

