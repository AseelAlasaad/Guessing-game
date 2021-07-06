'use strict';
alert("Welcome in This Website");

// Your name
let username = prompt("What is the user name?");
alert('Hello,' + username + ', let\'s go to Start the Game');

//First question
let favcolor = prompt('The fav color for me red ,pls answer Yes or No?');
favcolor = favcolor.toLowerCase();
if (favcolor == 'yes') {
    // console.log(favcolor);
    alert('That is Beautiful color ');
}
else if (favcolor == 'no') {
    // console.log(favcolor);
    alert('oh, wrong answer');
}
else {
    alert('you should answer by Yes or no');
}

//second question
let favclub = prompt("Is my fav clube Madrid,yes or no?");
favclub = favclub.toLowerCase();
if (favclub == 'yes') {
    // console.log(favclub);
    alert('That is right');
}
else if (favclub == 'no') {
    // console.log(favclub);
     alert('oh, wrong answer');
}
else {
    alert('pls answer the Q by yes/no');
}


//Third question
let Fruit = prompt('Is My fav Fruit Oranges ,yes or no?');
Fruit = Fruit.toLowerCase();
switch (Fruit) {
    case 'yes':
        console.log(Fruit);
        alert('That is nice');
        break;
    case 'no':
        //console.log(Fruit);
        alert('yes ,your answer is correct');
        break;

    default:
        alert('answer by yes or no ');
        break;

}
//fourth question
let place = prompt('Is the fav place for me Paris?');
place = place.toLowerCase();
if (place == 'yes') {
    //console.log(place);
    alert('That is right');
} else if (place == 'no') {
    // console.log(place);
    alert('not correct');
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
    alert('pls answer the Q by yes/no');
}


alert('Thanks for playing' + username);