(function () {
  // "use strict";

  let warn = document.querySelector(".warn_container"),
    main = document.querySelector(".main_content"),
    code = document.querySelector("#keycode #result"),
    name = document.querySelector("#keyname #result"),
    codeName = document.querySelector("#keycodename #result");

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      document.body.setAttribute("loaded", "true")
      warn.setAttribute("active", true)
      main.setAttribute("deactive", true)
    }, 250);
  })

  window.addEventListener("keydown", (e) => {
    e.preventDefault();

    console.log(e)

    code.innerHTML = e.keyCode;
    name.innerHTML = e.key;
    codeName.innerHTML = e.code;

    revert();
  })

  function revert() {
    setTimeout(() => {
      main.setAttribute("active", true)
      warn.setAttribute("deactive", true)
    }, 250);

    warn.removeAttribute("active")
    main.removeAttribute("deactive")
  }
})();