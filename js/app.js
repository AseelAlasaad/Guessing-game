'use strict';
alert("Welcome in This Website");

// Your name
let username = prompt("What is the user name?");
alert('Hello,' + username + ', let\'s go to Start the Game');

let score = 0;

function qustion1(){
    //First question
let favcolor = prompt('The fav color for me red ,pls answer Yes/y or No/n?');
favcolor = favcolor.toLowerCase();
    if (favcolor === 'yes' || favcolor === 'y') {
        // console.log(favcolor);
        alert('That is Beautiful color ');
        score++;
    }
    else if (favcolor === 'no' || favcolor === 'n') {
        // console.log(favcolor);
        alert('oh, wrong answer');
    }
    else {
        alert('you should answer by Yes or no');
    }

}
qustion1();


function question2(){
    //second question
    let favclub = prompt("Is my fav clube Madrid,yes/y or no/n?");
    favclub = favclub.toLowerCase();
    if (favclub === 'yes' || favclub === 'y') {
        // console.log(favclub);
        alert('That is right');
        score++;
    }
    else if (favclub === 'no' || favclub === 'n') {
        // console.log(favclub);
        alert('oh, wrong answer');
    }
    else {
        alert('pls answer the Q by yes/no');
    }
}
question2();

function question3(){
//Third question
let Fruit = prompt('Is My fav Fruit Oranges ,yes/y or no/n?');
Fruit = Fruit.toLowerCase();
switch (Fruit) {
    case 'yes':
    case 'y':
        console.log(Fruit);
        alert('wrong answer');
        break;
    case 'no':
    case 'n':
        //console.log(Fruit);
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
    //fourth question
let place = prompt('Is the fav place for me Paris?');
place = place.toLowerCase();
if (place === 'yes' || place === 'y') {
    //console.log(place);
    alert('That is right');
    score++;
} else if (place === 'no' || place === 'n') {
    // console.log(place);
    alert('not correct');
}
else {
    alert('pls answer the Q by yes/no');
}
}
question4();

function question5(){

    //fifth question
let car = prompt('Is my favorite car BMW?');
car = car.toLowerCase();
if (car === 'yes' || car === 'y') {
    // console.log(car);
    alert('I know,hhhhh');
    score++;

} else if (car === 'no' || car === 'n') {
    // console.log(car);
    alert('you are kidding');

}
else {
    alert('pls answer the Q by yes/no');
}

}
question5();
function question6(){

    // //6 question

let num ='';
//console.log(typeof (num));

//number of attempts 4
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
}

question6();

function question7(){
    //7th question
//array
let course = ['c++', 'java', 'network', 'database', 'c#', 'android'];
let courseName='';
console.log(courseName);
for (let i = 1; i <= 6; i++) {
     courseName = prompt("Name a course taught at University, You have 6 left");
     courseName=courseName.toLowerCase();
    for (let j = 0; j < course.length; j++) {

        // console.log(course[j]);

        if (courseName == course[j] ) {
            alert("correct answer");
            i=6;
            score++; 
        }
        
   
    }
    if(i!=6)
    {
        alert('pls try again');
    }

   
}
}
question7();

alert(`your Score: ${score}/7 `);
console.log('The score :', score);
alert('Thanks for playing' + username);

