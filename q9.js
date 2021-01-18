function checkArmstrong(n){
    let sum=0;
    let num= n.toString();
    for(let i=0; i<num.length; i++){
        sum += (Number(num[i]))*(Number(num[i]))*(Number(num[i]));
    }
    return sum;
}
let arr = [];
for(let i = 100; i < 1000; i++ ){
    if(i===checkArmstrong(i)){
        arr.push(i);
    }
}

console.log(arr);