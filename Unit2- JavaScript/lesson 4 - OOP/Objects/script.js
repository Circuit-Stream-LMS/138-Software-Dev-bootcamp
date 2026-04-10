
// Creating an object
let student = {
    name: "Alex",
    age: 20,
    enrolled: true,
    courses: ["Math", "Science", "History"],
    
    // Method to greet
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

// Logging the entire object
console.log("Student Object:", student);

// Accessing properties of the object
console.log("Name:", student.name); // Access using dot notation
console.log("Age:", student["age"]); // Access using bracket notation
console.log("Courses:", student.courses);

// Calling a method of the object
console.log("Greeting:", student.greet());

// Updating properties
student.age = 21; // Modifying existing property
console.log("Updated Age:", student.age);

student.grade = "A"; // Adding a new property
console.log("Added Grade:", student.grade);

// Deleting a property
delete student.enrolled;
console.log("Deleted Enrolled Property:", student.enrolled); // Output: undefined

// Traversing the object using for...in loop
console.log("Traversing the student object:");
for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Checking if a property exists using 'in' keyword
console.log("Does 'grade' exist in student?", "grade" in student); // Output: true
console.log("Does 'enrolled' exist in student?", "enrolled" in student); // Output: false

// Using Object.keys() to get all property names
console.log("All keys in student object:", Object.keys(student));

// Using Object.values() to get all property values
console.log("All values in student object:", Object.values(student));
