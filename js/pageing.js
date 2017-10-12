//get the window width

// set "page" points based on multiples of window width

// apply "page" points to be moved to when user clicks anchors

// slide the allPages <div>

var pageWidth;
var currentPage;

document.getElementById("home").addEventListener("click", function() { goToPage(1) });
document.getElementById("about").addEventListener("click", function() { goToPage(2) });
document.getElementById("talents").addEventListener("click", function() { goToPage(3) });
document.getElementById("contact").addEventListener("click", function() { goToPage(4) });

function goToPage(page) {
    "use strict";
    pageWidth = document.body.clientWidth;
    currentPage = page;
    var pointToGoTo = (currentPage - 1) * pageWidth;
    window.scrollTo(pointToGoTo, 0);
}

function loadThePage() {
    "use strict";
    pageWidth = document.body.clientWidth;
    currentPage = 1;
}

window.onload = function () {
    "use strict";
    loadThePage();
};
