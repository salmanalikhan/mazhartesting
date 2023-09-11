document.getElementById("activate").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tabId = tabs[0].id;
    chrome.runtime.sendMessage({ action: "clickButton", tabId: tabId });
  });
});
