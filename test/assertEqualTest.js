const assertEqual = require('../assertEqual');

if (assertEqual.actual === assertEqual.expected) {
  console.log('THEY ARE SAME!');
} else {
  console.log('They are different!');
}