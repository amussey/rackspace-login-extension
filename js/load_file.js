$(document).ready(function(){
    document.getElementById('files').addEventListener('change', readBlob, false);
});

function readBlob(evt) {
    var files = document.getElementById('files').files;
    if (!files.length) {
        alert('Please select a file!');
        return;
    }

    var file = files[0];
    var start = 0;
    var stop = file.size - 1;

    var reader = new FileReader();

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function(evt) {
        if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            var new_json = $.parseJSON(evt.target.result);
        
            localStorage["accounts"] = JSON.stringify(new_json);

            if (!$('#developer_mode').is(":checked")) {
                window.close();
            } else {
                for (var i = 0; i < new_json.length; i++) {
                    $("#accounts").append(return_div(new_json[i].username, new_json[i].password, new_json[i].name));
                }
                $("#code").append(evt.target.result);
            }

        }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}
  
function return_div(username, password, name) {
    return '<div class="row"> \
                <div class="col-lg-3"> \
                </div> \
                    <div class="col-lg-6 username_debug">'
                    + (name == undefined ? username : name + '<br /><font class="username_subtext">' + username + '</font>') +
                    '</div> \
                <div class="col-lg-3"> \
                </div> \
            </div>';
}