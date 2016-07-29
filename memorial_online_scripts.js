// Canadian Cancer Society

window.addEventListener('message', function(event) {
    if (~event.origin.indexOf('http://localhost:57072')) {
        var frame = event.data;
        frame.height = document.documentElement.scrollHeight;
        console.log("-------->Scroll Height"+document.documentElement.scrollHeight;);
    } else {
        return;
    }
});