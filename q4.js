let num1 = Number(prompt("Enter a number1"));
let num2 = Number(prompt("Enter a number2"));
let num3 = Number(prompt("Enter a number3"));
let num4 = Number(prompt("Enter a number4"));
let num5 = Number(prompt("Enter a number5"));

if(num1>num2 && num1>num3 && num1>num4 && num1>num5){
    alert(num1+" is the biggest");
}
if(num2>num1 && num2>num3 && num2>num4 && num2>num5){
    alert(num2+" is the biggest");
}
if(num3>num2 && num3>num1 && num3>num4 && num3>num5){
    alert(num3+" is the biggest");
}
if(num4>num2 && num4>num1 && num4>num4 && num4>num5){
    alert(num4+" is the biggest");
}
else{
    alert(num5+" is the biggest");
}