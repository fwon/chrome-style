function click(id) {
    // window.close();
    var port = chrome.extension.connect({name: "Sample Communication"});
    port.postMessage(id);
    port.onMessage.addListener(function(msg) {
        console.log("message recieved"+ msg);
    });
}

document.addEventListener('DOMContentLoaded', function () {
    $('#content').on('click', 'div', function(e) {
        click(e.target.id);
    });
});

