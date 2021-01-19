var elements = document.querySelector('.caja');
// pendiente
var widthPage = document.documentElement.clientWidth;
var ancho = widthPage/ 9.8;
//debugger

anime({
  targets: '.caja',
  translateX: anime.stagger(ancho),
  delay: anime.stagger(200,{
                            from:'last',
                            start: 1200,
                            easing: 'easeInOutCubic'
                        }),
  direction: 'alternate',
  duration: 4000,
  loop: true
});