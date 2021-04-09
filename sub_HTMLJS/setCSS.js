function setCSS() {
    /* var stored = sessionStorage.getItem("stylePref");
    console.log(stored);
    if (stored === null) {
        sessionStorage.setItem("stylePref", "CSS/styleDark.css");
        document.getElementById("mode-toggle").checked = false;
    }
    else {
        var oldlink = document.getElementsByTagName("link").item(0);
        var newlink = document.createElement("link");

        if (stored.includes("../../")) {
            stored = stored.substring(6, stored.length);
        }

        newlink.setAttribute("rel", "stylesheet");
        newlink.setAttribute("type", "text/css");
        newlink.setAttribute("href", stored);

        document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

        if (stored === "CSS/styleDark.css") {
            document.getElementById("mode-toggle").checked = true;
            changeCSS("CSS/styleLite.css");
        }
        else {
            document.getElementById("mode-toggle").checked = false;
            changeCSS("CSS/styleDark.css");
        }
    }*/
}