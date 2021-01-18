function sumSquDig(n){
    let sum=0;
    let num= n.toString();
    for(let i=0; i<num.length; i++){
        sum += (Number(num[i]))*(Number(num[i]));
    }
    return sum;
}

function isHappy(n){
    let arr=[];
    while((n !== 1) && arr[n] !== true){
        arr[n] = true;
        n = sumSquDig(n);
    }
    return (n===1);
}

let num=1;
let arr=[];
for(let i=0; i<5; i++){
    while(!isHappy(num)){ 
        num++;
    }   
    arr.push(num);
    num++;
}

console.log(arr);

