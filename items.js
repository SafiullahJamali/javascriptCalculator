let display = document.getElementById("calculator-display");

function cleardisplay(){

        display.value = " ";
}
function deleteLast(){

    display.value = display.value.slice(0, -1);
}

function appendInput(value){

    display.value += value;

}
function calculator()  
{
    display.value = eval(display.value);

}