chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'notif') {
        chrome.notifications.create('', {
            title: 'New Chat',
            type: 'basic',
            message: 'in new LiveCha0 =t',
            iconUrl: '/icon128.png'
        })
        return true
    }
    if (msg.action === 'notifmsg') {
        chrome.notifications.create('', {
            title: 'New massage',
            type: 'basic',
            message: 'in new LiveCha0 =t',
            iconUrl: '/icon128.png'
        })
        return true
    }
})