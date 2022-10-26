function hamburgerMenu() {
    // Toggle the side menu
    let hamburgerMenu = document.querySelector(".menu-overlay");
    let menuStyle = getComputedStyle(hamburgerMenu);

    if (menuStyle.display == "none") {
        document.getElementById("right-nav").style.display = "flex";
    } else {
        document.getElementById("right-nav").style.display = "none";
    }

    // Exchange hamburger icon and close icon
    let hamburgerIcon = document.querySelector("#ham-icon");
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.replace("fa-bars", "fa-times-circle");
        return;
    } else {
        hamburgerIcon.classList.replace("fa-times-circle", "fa-bars");
        return;
    }
}

function hamburgerMenu() {
    // Toggle the side menu
    let hamburgerMenu = document.querySelector(".menu-overlay");
    let menuStyle = getComputedStyle(hamburgerMenu);

    if (menuStyle.display == "none") {
        document.getElementById("right-nav").style.display = "flex";
    } else {
        document.getElementById("right-nav").style.display = "none";
    }

    // Exchange hamburger icon and close icon
    let hamburgerIcon = document.querySelector("#ham-icon");
    if (hamburgerIcon.classList.contains("fa-bars")) {
        hamburgerIcon.classList.replace("fa-bars", "fa-times-circle");
        return;
    } else {
        hamburgerIcon.classList.replace("fa-times-circle", "fa-bars");
        return;
    }
}