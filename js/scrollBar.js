let $ubiPrin = window.pageYOffset; //$ubiPrin = ubicacionPrincipal

 addEventListener("scroll", ()=>{
    let $des = window.pageYOffset; //$des = desplazamiento
    if($ubiPrin >= $des){
        document.getElementById('navbar').style.top = '0';
    }else{
        document.getElementById('navbar').style.top = '-100px';
        document.getElementById("btn-menu").checked = false;
        //document.querySelector('.submenu').style.
    }
});