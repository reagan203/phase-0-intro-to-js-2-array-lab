// Write your solution here!

const cats = [ "Milo", "Otis", "Garfield" ]
     
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });


function destructivelyAppendCat(Ralph) {
  cats.push(Ralph);
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyPrependCat(Bob) {
  cats.unshift("Bob");
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveLastCat() {
  cats.pop();
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function destructivelyRemoveFirstCat() {
  cats.shift();
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function appendCat(Broom) {
  var newArray = [...cats, Broom];
  return newArray;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function prependCat(Arnold) {
  var newArray = [Arnold, ...cats];
  return newArray;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeLastCat() {
  var newArray = cats.slice(0, -1);
  return newArray;
}
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });

function removeFirstCat() {
  var newArray = cats.slice(1);
  return newArray;
}
