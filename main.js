var elementBg = document.getElementById("bg") ;

function setClass(){
    function bg1(){
        elementBg.className = "bg1"
    }
    function bg2(){
        elementBg.className = "bg2"
    }
    function bg3(){
        elementBg.className = "bg3"
    }
    setTimeout(bg2,2000);
    setTimeout(bg3,4000);
    setTimeout(bg1,6000);
}
setInterval(setClass, 8000);