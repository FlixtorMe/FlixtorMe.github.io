//Get querystring value
function GetQueryString(key) {
    var url = window.location.search.substring(1);
    var querystrings = url.split('&');
    for (var i = 0; i < querystrings.length; i++) {
        var keys = querystrings[i].split('=');
        if (keys[0] == key) {
            return keys[1];
        }
    }
}