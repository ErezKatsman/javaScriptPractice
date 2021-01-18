let num1 = Number(prompt("Enter a number1"));
let num2 = Number(prompt("Enter a number2"));
let num3 = Number(prompt("Enter a number3"));

if( num1>num2 && num1>num3){
    if(num2>num3){
        alert(num1+" "+num2+" "+num3);
    }
    else {
        alert(num1+" "+num3+" "+num2);
    }
}
if( num2>num1 && num2>num3){
    if(num1>num3){
        alert(num2+" "+num1+" "+num3);
    }
    else {
        alert(num2+" "+num3+" "+num1);
    }
}
if( num3>num2 && num3>num1){
    if(num2>num1){
        alert(num3+" "+num2+" "+num1);
    }
    else {
        alert(num3+" "+num1+" "+num2);
    }
}