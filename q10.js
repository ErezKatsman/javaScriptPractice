let times = Number(prompt("Enter the size of the traingle base *"));
let line = '' ;
for(let i = 0; i <= times; i++){
    for(let j = 0; j < i; j++){
        line = line + '*';
    }
    console.log(line);
    line = '';
}
