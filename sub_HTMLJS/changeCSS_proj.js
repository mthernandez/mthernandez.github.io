function changeCSS_proj(stored, cssLinkIndex) {
    /* if (stored === "../../CSS/styleDark.css") {
        cssFile = "../../CSS/styleLite.css";
        cssFileMod = "../../CSS/styleLite.css";
        document.getElementById("mode-toggle").checked = true;
    } else if (stored === "CSS/styleLite.css") {
        cssFile = "CSS/styleDark.css";
        cssFileMod = "../../CSS/styleDark.css";
        document.getElementById("mode-toggle").checked = false;
    } else if (stored === "CSS/styleDark.css") {
        cssFile = "CSS/styleLite.css";
        cssFileMod = "../../CSS/styleLite.css";
        document.getElementById("mode-toggle").checked = true;
    } else {
        cssFile = "../../CSS/styleDark.css";
        cssFileMod = "../../CSS/styleDark.css";
        document.getElementById("mode-toggle").checked = false;
    }
    
    sessionStorage.setItem("stylePref", cssFileMod);
    
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");

    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink); */
}