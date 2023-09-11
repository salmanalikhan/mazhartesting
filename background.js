chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "clickButton") {
    chrome.scripting.executeScript({
      target: { tabId: message.tabId },
      function: clickTheButton,
    });
  }
});

function clickTheButton() {
  const button = document.querySelector("YOUR_BUTTON_SELECTOR_HERE"); // Replace with your button selector

  if (button) {
    button.click();
  }
}
