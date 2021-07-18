window.addEventListener("touchstart", function(e){
    e.preventDefault();
}, {passive : false});
window.addEventListener("touchmove", function(e){
    e.preventDefault();
}, {passive : false});
window.addEventListener("touchcancel", function(e){
    e.preventDefault();
}, {passive : false});
window.addEventListener("touchend", function(e){
    e.preventDefault();
}, {passive : false});

window.document.addEventListener("touchstart", function(e){
    e.preventDefault();
}, {passive : false});
window.document.addEventListener("touchmove", function(e){
    e.preventDefault();
}, {passive : false});
window.document.addEventListener("touchcancel", function(e){
    e.preventDefault();
}, {passive : false});
window.document.addEventListener("touchend", function(e){
    e.preventDefault();
}, {passive : false});

window.addEventListener('gesturestart', function(e){
    e.preventDefault();
}, {passive : false});
window.addEventListener('gesturechange', function(e){
    e.preventDefault();
}, {passive : false});
window.addEventListener('gestureend', function(e){
    e.preventDefault();
}, {passive : false});

window.document.addEventListener('gesturestart', function(e){
    e.preventDefault();
}, {passive : false});
window.document.addEventListener('gesturechange', function(e){
    e.preventDefault();
}, {passive : false});
window.document.addEventListener('gestureend', function(e){
    e.preventDefault();
}, {passive : false});

(function(){
    var element = document.getElementById("gameFrame");
    element.style.display = "block";
    element.style.position = "absolute";
    element.style.top = "0px";
    element.style.left = "0px";
    var xSize = 0;
    var ySize = 0;
    function fixView(){        
        var element = document.getElementById("gameFrame");
        xSize = window.innerWidth;
        ySize = window.innerHeight;
        element.style.width = "100%";
        element.style.height = "100%";
    }
    function checkFixView(){
        if(xSize != screen.width|| ySize != screen.height){
            fixView();
        }
        setTimeout(checkFixView, 1000);
    }
    checkFixView();
    document.body.onresize = fixView;
}());