//Hide the preloader
window.onload = function(){
    document.querySelector("#preloader").style.display = "none";
}

//Go to top
let mybutton = document.getElementById("btnGoTop");
window.onscroll = function() {scrollFunction()};
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