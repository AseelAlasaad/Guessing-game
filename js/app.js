'use strict';
alert("Welcome in This Website");

// Your name
let username = prompt("What is the user name?");
alert('Hello,' + username + ', let\'s go to Start the Game');

//First question
let favcolor = prompt('The fav color for you red ,pls answer Yes or No?');
favcolor = favcolor.toLowerCase();
if (favcolor == 'yes') {
    // console.log(favcolor);
    alert('That is Beautiful color ');
}
else if (favcolor == 'no') {
    // console.log(favcolor);
    alert('oh, I was think red');
}
else {
    alert('you should answer by Yes or no');
}

//second question
let isStudent = prompt("Are You Student,yes or no?");
isStudent = isStudent.toLowerCase();
if (isStudent == 'yes') {
    // console.log(isStudent);
    alert('Hello student');
}
else if (isStudent == 'no') {
    // console.log(isStudent);
    alert('OK');
}
else {
    alert('No problem');
}


//Third question
let feeling = prompt('Are You Feeling Happy ,yes or no?');
feeling = feeling.toLowerCase();
switch (feeling) {
    case 'yes':
        console.log(feeling);
        alert('That is nice');
        break;
    case 'no':
        //console.log(feeling);
        alert('i hope you feel better');
        break;

    default:
        alert('answer by yes or no ');
        break;

}
//fourth question
let place = prompt('the fav place for you Paris?');
place = place.toLowerCase();
if (place == 'yes') {
    //console.log(place);
    alert('That is nice place');
} else if (place == 'no') {
    // console.log(place);
    alert('no problem');
}
else {
    alert('pls answer the Q by yes/no');
}

//fifth question
let bird = prompt('is a  bird  an animal?');
bird = bird.toLowerCase();
if (bird == 'yes') {
    // console.log(bird);
    alert('I know,hhhhh');

} else if (bird == 'no') {
    // console.log(bird);
    alert('you are kidding');

}
else {
    alert('please review your info.');
}


alert('Thanks for playing' + username);