
let parallax = document.querySelector(".parallax");
let titulo = document.querySelector(".titulo");
function Scroll(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = 'translateY('+ scrollTop*-0.5 +'px)';
    titulo.style.transform = 'translateY('+ scrollTop*0.31 +'px)'
}
addEventListener('scroll', Scroll);
