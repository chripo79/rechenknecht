var nav_aube = document.getElementById("nav_aube");
nav_aube.addEventListener("click", function () {
    versteckeAlle();
    document.getElementById("berechne").classList.replace('sech', 'secs');
});

var nav_about = document.getElementById("nav_about");
nav_about.addEventListener("click", function () {
    versteckeAlle();
    document.getElementById("about").classList.replace('sech', 'secs');
});



function versteckeAlle() {
    var hide = document.getElementsByClassName('secs');
    if (hide.length > 0) {
        for (var i = 0; i <= hide.length; i++) {
            hide[i].classList.replace('secs', 'sech');
        }
    }
}