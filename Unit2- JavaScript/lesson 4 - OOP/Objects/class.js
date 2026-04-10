// Object-Oriented Programming (OOP) in JavaScript
// OOP is a programming paradigm that organizes code around objects, which are instances of classes.
// In modern JavaScript (ES6+), classes provide a cleaner syntax for creating objects and implementing OOP concepts.

// The four pillars of OOP are:
// 1. Encapsulation: Bundling data (properties) and methods that operate on that data within a single unit (class).
// 2. Abstraction: Hiding complex implementation details and showing only the necessary features.
// 3. Inheritance: Creating new classes based on existing classes, inheriting their properties and methods.
// 4. Polymorphism: The ability of different classes to respond to the same method call in different ways.

// In modern JS, OOP is used for:
// - Organizing code into reusable components
// - Modeling real-world entities
// - Creating complex applications with maintainable code
// - Node.js applications for server-side logic

// Example: Let's create a Vehicle class hierarchy to demonstrate all four pillars

// Base class: Vehicle (demonstrates Encapsulation and Abstraction)
class Vehicle {
  // Private properties using # (ES2022+ private fields for encapsulation)
  #fuelLevel;

  // CONSTRUCTOR: A special method that is automatically called when creating a new instance of the class.
  // It initializes the object's properties. In JavaScript, there's only one constructor per class.
  constructor(make, model, year) {
    // 'this' KEYWORD: Refers to the current instance of the class (the object being created).
    // It allows you to access and set properties on that specific object.
    this.make = make; // Public property - accessible from outside the class
    this.model = model;
    this.year = year;
    this.#fuelLevel = 100; // Private property - only accessible within this class
    this.isRunning = false;
  }

  // Public method to start the vehicle (abstraction - hides fuel check logic)
  start() {
    if (this.#fuelLevel > 0) {
      // 'this' refers to the specific vehicle instance
      this.isRunning = true; // 'this' allows us to modify this instance's properties
      console.log(`${this.make} ${this.model} has started.`); // 'this' accesses this instance's properties
    } else {
      console.log(`${this.make} ${this.model} cannot start - out of fuel!`);
    }
  }

  // Public method to stop the vehicle
  stop() {
    this.isRunning = false; // 'this' refers to the current vehicle instance
    console.log(`${this.make} ${this.model} has stopped.`);
  }

  // Method to refuel (controlled access to private fuel level)
  refuel(amount) {
    this.#fuelLevel = Math.min(100, this.#fuelLevel + amount); // 'this' accesses private property
    console.log(
      `Refueled ${this.make} ${this.model}. Fuel level: ${this.#fuelLevel}%`,
    );
  }

  // "ABSTRACT" METHOD: In other languages like Java, abstract methods have no implementation and MUST be overridden.
  // In JavaScript, there are no true abstract methods, but this pattern shows the concept.
  // This method provides a default implementation that subclasses are expected to override.
  // DIFFERENCE FROM REGULAR PUBLIC METHODS: Regular methods are complete and usable as-is.
  // Abstract-like methods are placeholders meant to be customized by subclasses.
  getVehicleType() {
    return "Generic Vehicle";
  }

  // Method to display info
  displayInfo() {
    console.log(
      `${this.getVehicleType()}: ${this.make} ${this.model} (${this.year})`,
    );
    console.log(`Status: ${this.isRunning ? "Running" : "Stopped"}`);
  }
}

// Derived class: Car (demonstrates Inheritance)
class Car extends Vehicle {
  constructor(make, model, year, numDoors) {
    // 'super' KEYWORD: In a subclass constructor, 'super()' calls the parent class constructor.
    // It must be called before using 'this' in the subclass constructor.
    // This initializes the inherited properties from Vehicle.
    super(make, model, year); // Call parent constructor
    this.numDoors = numDoors; // Additional property specific to Car
  }

  // Override the abstract method (Polymorphism)
  getVehicleType() {
    return "Car";
  }

  // Additional method specific to Car
  honk() {
    console.log(`${this.make} ${this.model} honks: Beep beep!`);
  }

  // Override displayInfo to include car-specific info
  displayInfo() {
    // 'super' KEYWORD: In methods, 'super.methodName()' calls the parent class method.
    // This allows you to extend the parent's behavior instead of completely replacing it.
    super.displayInfo(); // Call parent method first
    console.log(`Number of doors: ${this.numDoors}`); // Then add car-specific info
  }
}

// Another derived class: Truck (demonstrates Inheritance and Polymorphism)
class Truck extends Vehicle {
  constructor(make, model, year, payloadCapacity) {
    super(make, model, year); // 'super()' calls Vehicle constructor to initialize inherited properties
    this.payloadCapacity = payloadCapacity; // Tons - property specific to Truck
  }

  // Override the abstract method (Polymorphism)
  getVehicleType() {
    return "Truck";
  }

  // Method specific to Truck
  loadCargo(weight) {
    if (weight <= this.payloadCapacity) {
      console.log(`${this.make} ${this.model} loaded ${weight} tons of cargo.`);
    } else {
      console.log(
        `${this.make} ${this.model} cannot load ${weight} tons - exceeds capacity of ${this.payloadCapacity} tons.`,
      );
    }
  }

  // Override displayInfo
  displayInfo() {
    super.displayInfo(); // Call parent's displayInfo method first
    console.log(`Payload capacity: ${this.payloadCapacity} tons`); // Then add truck-specific info
  }
}

// Creating instances of different vehicle types
let car1 = new Car("Toyota", "Corolla", 2020, 4);
let truck1 = new Truck("Ford", "F-150", 2019, 2.5);

// Demonstrating Encapsulation: Direct access to private #fuelLevel is not allowed
// console.log(car1.#fuelLevel); // This would throw an error

// Demonstrating Abstraction: Using public methods to interact with encapsulated data
car1.start(); // Uses encapsulated fuel level check
car1.displayInfo();

truck1.start();
truck1.displayInfo();

// Demonstrating Inheritance: Car and Truck inherit properties and methods from Vehicle
car1.refuel(20); // Inherited method
truck1.refuel(30);

// Demonstrating Polymorphism: Same method name, different behavior
car1.getVehicleType(); // "Car"
truck1.getVehicleType(); // "Truck"

// Calling displayInfo shows different outputs for different types (Polymorphism)
car1.displayInfo();
truck1.displayInfo();

// Class-specific methods
car1.honk(); // Only Car has this
truck1.loadCargo(1.5); // Only Truck has this

// Stopping vehicles
car1.stop();
truck1.stop();
