function notify() {
    console.log("Notify entered.");
    browser.notifications.create({
      "type": "basic",
      "iconUrl": browser.extension.getURL("icons/border-48.png"),
      "title": "It's the weekend!",
      "message": "Are you sure you don't have anything better to do?"
    });
}

setInterval(notify, 10000);