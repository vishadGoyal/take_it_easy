const DEFAULT_DELAY_MINUTES = 30;
const NOTIFICATION_ID = "take_it_easy";
let IS_DISABLED = false;

chrome.notifications.onButtonClicked.addListener((id, buttonIndex) => {
    if (id === NOTIFICATION_ID) {
        switch(buttonIndex) {
            case 1:
                IS_DISABLED = true;
                return;
            default:
                // do nothing.
                return;
        }
    }
});

function notify() {
    if (IS_DISABLED) {
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
setInterval(notify, DEFAULT_DELAY_MINUTES * 60000);