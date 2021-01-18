let grade = Number(prompt("Enter your grades, to stop enter negative number"));
let avgGrades = 0 , counter=0;;
while(grade >= 0){
    counter++;
    avgGrades += grade;
    grade = Number(prompt("Enter your grades, to stop enter negative number"));
}
avgGrades/=counter;
alert("The averge grade is: " + avgGrades);
if(avgGrades<60){
    alert('F');
} else if( avgGrades < 70 ){
    alert('D');
} else if(avgGrades < 80){
    alert('C');
} else if(avgGrades < 90){
    alert('B');
} else if(avgGrades < 100){
    alert('A');
}

