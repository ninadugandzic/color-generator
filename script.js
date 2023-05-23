const setHexBtn = document.getElementById("setHexBtn");
const hexColor = document.getElementById("hexColor");
const setRGBBtn = document.getElementById("setRGBBtn");
const hexColorError = document.getElementById("hexColorError");
const rgbError = document.getElementById("rgbError");
const square = document.getElementById("coloredDiv");
const randomGenerateColorCheckbox = document.getElementById("randomGenerateColor");
const redInput = document.getElementById("red");
const blueInput = document.getElementById("blue");
const greenInput = document.getElementById("green");
let myInterval;

setHexBtn.onclick = function() {
    setHexColor();
};

function isInputValid(element, errorElement) {
    let value = element.value.trim(); 
    if (value.startsWith("#")) {
      value = value.slice(1);
    }
  
    if (!value) {
      errorElement.classList.remove("hide");
      return false;
    }
  
    errorElement.classList.add("hide");
    return true;
  }
  

function setHexColor() {
    if (!hexColor.value) {
        errorElement.classList.remove("hide");
        return false;
    }
    square.style.backgroundColor = hexColor.value;
    return true;
}

setRGBBtn.onclick = function(){
    setRGBColor();
}

function setRGBColor(){
    if(!redInput.value || !greenInput.value ||!blueInput.value){
        rgbError.classList.remove("hide");
        return false;
    }
    square.style.backgroundColor = "rgb("+redInput.value+","+greenInput.value+","+blueInput.value+")";
}

randomGenerateColorCheckbox.onclick = function(){
    if(randomGenerateColorCheckbox.checked){
        rgbInterval = setInterval(() =>{
            randomRGB();
        }, 2000);
    } else{
        stopInterval();
    }
}

function stopInterval() {
    clearInterval(rgbInterval);
  }


function randomRGB(){
    var x = Math.floor(Math.random()*256);
    var y = Math.floor(Math.random()*256);
    var z = Math.floor(Math.random()*256);
    square.style.backgroundColor = "rgb("+x+","+y+","+z+")";
};