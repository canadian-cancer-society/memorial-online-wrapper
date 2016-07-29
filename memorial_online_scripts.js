// Canadian Cancer Society


// Initialize tha page
window.onload = initiate;

//window.addEventListener('message', function(event) {
//    if (~event.origin.indexOf('http://localhost:57072')) {
//        var frame = event.data;
//        frame.height = document.documentElement.scrollHeight;
//        console.log("-------->Scroll Height"+document.documentElement.scrollHeight);
//    } else {
//        return;
//    }
//});

$('#level_standardexpanded41360amount').keypress(function (event) {
    if (event.which <= 46 || event.which > 59) {
        event.preventDefault();
    }
    console.log("------> Key Press");
});
$('#level_standardexpanded41360amount').bind('blur', function (e) {
    if ($(this).val().length > 0) $(this).val(parseFloat($(this).val()).toFixed(2));
    console.log("------> Bind");
});

//
function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

//
function initiate() {

    console.log("------> Lanaguage = " + GetURLParameter("s_locale"));
    console.log("------> Company = " + GetURLParameter("s_orgGift"));
    console.log("------> Photo = " + GetURLParameter("moPersonImage"));
    console.log("------> Full Name = " + GetURLParameter("moPersonFullname"));

    var inputHonoreeFullname = document.getElementById("tribute_honoree_namename");
    var inputHonoreeFullnameLabel = inputHonoreeFullname.parentNode.parentNode.parentNode.getElementsByClassName("section-header-container")[1];
    var honoreeFullname = GetURLParameter("moPersonFullname");
    var initialLabelValue = document.getElementById("tribute_honoree_label").value;

    if (honoreeFullname != null) {

        if (inputHonoreeFullname != null) {

            inputHonoreeFullname.value = honoreeFullname;
            inputHonoreeFullname.style.display = "none";
            /////////////////////
            console.log("------> Input Not Null");
        }

        if (inputHonoreeFullnameLabel != null) {
            console.log("------> Label Not Null");
            inputHonoreeFullnameLabel.innerText = initialLabelValue + " " + honoreeFullname;
        }
    }
    else {
        if (inputHonoreeFullname != null) {
            inputHonoreeFullname.style.display = "block";
        }

    }


}

