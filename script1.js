$(document).ready(function(){
    console.log("hai la mamma");   
    setTimeout(function () {
        console.log("hai la mamma1");   
        $("#cookieConsent").fadeIn(50);
     }, 4000);
    $("#closeCookieConsent, .cookieConsentOK").click(function() {
        console.log("hai la mamma2");   
        $("#cookieConsent").fadeOut(50);
    }); 
}); 