'use strict';
alert("Welcome in This Website");


let username = prompt("What is the user name?");
alert('Hello,' + username + ', let\'s go to Start the Game');

let score = 0;

function qustion1(){
   
let favcolor = prompt('The fav color for me red ,pls answer Yes/y or No/n?');
favcolor = favcolor.toLowerCase();
    if (favcolor === 'yes' || favcolor === 'y') {
        
        alert('That is Beautiful color ');
        score++;
    }
    else if (favcolor === 'no' || favcolor === 'n') {
       
        alert('oh, wrong answer');
    }
    else {
        alert('you should answer by Yes or no');
    }

}
qustion1();


function question2(){
    
    let favclub = prompt("Is my fav clube Madrid,yes/y or no/n?");
    favclub = favclub.toLowerCase();
    if (favclub === 'yes' || favclub === 'y') {
        
        alert('That is right');
        score++;
    }
    else if (favclub === 'no' || favclub === 'n') {
       
        alert('oh, wrong answer');
    }
    else {
        alert('pls answer the Q by yes/no');
    }
}
question2();

function question3(){

let Fruit = prompt('Is My fav Fruit Oranges ,yes/y or no/n?');
Fruit = Fruit.toLowerCase();
switch (Fruit) {
    case 'yes':
    case 'y':
        
        alert('wrong answer');
        break;
    case 'no':
    case 'n':
        
        alert('yes ,your answer is correct');
        score++;
        break;

    default:
        alert('answer by yes or no ');
        break;

}
}

question3();

function question4(){
  
let place = prompt('Is the fav place for me Paris?');
place = place.toLowerCase();
if (place === 'yes' || place === 'y') {
    
    alert('That is right');
    score++;
} else if (place === 'no' || place === 'n') {
    
    alert('not correct');
}
else {
    alert('pls answer the Q by yes/no');
}
}
question4();


function question5(){

let car = prompt('Is my favorite car BMW?');
car = car.toLowerCase();
if (car === 'yes' || car === 'y') {
    
    alert('I know,hhhhh');
    score++;

} else if (car === 'no' || car === 'n') {
    
    alert('you are kidding');

}
else {
    alert('pls answer the Q by yes/no');
}

}
question5();

function question6(){

   

let num ='';


let correctNum=6;
for (let i = 1; i <= 4; i++) {
    num=prompt("guess a number between 7 and 90");
    num = parseInt(num);
    if (num === correctNum) {
        alert("great jop, The number is true");
        score++;
        break;

    }
    else if (num < correctNum) {
        alert("too low, guess again");
     
    }
    else if (num>correctNum) {
        alert("too high, guess again");
    }
    else{

        alert("please write a number ");
    }
   

}
alert('the correct  answer is 6');

}

question6();


function question7(){
     
let course = ['c++', 'java', 'network', 'database', 'c#', 'android'];
let courseName='';
for (let i = 1; i <= 6; i++) {
     courseName = prompt("Name a course taught at University, You have 6 left");
     courseName=courseName.toLowerCase();
    for (let j = 0; j < course.length; j++) {

       

        if (courseName == course[j] ) {
            alert("correct answer");
            i=7;
            score++; 
        }
        
   
    }
    if(i!=6)
    {
        alert('pls try again');
    }
    if (i==6){
        alert("the right answer is : 'c++', 'java', 'network', 'database', 'c#', 'android' ") ;
    }
    

   
}
}
question7();

alert(`your Score: ${score}/7 `);
alert('Thanks for playing' + username);

