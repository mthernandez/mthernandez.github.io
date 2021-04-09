function pageDetect() {
    var currPath = window.location.pathname;

    if (currPath.includes("index.html")) {
        document.getElementById("navbar-link-home").classList.add("current");
    } else if (currPath.includes("portfolio.html") || currPath.includes("projects/pages")) {
        document.getElementById("navbar-link-portfolio").classList.add("current");
    } else if (currPath.includes("about.html")) {
        document.getElementById("navbar-link-about").classList.add("current");
    } else if (currPath.includes("contact.html")) {
        document.getElementById("navbar-link-contact").classList.add("current");
    } else {
        document.getElementById("navbar-link-home").classList.add("current");
    }

}