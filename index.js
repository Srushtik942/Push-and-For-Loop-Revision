const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

// PS 1.5 - Push and For Loop

// Exercise 1

let numbers = [2, 4, 6, 10, 5];
let result = [];
function doubledValue() {
  for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2);
  }
  return result;
}
const func = doubledValue();
console.log(func);

// Exercise 2

const students = [
  { name: 'Alice', grade: 'A' },
  { name: 'Bob', grade: 'B' },
  { name: 'Charlie', grade: 'A' },
  { name: 'David', grade: 'C' },
];
let res = [];

function studentWithA() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade === 'A') {
      res.push(students[i].name);
    }
  }
  return res;
}
const res1 = studentWithA();
console.log(res1);

// Exercise 3

const prices = [99, 150, 75, 120, 200];
let priceResult = [];

function priceGreaterThan100() {
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] > 100) {
      priceResult.push(prices[i]);
    }
  }
  return priceResult;
}

const priceResult1 = priceGreaterThan100();
console.log(priceResult1);

// Exercise 4

const ages = [12, 15, 22, 29, 34];

let Age = [];
function evenAges() {
  for (let i = 0; i < ages.length; i++) {
    if (ages[i] % 2 === 0) {
      Age.push(ages[i]);
    }
  }
  return Age;
}

const ageResult = evenAges();
console.log(ageResult);

// Exercise 5
const sports = ['Soccer', 'Basketball', 'Tennis'];

let sportsString = [];

function sportsWithSign() {
  for (let i = 0; i < sports.length; i++) {
    sportsString.push(sports[i] + '?');
  }
  return sportsString;
}

const sportsResult = sportsWithSign();
console.log(sportsResult);

// Exercise 6

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNum = [];

function evenNumbers() {
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) {
      evenNum.push(numb[i]);
    }
  }
  return evenNum;
}
const evenResult = evenNumbers();
console.log(evenResult);

// Exercise 7
let oddNum = [];

function oddNumber() {
  for (let i = 0; i < numb.length; i++) {
    if (numb[i] % 2 != 0) {
      oddNum.push(numb[i]);
    }
  }
  return oddNum;
}

const oddResult = oddNumber();
console.log(oddResult);

// Exercise 8
const names = ['John', 'Doe', 'Jane', 'Smith'];

function nameConcat() {
  let resNames = '';
  for (let i = 0; i < names.length; i++) {
    resNames += names[i];
    if (i < names.length - 1) {
      resNames += '-';
    }
  }
  return resNames;
}
console.log(nameConcat());

// Exercise 9

const strings = ['Hello', 'world', 'from', 'practice', 'set'];

function joinStrings() {
  let string = '';
  for (let i = 0; i < strings.length; i++) {
    string += strings[i];
    if (i < strings.length - 1) {
      string += ' ';
    }
  }
  return string;
}

console.log(joinStrings());

// Exercise 10

const strings1 = ['apple', 'banana', 'cherry'];

function joinWithComma() {
  let string = '';
  for (let i = 0; i < strings1.length; i++) {
    string += strings1[i];
    if (i < strings1.length - 1) {
      string += ',';
    }
  }
  return string;
}
console.log(joinWithComma());

// Exercise 11

const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];
let resCar = [];

function greaterYear() {
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].year > 2010) {
      resCar.push(cars[i]);
    }
  }
  return resCar;
}

const function1 = greaterYear();
console.log(function1);

// Exercise 12
const temperatures = [0, 20, 37, 100];

let tempResult = [];

function convertTemp() {
  for (let i = 0; i < temperatures.length; i++) {
    tempResult.push((temperatures[i] * 9) / 5 + 32);
  }
  return tempResult;
}

const tempFunction = convertTemp();
console.log(tempFunction);

// Exercise 13
const scores = [10, 22, 25, 33, 40, 55];

let scoreArray = [];
function calculateMultipleOfScore() {
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] % 5 === 0) {
      scoreArray.push(scores[i]);
    }
  }
  return scoreArray;
}

const scoreFunction = calculateMultipleOfScore();
console.log(scoreFunction);

// Ex 14

const events = [
  { title: 'Concert', date: '2022-08-10', location: 'New York' },
  { title: 'Art Exhibition', date: '2022-09-12', location: 'Los Angeles' },
  { title: 'Tech Conference', date: '2022-10-05', location: 'New York' },
];

let array = [];
function eventsTakingPlace() {
  for (let i = 0; i < events.length; i++) {
    if (events[i].location === 'New York') {
      array.push(events[i].title);
    }
  }
  return array;
}

const eventFunction = eventsTakingPlace();
console.log(eventFunction);

// Example 15
const ages1 = [20, 25, 30, 35];

let arrayAge = [];

function arrayAges() {
  for (let i = 0; i < ages1.length; i++) {
    arrayAge.push(ages1[i] + 10);
  }
  return arrayAge;
}

const arrayFunction = arrayAges();
console.log(arrayFunction);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
