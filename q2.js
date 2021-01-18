let x = Number(prompt("Enter a number"));
let y = Number(prompt("Enter another number"));
let z = Number(prompt("Enter the last number"));
let minus = "The sing is -";
let plus = "The sing is +";
//if jusr one number or all three numbers will have a negative it will alert minus, else it alert plus
if( x<0 && y>0 && z>0 ){  
    alert(minus);
} 
else if(x>0 && y<0 && z>0){
    alert(minus);
} 
else if(x>0 && y>0 && z<0){
    alert(minus);
} 
else if( x<0 && y<0 && z<0 ){
    alert(minus);
} else {
    alert(plus);
}
