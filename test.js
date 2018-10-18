document.addEventListener("keydown",sizeFunc,false)
function sizeFunc(key){
    if (key.keyCode == "69"){
        increaseFunction();
        console.log("Pressed E")
    }
    else if (key.keyCode == "70"){
        decreaseFunction();
    }
    else {
        console.log("error")
    }
}
function increaseFunction(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)
    if (currentSize < 60){
        document.getElementById("Balloon").style.fontSize = (currentSize + 15) + 'px'
    }
    else {
        document.getElementById("Balloon").textContent="💥"
        document.removeEventListener("keydown",sizeFunc)
    }
}
function decreaseFunction(){
    var id = document.getElementById("Balloon")
    var fontSize = window.getComputedStyle(id,null).getPropertyValue('font-size')
    var currentSize = parseFloat(fontSize)
    if (currentSize > 15){
        document.getElementById("Balloon").style.fontSize = (currentSize - 15) + 'px'
    }
    else {
        document.getElementById("Balloon").textContent="💀Done💀"
        document.removeEventListener("keydown",sizeFunc)
    }
}