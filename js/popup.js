function log_user_in(username, password) {
    var bg = chrome.extension.getBackgroundPage();
    bg.log_user_in(username, password);
}

$(document).ready(function(){
    var accounts = JSON.parse(localStorage["accounts"]);
    for (var i = 0; i < accounts.length; i++) {
        $("body").prepend(' \
            <a href="#" class="login" username="' + accounts[i].username + '" password="' + accounts[i].password + '"> \
            <div class="user_account">'
            + (accounts[i].name == undefined ? accounts[i].username  : accounts[i].name + '<br /><font class="username_subtext">' + accounts[i].username + '</font>') +
            '</div> \
            </a>');
    }
    $(".login").click(function(){
        log_user_in($(this).attr("username"), $(this).attr("password"));
        window.close();
    });
});


