const hashMap = new Map(); 

// Adding key-value pairs
hashMap.set('name', 'John');
hashMap.set('age', 25);
hashMap.set('city', 'Toronto');
hashMap.set(true, 'boolean');
hashMap.set(1, 'number');

// Retrieving values
console.log(hashMap.get('name')); // Output: John
console.log(hashMap.get(true)); 
console.log(hashMap.get(1)); 

// Checking if a key exists
console.log(hashMap.has('age')); // Output: true

// // Deleting a key
hashMap.delete('city');

// // Getting size
console.log(hashMap.size); // Output: 4

// Iterating over keys and values
for (let [key, value] of hashMap) {
    console.log(`${key}: ${value}`);
}

