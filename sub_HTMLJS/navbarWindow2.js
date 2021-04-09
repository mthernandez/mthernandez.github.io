window.onclick = function (event) {
    var navbar = document.getElementById("navbar-links");
    if (navbar.classList.contains("clicked")) {
        console.log("click!");
        var navbar_icon = document.getElementById("navbar-icon");
        if (!(event.target === navbar_icon)) {
            navbar.classList.add("notclicked");
            navbar.classList.remove("clicked");
        }
    }
}