// Section 1: Create and Display a Simple JSON Object
// TODO: Create a JSON object with properties like name, age, and hobbies
function displaySimpleJSON() {
    // JSON object
    const person = {
        name: "Alice",
        age: 25,
        hobbies: ["reading", "traveling", "coding"]
    };

    // Access and display properties of the JSON object
    const output = `
        Name: ${person.name} <br>
        Age: ${person.age} <br>
        Hobbies: ${person.hobbies.join(", ")}
    `;

    // Append the result to the DOM
    document.getElementById("section1").innerHTML = output;
}

// Section 2: Work with a JSON Array
// TODO: Create an array of JSON objects and display each as a list item
function displayJSONArray() {
    // JSON Array
    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 35 }
    ];

    // Loop through the JSON array and display each object as a list item
    const listItems = people.map(person => `<li>${person.name}, Age: ${person.age}</li>`).join("");
    const output = `<ul>${listItems}</ul>`;

    // Append the result to the DOM
    document.getElementById("section2").innerHTML = output;
}

// Section 3: Practice JSON.stringify and JSON.parse
// TODO: Convert a JavaScript object to a JSON string and back
function practiceJSONMethods() {
    const exampleObject = {
        title: "Learning JSON",
        difficulty: "Beginner",
        topics: ["Objects", "Arrays", "Methods"]
    };

    // Convert object to JSON string
    const jsonString = JSON.stringify(exampleObject);

    // Convert JSON string back to object
    const parsedObject = JSON.parse(jsonString);

    // Display both the stringified and parsed JSON on the webpage
    const output = `
        <strong>JSON String:</strong> ${jsonString} <br>
        <strong>Parsed Object:</strong> Title: ${parsedObject.title}, Difficulty: ${parsedObject.difficulty}, Topics: ${parsedObject.topics.join(", ")}
    `;

    // Append the result to the DOM
    document.getElementById("section3").innerHTML = output;
}

// Call the functions for demonstration
displaySimpleJSON();
displayJSONArray();
practiceJSONMethods();
