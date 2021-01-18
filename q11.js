function gdcNumber(num1,num2){
    let gdc=-1;
    for( let i = 2 ; i < num2 ; i++ ){
        if((num1%i === 0) && (num2%i === 0)){
            gdc=i;
        }
    }
    return gdc;
}

let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter a smaller number"));
if(num1>num2){
    if( gdcNumber(num1,num2) === -1 ){
        console.log( "There is no GDC number" )
    }else{
        console.log( "The GDC number is " + gdcNumber(num1, num2) );
    }
} else{
    if( gdcNumber(num2,num1) === -1 ){
        console.log( "There is no GDC number" )
    }else{
        console.log( "The GDC number is " + gdcNumber(num2, num1) );
    }
}


