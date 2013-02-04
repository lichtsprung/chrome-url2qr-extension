chrome.windows.getCurrent(function(w) {
    chrome.tabs.getSelected(w.id,
    function (response){
        $("#qr").qrcode(response.url);
    });
});
