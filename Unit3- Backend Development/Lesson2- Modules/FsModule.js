const fs = require('fs');
const path = require('path');

// Define the file path
const filePath = path.join(__dirname, 'example.txt');
console.log(filePath)

// 1. CREATE: Create and write to a file
fs.writeFileSync(filePath, 'This is the initial content.', 'utf8');
console.log('File created and written:', filePath);

// // 2. READ: Read the file content
// const fileContent = fs.readFileSync(filePath, 'utf8');
// console.log('File content:', fileContent);

// // 3. UPDATE: Append new data to the file
// fs.appendFileSync(filePath, '\nAppending some new content.', 'utf8');
// console.log('Content appended to the file.');

// // Verify the updated content
// const updatedContent = fs.readFileSync(filePath, 'utf8');
// console.log('Updated File content:', updatedContent);

// // 4. DELETE: Delete the file
// fs.unlinkSync(filePath);
// console.log('File deleted:', filePath);
