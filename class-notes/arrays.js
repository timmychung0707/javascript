// HURRAY FOR ARRAYs
// ARRAYs are variables that store a list of values

// 1. Declaring Arrays

var students = ['Iris', 'Ray', 'Ethan', 'Han']
var nums = [1, 4, 87, 27];

// 2. Display an array

// displaying the entire array
document.querySelector(".blank").innerHTML = nums;
// displaying a single element in the array
document.querySelector(".blank").innerHTML = students[1];

// 3. Declaring Empty Arrays

var crushes = [];

// 4. Adding or Removing Elements of an Array

crushes.push('donna'); // push adds to the end of the array
crushes.push('desiree');
crushes.push('mabel');
crushes.pop(); // pop removes the last item of the array

document.querySelector(".blank").innerHTML = crushes;

// 5. additional methods for arrays

document.querySelector(".blank").innerHTML = crushes.length;
// LENGTH is another method that shows you how many elements are in your array

// There are lots more methods available for arrays
// https://www.w3schools.com/js/js_array_methods.asp