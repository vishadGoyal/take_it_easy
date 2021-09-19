function notify() {
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/border-48.png"),
      "title": "It's the weekend!",
      "message": "Are you sure you don't have anything better to do?",
      "buttons": [
          {
              "title": "Snooze",
          },
          {
              "title": "Don't bother me again!"
          }
      ]
    });
}

setInterval(notify, 10000);