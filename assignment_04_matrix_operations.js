// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
/**
 * Helper function to read a matrix from the user.
 * 
 * @param {string} name - The name/label of the matrix (e.g., 'A', 'B').
 * @returns {number[][]} - The 2D array representing the matrix.
 */
function readMatrix(name) {
    console.log(`\n--- Enter Matrix ${name} ---`);
    const rows = readlineSync.questionInt(`Enter number of rows for Matrix ${name}: `);
    const cols = readlineSync.questionInt(`Enter number of columns for Matrix ${name}: `);

    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1} (space-separated): `);
        const row = rowInput.trim().split(/\s+/).map(Number);
        
        // Ensure row length matches columns or handle parsing if needed
        matrix.push(row);
    }
    return matrix;
}

/**
 * Helper function to display a matrix in a neat grid format.
 * 
 * @param {number[][]} matrix - The 2D array to display.
 */
function displayMatrix(matrix) {
    if (!matrix || matrix.length === 0) {
        console.log('[ Empty Matrix ]');
        return;
    }
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}

/**
 * Part A: Transposes an M x N matrix into an N x M matrix.
 * 
 * @param {number[][]} matrix - The input M x N matrix.
 * @returns {number[][]} - The transposed N x M matrix.
 */
function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const transposed = [];

    for (let j = 0; j < cols; j++) {
        const newRow = [];
        for (let i = 0; i < rows; i++) {
            newRow.push(matrix[i][j]);
        }
        transposed.push(newRow);
    }

    return transposed;
}

/**
 * Part B: Adds two matrices of the same dimensions (M x N).
 * 
 * @param {number[][]} matrixA - First matrix.
 * @param {number[][]} matrixB - Second matrix.
 * @returns {number[][]} - The resulting sum matrix.
 */
function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    const cols = matrixA[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(row);
    }

    return result;
}

/**
 * Part C: Multiplies two matrices A (M x N) and B (N x P).
 * 
 * @param {number[][]} matrixA - Matrix A.
 * @param {number[][]} matrixB - Matrix B.
 * @returns {number[][]} - The resulting product matrix (M x P).
 */
function multiplyMatrices(matrixA, matrixB) {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const rowsB = matrixB.length;
    const colsB = matrixB[0].length;

    if (colsA !== rowsB) {
        throw new Error('Cannot multiply: Number of columns in A must equal number of rows in B.');
    }

    const result = [];
    for (let i = 0; i < rowsA; i++) {
        const row = [];
        for (let j = 0; j < colsB; j++) {
            let sum = 0;
            for (let k = 0; k < colsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }

    return result;
}

/**
 * Main function to run the matrix operations program.
 */
function main() {
    console.log('=== MATRIX OPERATIONS PROGRAM ===');

    // --- PART A: Transpose ---
    console.log('\n--- PART A: Transpose a Matrix ---');
    const matrixA = readMatrix('A');
    console.log('\nOriginal Matrix A:');
    displayMatrix(matrixA);

    const transposedA = transposeMatrix(matrixA);
    console.log('\nTransposed Matrix A:');
    displayMatrix(transposedA);

    // --- PART B: Addition ---
    console.log('\n--- PART B: Add Two Matrices ---');
    console.log('Note: Both matrices must have the same dimensions.');
    const matrixB1 = readMatrix('1 for Addition');
    console.log(`Enter Matrix 2 for Addition (must be ${matrixB1.length}x${matrixB1[0].length}):`);
    
    // Read matching dimensions for Matrix B2
    const rowsB2 = matrixB1.length;
    const colsB2 = matrixB1[0].length;
    const matrixB2 = [];
    for (let i = 0; i < rowsB2; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1} (space-separated): `);
        const row = rowInput.trim().split(/\s+/).map(Number);
        matrixB2.push(row);
    }

    try {
        const sumMatrix = addMatrices(matrixB1, matrixB2);
        console.log('\nSum of Matrices:');
        displayMatrix(sumMatrix);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }

    // --- PART C: Multiplication ---
    console.log('\n--- PART C: Multiply Two Matrices ---');
    const matrixC1 = readMatrix('1 for Multiplication');
    
    console.log(`\nMatrix 1 has ${matrixC1[0].length} columns. Matrix 2 must have ${matrixC1[0].length} rows.`);
    const rowsC2 = matrixC1[0].length;
    const colsC2 = readlineSync.questionInt(`Enter number of columns for Matrix 2 for Multiplication: `);

    const matrixC2 = [];
    console.log(`Enter Matrix 2 (${rowsC2}x${colsC2}):`);
    for (let i = 0; i < rowsC2; i++) {
        const rowInput = readlineSync.question(`Enter row ${i + 1} (space-separated): `);
        const row = rowInput.trim().split(/\s+/).map(Number);
        matrixC2.push(row);
    }

    try {
        const productMatrix = multiplyMatrices(matrixC1, matrixC2);
        console.log('\nProduct Matrix (A x B):');
        displayMatrix(productMatrix);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

// Execute the program
main();
