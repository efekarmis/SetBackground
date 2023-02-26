// Projenin Sabitleri
const red = document.querySelector(".getRedValue");
const green = document.querySelector(".getGreenValue");
const blue = document.querySelector(".getBlueValue");
const allColors = document.getElementsByClassName("setColor");
const panelbg = document.querySelector(".panel");
var buttonId = 0;
let buttonList = [];

//Button Olusturma ve Dizayn
function Button(assignColor) {
  this.buttonId = buttonId;
  this.button = document.createElement("button");
  this.button.style.backgroundColor = assignColor;
  this.button.style.borderRadius = "5px";
  this.button.style.width = "4rem";
  this.button.style.height = "4rem";
  buttonId++;
  this.button.setAttribute("id", `button${buttonId}`);
  this.button.setAttribute("onClick", `addFuncNewButton(button${buttonId})`);
  this.button.innerHTML = rgbToHex(Number(red.value), Number(green.value), Number(blue.value));
  setFontColor(this.button);
  buttonList.push(this.button);
  // console.log(buttonList[this.buttonId].style.backgroundColor)
}

const clear_Inputs = () => {
  for (var i = 0; i < allColors.length; i++) {
    allColors[i].children[0].value = "";
  }
};

// Buttona işlevsellik kazandırma
const addFuncNewButton = (clicked_id) => {
  var clicked_id;
  document.querySelector(".panel").style.backgroundColor =
    clicked_id.style.backgroundColor;
};

const validateSystem = () => {
  let isValue = true;
  let isValueMessage = "";
  if(red.value == "" || isNaN(red.value)){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Enter a valid red value!\n";
  }
  else if(red.value >= 256 || red.value < 0){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Red Value could not be less than 0 and more than 255\n";
  }  
  if(green.value == "" || isNaN(green.value)){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Enter a valid green value!\n";
  }
  else if(green.value >= 256 || green.value < 0){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Green Value could not be less than 0 and more than 255\n";
  }
  if(blue.value == "" || isNaN(blue.value)){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Enter a valid blue value!\n";
  }
  else if(blue.value >= 256 || blue.value < 0){
    if(isValue != false){
      isValue = false;
    }
    isValueMessage += "Blue Value could not be less than 0 and more than 255\n";
  }
  return {result: isValue, message: isValueMessage}
}

const setFontColor = (place) => {
  if (red.value > 150 || green.value > 150 || blue.value > 150){
    place.style.color = "rgb(0,0,0)"
  } 
  else{
    place.style.color = "rgb(255,255,255)"
  }
}

const componentToHex = (color) => {
  var hex = color.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

// Button Fonksiyonu
const createButton = () => {
  const assignColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
  // Button Element Olusturma
  const newButton = new Button(assignColor);
  document.querySelector(".buttonPanel").style.display = "flex";
  document.querySelector(".buttonPanel__items").append(newButton.button);
  // Arkaplan Rengini Ayarlama
  setFontColor(panelbg);
  panelbg.style.backgroundColor = assignColor;
  // Verileri Temizliyoruz
  clear_Inputs();
};

document.querySelector(".set-bg").addEventListener("click", function () {
  const rgbAlert = validateSystem();
  !rgbAlert.result ? alert(rgbAlert.message) : createButton();
});


