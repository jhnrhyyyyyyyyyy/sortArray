function sortArray(){
    // Prompt user to input numbers and names
let numberInput = prompt("Enter numbers separated by commas (e.g., 24, 65, 21, 5, 9, 32, 42, 80, 57):");
let nameInput = prompt("Enter names separated by commas (e.g., Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert inputs into arrays
let numbers = numberInput.split(",").map(num => parseInt(num.trim())); // Convert to numbers
let names = nameInput.split(",").map(name => name.trim()); // Clean up spaces

// Merge both arrays into a single array
let mergedArray = [...numbers, ...names];
prompt("Merged Array:", mergedArray);

// Sort numbers numerically in reverse
let sortedNumbers = numbers.sort((a, b) => b - a);
prompt("Numbers Sorted in Reverse:", sortedNumbers);

// Sort names alphabetically
let sortedNames = names.sort();
prompt("Names Sorted Alphabetically:", sortedNames);

}