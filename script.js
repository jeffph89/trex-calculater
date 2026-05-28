const display = document.getElementById("display");

function appendValue(value){
  display.value += value;
}

function calculate(){

  try{
    display.value = eval(display.value);
  }

  catch{
    display.value = "ERROR";
  }

}

function clearDisplay(){
  display.value = "";
}