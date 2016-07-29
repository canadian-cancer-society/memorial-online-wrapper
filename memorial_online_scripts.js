// Canadian Cancer Society

window.addEventListener('message', function(event) {
    if (~event.origin.indexOf('http://localhost:57072')) {
        var frame = event.data;
        frame.height = document.documentElement.scrollHeight;
        console.log("-------->Scroll Height"+document.documentElement.scrollHeight);
    } else {
        return;
    }
});

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}​;

console.log("------> Lanaguage = "+GetURLParameter("s_locale"));
console.log("------> Company = "+GetURLParameter("s_orgGift"));
console.log("------> Photo = "+GetURLParameter("moPersonImage"));
console.log("------> Full Name = "+GetURLParameter("moPersonFullname"));