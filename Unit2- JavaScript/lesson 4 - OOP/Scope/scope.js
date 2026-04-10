// Global scope
let globalVar = "I am a global variable!";

function scopeExample() {
    // Function scope
    let functionVar = "I am a function-scoped variable!";

    if (true) {
        // Block scope
        let blockVar = "I am a block-scoped variable!";
        console.log(globalVar);    // Accessible: I am a global variable!
        console.log(functionVar);  // Accessible: I am a function-scoped variable!
        console.log(blockVar);     // Accessible: I am a block-scoped variable!
    }

    console.log(globalVar);    // Accessible: I am a global variable!
    console.log(functionVar);  // Accessible: I am a function-scoped variable!
    console.log(blockVar);     // Error: blockVar is not defined (only accessible in the block)
}

// Run the function immediately when the script loads
scopeExample();

// This logs the global variable from outside any function
console.log(globalVar); // Output: I am a global variable!
