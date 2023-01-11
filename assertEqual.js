// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log('THEY ARE SAME!');
  } else {
    console.log('They are different!');
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const name = 'Joseph';
console.log(`Hello, ${name}!`);