log_user_in = function(username_param, password_param) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {username: username_param, password: password_param}, function(response) {
            // Ignore any response.
        });
    });
}