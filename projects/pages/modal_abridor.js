// Big props to Snowmonkey on Stackoverflow (Question 47798971)
// create references to the modal...
var modal = document.getElementById('modal-main');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('norm-img');
// the image in the modal
var modalImg = document.getElementById("modal-img");
// and the caption in the modal
var captionText = document.getElementById("modal-cap");
// and the closing button
var modal_close = document.getElementById("modal-close");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

modal_close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
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