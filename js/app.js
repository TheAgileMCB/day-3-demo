'use strict';

console.log('Ready to rock');


//global variables go here.
var userPoints = 0;

//Greet the user
alert('Hello, and welcome to the Guessmachine, baby!');

var user = prompt('What is your name?');
var userName = user.toLowerCase();
// console.log(userName);
// the user variable
// - String
// - null
// - '' empty

// If the user is empty string or null, keep asking them for their name.
// while (user === '' || user === null);
// then there is a shorter version of this.

// while(!user) {
//     user = prompt('What is your name? PLEASE, provide it now.');
// }

// Control in JS

// if(condition){}
// if(condition){}else{}
// if(condition){}else if(condition2){}
// if(condition){}else if(condition2){}else{}

// this is the not equals comparison operator
// if(userName !== 'matt'){
//     alert('You are not the Matt we seek.');
// }

// alert('Hello,' + user + '! Thanks for swinging by.');

// var answer = prompt('Is my favorite food popcorn?', 'Type yes or no ').toLowerCase();
// console.log(answer);

// // Check to see if the user answer is correct
// if(answer === 'no' || answer === 'n') {
//     alert('Nailed it!');
//     userPoints++;
// } else {
//     alert('You are incorrect.');
// }
// alert('You have ' + userPoints + ' point');


// Loop until condition turns truthy and or not-truthy.
// while(condition){condition has to change}

// do {this runs no matter what} while (condition);

// for(Setup; condition; change variable)

// for(var i = 0; i < someArray/length; i++){

// }

// var i = o;
// while( i<value){
//     ...
//     i++;
// }

var goodFoods = ['pizza', 'sushi', 'ramen', 'cake'];
console.log(goodFoods);

for(var i = 0; i < goodFoods.length; i++) {
    console.log(goodFoods[i]);
}

for (var i = 0; i < 10; i++) {
    if(i===2){
        console.log('Keep going past this number 2.');
        continue;
    }
    if(i===4){
        console.log('This is now breaking the loops.');
        break;
    }
    console.log('the variable i = ' + i);
}

// falsy values:
// 0
// null
// NaN
// ''
// undefined
// false

// truthy values:
// everything else