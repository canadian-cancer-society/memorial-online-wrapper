// Canadian Cancer Society


// Initialize tha page
//window.onload = initiate;

$(document).ready(function () {


    initiate();
});


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
    console.log("------> Full Name = " + GetURLParameter("fullName"));

    var virtual_memorial_portrait_id    = document.getElementById("virtual_memorial_portrait_idhidden");
    var virtual_memorial_portrait_url   = document.getElementById("virtual_memorial_portrait_urlhidden");

    var virtual_memorial_portrait_data  = document.getElementById("honoree_titlehidden");
    //var virtual_memorial_api_url        = document.getElementById("tribute_honoree_first_namehidden");

    var inputHonoreeFullname = document.getElementById("tribute_honoree_namename");
    var inputHonoreeFullnameLabel = (inputHonoreeFullname!=null)? inputHonoreeFullname.parentNode.parentNode.parentNode.getElementsByClassName("section-header-container")[1] : null ;
    var honoreeFullname = null;
    var initialLabelValue = (document.getElementById("tribute_honoree_label")!=null)? document.getElementById("tribute_honoree_label").value : null ;
    


    if (GetURLParameter("fullName") != null )
    {
        //console.log("------> Parameters Not Null");
        honoreeFullname = decodeURIComponent(GetURLParameter("fullName"));

        virtual_memorial_portrait_id.value = (GetURLParameter("portrait_id") != null) ? GetURLParameter("portrait_id") : null;
        virtual_memorial_portrait_url.value = (GetURLParameter("portrait_url") != null) ? decodeURIComponent(GetURLParameter("portrait_url")) : null;

        virtual_memorial_portrait_data.value = ((GetURLParameter("portrait_id") != null) ? GetURLParameter("portrait_id") : null) + ',' + ((GetURLParameter("api_url") != null) ? decodeURIComponent(GetURLParameter("api_url")) : null);
        //virtual_memorial_api_url.value = (GetURLParameter("api_url") != null) ? decodeURIComponent(GetURLParameter("api_url")) : null;
    }

    if ( honoreeFullname != null && honoreeFullname.length > 0 ) {

        if (inputHonoreeFullname != null) {

            inputHonoreeFullname.value = honoreeFullname;
            inputHonoreeFullname.style.display = "none";
            //console.log("------> Input Not Null");
        }

        if (inputHonoreeFullnameLabel != null) {
            console.log("------> Label Not Null");
            inputHonoreeFullnameLabel.innerHTML = initialLabelValue + "<br /><strong>" + honoreeFullname + "</strong>";
        }
    }
    else {
        if (inputHonoreeFullname != null) {
            inputHonoreeFullname.style.display = "block";
        }

    }


}

