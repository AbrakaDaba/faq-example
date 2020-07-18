(function () {

    var iframeSource = "https://abrakadaba.github.io/faq-example/";

    var iframe = document.createElement("iframe");
    var iframeBox = document.getElementById("rv-iframe-box"); 
    iframe.setAttribute("src", iframeSource);
    iframe.setAttribute("style", "border: 0px; margin: 0px auto; display: block;visibility:hidden;");
    iframe.setAttribute("id", "rv_iframe");
     iframe.setAttribute("onload", "setIframeHeight(this.id)"); 
    iframeBox.appendChild(iframe);

    
     function getDocHeight(doc) {
        doc = doc || document;
        // stackoverflow.com/questions/1145850/
        var body = doc.body, html = doc.documentElement;
        var height = Math.max( body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight );
        return height;
    }

    function setIframeHeight(id) {
        var ifrm = document.getElementById(id);
        var doc = ifrm.contentDocument? ifrm.contentDocument:
            ifrm.contentWindow.document;
        ifrm.style.visibility = 'hidden';
        ifrm.style.height = "10px"; // reset to minimal height ...
        // IE opt. for bing/msn needs a bit added or scrollbar appears
        ifrm.style.height = getDocHeight( doc ) + 4 + "px";
        ifrm.style.visibility = 'visible';
    }
    
    
})();
