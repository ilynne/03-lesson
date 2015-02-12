// this is a single line comment in js

/*  
this is a multi-line comment
in the Ruby world, we place high importance on writing
readable code that does not need to be commented
*/

// variables

// STRING type of data**********************************************
var userName = 'Lynne'; // settng a variable

userName = 'Hercules'; // accessing a variable

// the = is the assignment operator

var firstName = 'Lynne';
var lastName = 'Cooney';

// illegal var names

//var @00hi there = 'test';
//var time = '12:30';
//var variable1222 = 'noon';

var myComment = "who said this:";
var myQuote = '"all the world\'s a stage"'; // single quotes print literal characters
// var myQuote = "\"all the world's a stage\""; // single quotes print literal characters

// console.log(myComment); //shows the value of myComment to the console, when we reload
// console.log(myQuote);

var message = firstName + ' ' + lastName; // joining two variables
// console.log(message);

// target and replace elements on the page...
var string1  = document.getElementById('string1');
string1.innerHTML = message;

var imagePath = 'images/water-color/thumbs/artwork_1.jpg';
// console.log(imagePath);
message += ' ' + message.toUpperCase();
// console.log(message);

// NUMBER**********************************************************
var level = 1;
var lives = 3;
var ssNumber = 1234567890; // integer
var cost = 1.50; // float
var cost1 = '50';
var cost2 = 50;
var total = Number(cost1) + cost2 // arithmetic
console.log(total);


/* ARRAY DATA TYPE **********************************************/
// create an array
var imageList = new Array;
imageList[0] = 'images/oil/thumbs/artwork_1.jpg';
imageList[1] = 'images/oil/thumbs/artwork_2.jpg';
imageList[2] = 'images/oil/thumbs/artwork_3.jpg';
imageList[3] = 'images/oil/thumbs/artwork_4.jpg';
imageList[4] = 'images/oil/thumbs/artwork_5.jpg';
imageList[5] = 'images/oil/thumbs/artwork_6.jpg';
imageList[6] = 'images/oil/thumbs/artwork_7.jpg';
imageList.push('images/oil/thumbs/artwork_8.jpg');

var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute('src', imageList[imageList.length -1]); // update the src attribute of the image

console.log(imageList);

//******* BOOLEAN DATA TYPE *************************************/
// true or false, yes or no, 1 or 0
var oldEnough = false;
var hasContent = true;
var age = 18; // yeah, right.

//******* IF/THEN statements (branching logic, application logic, business logic) **/
// check the age...
if (age <= 20 && age != 5) { // less than or equal
  oldEnough = false;
} else {
  oldEnough = true;
}

if (oldEnough) {
  // == means is equal to
  // = means assign
  console.log('You can ride the roller coaster.');
} else {
  console.log('You may not ride the roller coaster.');
}

//******* FUNCTIONS ********************************************/
// functions are chunks of reusable code that can be called
// methods are functions that belong to objects
// objects are a collection of properties and methods

function dynamicGreeting(){
  // create the built-in date object
  var now = new Date();
  var time = now.getHours(); // extract the hours

  if(time < 12) {
    alert('Good morning!');
  }
  if(time == 12) {
    alert('Time to eat lunch.');
  }
  if(time > 12) {
    alert('Good evening, the time is... ' + now.toLocaleString());
  }
}

dynamicGreeting();


