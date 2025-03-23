// Check if we are in a Node.js environment
const isNode = typeof window === 'undefined';

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to find the second-largest number in an array
function secondLargest(arr) {
    let uniqueArr = [...new Set(arr)]; // Remove duplicates
    uniqueArr.sort((a, b) => b - a); // Sort in descending order
    return uniqueArr.length > 1 ? uniqueArr[1] : "Not enough unique numbers";
}

// Function to check if a string is a palindrome
function isPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Function to take input and run the program
function runProgram() {
    if (isNode) {
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        // Node.js: Taking user input
        //get string to reverse that what we want to reverse
        rl.question("Enter a string to reverse: ", (str) => {
            console.log("Reversed String:", reverseString(str));

            //Enter numbers that we want to find second largest one in here
            rl.question("Enter numbers separated by spaces to find the second largest: ", (numInput) => {
                let numArray = numInput.split(' ').map(Number);
                console.log("Second Largest:", secondLargest(numArray));
                
                //Enter input that what we want to check palindrome or not
                rl.question("Enter a string to check if it's a palindrome: ", (palStr) => {
                    console.log("Is Palindrome?", isPalindrome(palStr));
                    rl.close(); // Close the input stream after all inputs
                });
            });
        });

    } else {
        // Browser: Taking user input
        let str = prompt("Enter a string to reverse:");
        alert("Reversed String: " + reverseString(str));

        let numInput = prompt("Enter numbers separated by spaces to find the second largest:");
        let numArray = numInput.split(' ').map(Number);
        alert("Second Largest: " + secondLargest(numArray));

        let palStr = prompt("Enter a string to check if it's a palindrome:");
        alert("Is Palindrome? " + isPalindrome(palStr));
    }
}

// Run the program
runProgram();
