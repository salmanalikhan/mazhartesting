const BUTTON_SELECTOR = "//button[@aria-label='My Ad Center']";

const BLOCK_AD_SELECTOR = "//button[@aria-label='Block ad']";
const CHECK_INTERVAL = 2000; // Check every second

function checkForButton() {
  debugger;
  console.log("test");
  let buttonResult = document.evaluate(
    BUTTON_SELECTOR,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  let button = buttonResult.singleNodeValue;
  let blockResult = document.evaluate(
    BUTTON_SELECTOR,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  );
  let blockButton = blockResult.singleNodeValue;

  if (button) {
    console.log("FOUND AD");
    button.click();
    if (blockButton) {
      console.log("BLOCKING THE AD");
      setInterval(function () {
        blockButton.click();
        clearInterval(checkInterval); // Stop checking once the button is found and clicked
      }, 3000);
    }
  }
}

const checkInterval = setInterval(checkForButton, CHECK_INTERVAL);
