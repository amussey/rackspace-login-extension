
$(document).ready(function(){
    $("#load_acccounts").click(function(){
        readBlob();
    });
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

            for (var i = 0; i < new_json.length; i++) {
                $("#accounts").append(return_div(new_json[i].username, new_json[i].password));
            }
        
            $("#code").append(evt.target.result);
            window.close();
        }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
}
  

function return_div(username, password) {
  return '<div class="col-lg-12" style="background-color:#faa; padding:20px; border: 1px solid #000;">' + username +  '</div>';
}