// (function () {

//      function getDocHeight(doc) {
//         doc = doc || document;
//         // stackoverflow.com/questions/1145850/
//         var body = doc.body, html = doc.documentElement;
//         var height = Math.max( body.scrollHeight, body.offsetHeight,
//             html.clientHeight, html.scrollHeight, html.offsetHeight );
//         return height;
//     }

//     function setIframeHeight(id) {
//         var ifrm = document.getElementById(id);
//         var doc = ifrm.contentDocument? ifrm.contentDocument:
//             ifrm.contentWindow.document;
//         ifrm.style.visibility = 'hidden';
//         ifrm.style.height = "10px"; // reset to minimal height ...
//         // IE opt. for bing/msn needs a bit added or scrollbar appears
//         ifrm.style.height = getDocHeight( doc ) + 4 + "px";
//         ifrm.style.visibility = 'visible';
//     }
    
    
//     var iframeSource = "https://abrakadaba.github.io/faq-example/";

//     var iframe = document.createElement("iframe");
//     var iframeBox = document.getElementById("rv-iframe-box"); 
//     iframe.setAttribute("src", iframeSource);
//     iframe.setAttribute("style", "border: 0px; margin: 0px auto; display: block;visibility:hidden;");
//     iframe.setAttribute("id", "rv_iframe");
//      iframe.setAttribute("onload", "setIframeHeight(this.id)"); 
//     iframeBox.appendChild(iframe);

    
    function setIframeHeightCO(id, ht) {
    var ifrm = document.getElementById(id);
    ifrm.style.visibility = 'hidden';
    // some IE versions need a bit added or scrollbar appears
    ifrm.style.height = ht + 4 + "px";
    ifrm.style.visibility = 'visible';
}


// iframed document sends its height using postMessage
function handleDocHeightMsg(e) {
    console.log("in function");
    // check origin
    if ( e.origin === 'https://github.com/AbrakaDaba' ) {
        // parse data
        console.log("in function, e.origin checked");
        var data = JSON.parse( e.data );
        // check data object
        if ( data['docHeight'] ) {
            setIframeHeightCO( 'ifrm', data['docHeight'] );
            console.log(data['docHeight']);
        } else if ( data['href'] ) { 
            setIframe('ifrm', data['href'] );
        }
    }
}

// assign message handler
if ( window.addEventListener ) {
    window.addEventListener('message', handleDocHeightMsg, false);
    console.log("message ocured")
} else if ( window.attachEvent ) { // ie8
    window.attachEvent('onmessage', handleDocHeightMsg);
}
    
    
// })();
