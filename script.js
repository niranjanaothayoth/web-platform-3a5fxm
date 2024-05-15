//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
// Store user's data in localStorage
localStorage.setItem('firstName', 'John');
localStorage.setItem('lastName', 'Doe');
localStorage.setItem('age', '30');
localStorage.setItem('country', 'USA');
localStorage.setItem('state', 'California');

// Print localStorage in the console
console.log(localStorage);

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.

// Get user's data from localStorage
const firstName = localStorage.getItem('firstName');
const lastName = localStorage.getItem('lastName');
const age = localStorage.getItem('age');
const country = localStorage.getItem('country');
const state = localStorage.getItem('state');

// Print localStorage in the console
console.log('First Name:', firstName);
console.log('Last Name:', lastName);
console.log('Age:', age);
console.log('Country:', country);
console.log('State:', state);

//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
// Remove 'state' data from localStorage
localStorage.removeItem('state');

// Print localStorage in the console
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
// Clear all data from localStorage
localStorage.clear();

// Print localStorage in the console
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};

// Convert the user object to a string using JSON.stringify()
const userString = JSON.stringify(user);

// Print the string in the console
console.log(userString);
