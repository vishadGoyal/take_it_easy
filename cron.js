const DEFAULT_DELAY_MINUTES = 30;
const NOTIFICATION_ID = "take_it_easy";
let IS_DISABLED = false;

const intervalId = setInterval(notify, DEFAULT_DELAY_MINUTES * 60000);

chrome.notifications.onButtonClicked.addListener((id, buttonIndex) => {
    if (id === NOTIFICATION_ID) {
        switch(buttonIndex) {
            case 1:
                IS_DISABLED = true;
                clearInterval(intervalId);
                return;
            default:
                // do nothing.
                return;
        }
    }
});

function isWeekend() {
    const day = new Date().getDay();
    return (day === 0) || (day === 6);
}

function notify() {
    if (IS_DISABLED || !isWeekend()) {
        return;
    }
    chrome.notifications.create(
        NOTIFICATION_ID,
        {
        "type": "basic",
        "iconUrl": chrome.extension.getURL("icons/border-48.png"),
        "title": "It's the weekend!",
        "message": "Are you sure you don't have anything better to do?",
        "buttons": [
            {
                "title": "Just 30 more minutes!",
            },
            {
                "title": "I like pain!"
            }
        ]
        }
    );
}
setTimeout(notify, 10000);
