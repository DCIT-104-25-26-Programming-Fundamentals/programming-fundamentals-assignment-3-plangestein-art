// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================


const readlineSync = require('readline-sync');

/**
 * Part A: Generates and prints the multiplication table for a given number from 1 to 12.
 * 
 * @param {number} num - The number to generate the table for.
 */
function printSingleTable(num) {
    console.log(`\nMultiplication Table for ${num}:`);
    for (let i = 1; i <= 12; i++) {
        const product = num * i;
        console.log(`${num}  x  ${i}  =  ${product}`);
    }
}

/**
 * Part B: Generates and prints multiplication tables from 1 up to N.
 * 
 * @param {number} n - The maximum number up to which tables should be generated.
 */
function printTablesUpToN(n) {
    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    for (let i = 1; i <= n; i++) {
        printSingleTable(i);
        if (i < n) {
            console.log('---------------------------');
        }
    }
}

/**
 * Main function to run the multiplication table program.
 */
function main() {
    console.log('=== MULTIPLICATION TABLE GENERATOR ===');

    // --- PART A ---
    console.log('\n--- PART A: Single Table ---');
    const singleNum = readlineSync.questionInt('Enter a number for the multiplication table: ');
    
    if (singleNum <= 0) {
        console.log('Error: Please enter a positive integer.');
        return;
    }
    
    printSingleTable(singleNum);

    // --- PART B ---
    console.log('\n--- PART B: Tables from 1 to N ---');
    const n = readlineSync.questionInt('Enter N to print tables from 1 to N: ');

    if (n <= 0) {
        console.log('Error: N must be a positive integer.');
        return;
    }

    printTablesUpToN(n);
}

// Execute the program
main();