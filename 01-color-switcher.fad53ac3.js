!function(){var t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")},e=null;t.btnStart.addEventListener("click",(function(){if(t.btnStart.hasAttribute("disabled"))return void console.warn("The function is already running");e=setInterval((function(){t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.btnStart.setAttribute("disabled","disabled"),t.btnStop.removeAttribute("disabled"),console.log("The function is running")})),t.btnStop.addEventListener("click",(function(){t.btnStop.setAttribute("disabled","disabled"),t.btnStart.removeAttribute("disabled"),clearInterval(e),console.log("The function is stopped")}))}();
//# sourceMappingURL=01-color-switcher.fad53ac3.js.map