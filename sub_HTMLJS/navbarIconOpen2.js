function navbarIconOpen2() {
    var x = document.getElementById("navbar-links");
    if (!x.classList.contains("clicked")) {
        x.classList.add("clicked");
        x.classList.remove("notclicked");
    }
    else {
         //setTimeout(function () {
            x.classList.add("notclicked");
            x.classList.remove("clicked");
        //}, 500);
    }
}