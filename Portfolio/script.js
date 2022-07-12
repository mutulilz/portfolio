// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar navbar-expand-lg fixed-top navbarScroll');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
