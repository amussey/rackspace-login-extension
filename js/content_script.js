chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        $('input[name=username]').val(request.username);
        $('input[name=password]').val(request.password);
        $(':button').trigger('click');
    }
);