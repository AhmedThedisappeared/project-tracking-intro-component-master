const toggler = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".navbar");

toggler.addEventListener('click',()=>{
    if(toggler.classList.contains('show')){
        toggler.classList.remove('show');
        toggler.setAttribute("src", "images/icon-close.svg");
        navbar.style.display= "block";
    } else {
        toggler.classList.add("show");
        toggler.setAttribute("src", "images/icon-hamburger.svg");
        navbar.style.display = "none";
    }
})