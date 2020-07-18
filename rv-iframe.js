(function () {

    var iframeSource = "https://abrakadaba.github.io/faq-example/";

    var iframe = document.createElement("iframe");
    var iframeBox = document.getElementById("rv-iframe-box");
    iframe.setAttribute("src", iframeSource);
    iframe.setAttribute("src", iframeSource);
    iframe.setAttribute("style", "border: 0px; margin: 0px auto; display: block;");
    iframe.setAttribute("id", "rv_iframe");
    // iframe.style.width = 450 + "px";
    // iframe.style.height = 400 + "px";
  iframeBox.appendChild(iframe);

})();
