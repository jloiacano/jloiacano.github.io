(function () {
    "use strict";

    var pageWidth, currentPage;

    window.aBlankFunction = function (where) {
        console.log("aBlankFunction() called from " + where);
    };

    window.delayTheVariableChange = function (number, iOrD) {
        if (iOrD === "i") {
            number += 1;
            return number;
        } else if (iOrD === "d") {
            number -= 1;
            return number;
        } else {
            console.log("issue with iOrD in delayTheVariableChange");
            return number;
        }
    };

    window.goToPage = function (page) {
        console.log("goToPage() started");
        pageWidth = document.body.clientWidth;
        var currentX = ((currentPage - 1) * pageWidth),
            pointToGoTo = ((page - 1) * pageWidth);
        currentPage = page;
        console.log("currentX = " + currentX + "\npointToGoTo = " + pointToGoTo);
        while (currentX !== pointToGoTo) {
            console.log("goToPage while loop started.");
            if (currentX > pointToGoTo) {
                currentX = window.setTimeout(window.delayTheVariableChange(currentX, 'd'), 100);
                console.log("currentX: " + currentX);
                window.scrollTo(currentX, 0);
            } else if (currentX < pointToGoTo) {
                currentX = window.setTimeout(window.delayTheVariableChange(currentX, 'i'), 100);
                window.setTimeout(window.aBlankFunction('setTimeout'), 100);
                console.log("currentX: " + currentX);
                window.scrollTo(currentX, 0);
            } else {
                console.log("currentX and pointToGoTo are equal");
            }
        }
    };

    document.getElementById("home").addEventListener("click", function () {
        window.goToPage(1);
    });
    document.getElementById("about").addEventListener("click", function () {
        window.goToPage(2);
    });
    document.getElementById("talents").addEventListener("click", function () {
        window.goToPage(3);
    });
    document.getElementById("contact").addEventListener("click", function () {
        window.goToPage(4);
    });

    function loadThePage() {
        pageWidth = document.body.clientWidth;
        currentPage = 1;
    }

    window.onload = function () {
        loadThePage();
    };

}());
