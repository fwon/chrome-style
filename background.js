chrome.extension.onConnect.addListener(function(port) {
    console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
        console.log("message recieved "+ msg);
        // chrome.tabs.executeScript(null,{code:"document.body.style.backgroundColor='" + msg + "'"});
        if(msg === 'color-picker') {
            chrome.tabs.executeScript(
                null, {
                    file: 'jquery.min.js'
                }, function() {
                    chrome.tabs.executeScript(
                        null, {
                            file: 'color.js'
                        }
                    );
                }
            );
        }
        port.postMessage("Hi Popup.js");
    });
});
