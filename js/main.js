//Hide the preloader
window.onload = function () {
    document.querySelector("#preloader").style.display = "none";
}

//Go to top
let mybutton = document.getElementById("btnGoTop");
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function GoTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Tab Content

function showTab(evt, tabId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" choose", "");
    }
    document.getElementById(tabId).style.display = "block";
    evt.currentTarget.className += " choose";
}
function ShowMenu() {
    var x = document.getElementById("navbarMobile");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
