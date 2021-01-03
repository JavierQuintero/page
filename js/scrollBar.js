let $ubiPrin = window.pageYOffset; //$ubiPrin = ubicacionPrincipal
window.onscroll = function(){
    let $des = window.pageYOffset; //$des = desplazamiento
    if($ubiPrin >= $des){
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById("btn-menu").checked = false;
    }
}