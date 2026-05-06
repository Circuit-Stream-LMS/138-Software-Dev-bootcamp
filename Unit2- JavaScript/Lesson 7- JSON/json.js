// What is JSON?
// JSON (JavaScript Object Notation) is a lightweight data format that is used to store and exchange data. It is based on JavaScript object syntax, but it is text-based, which makes it easy to read and write for humans and machines.

// JSON is primarily used for:

// Transmitting data between a server and a client.
// Storing configuration settings or data.
// JSON vs JavaScript Object
// JavaScript Object: A JavaScript object is a data structure in JavaScript that can hold key-value pairs and can include functions and other JavaScript features.

// JSON: A string representation of data that looks like a JavaScript object but cannot contain functions and must be formatted correctly as text (with string keys and values).

// Section 1: Fetch and display simple JSON data
const fetchSimpleJSON = async () => {
  try {
    const response = await fetch("data.json");
    const simpleJSON = await response.json();

    const basicDisplayDiv = document.getElementById("basic-display");
    basicDisplayDiv.innerHTML = `
      <p><strong>Animal:</strong> ${simpleJSON.animal}</p>
      <p><strong>City:</strong> ${simpleJSON.city}</p>
      <p><strong>Year:</strong> ${simpleJSON.year}</p>
      <p><strong>Is Rainy:</strong> ${simpleJSON.isRainy}</p>
      <p><strong>Pi Value:</strong> ${simpleJSON.piValue}</p>
      <p><strong>Colors:</strong> ${simpleJSON.colors.join(", ")}</p>
      <p><strong>Random Fact:</strong> ${simpleJSON.randomFact}</p>
      <p><strong>Null Value:</strong> ${simpleJSON.nullValue}</p>
    `;
  } catch (error) {
    console.error("Error fetching simple JSON data:", error);
  }
};

// Section 2: Parse JSON array and display as a list
const displayJSONArray = () => {
  const jsonArray = [
    { name: "Alice", age: 25, country: "USA" },
    { name: "Bob", age: 30, country: "UK" },
    { name: "Charlie", age: 35, country: "India" }
  ];

  const listDisplayUl = document.getElementById("list-display");
  jsonArray.forEach(person => {
    const listItem = document.createElement("li");
    listItem.textContent = `${person.name}, ${person.age} years old, from ${person.country}`;
    listDisplayUl.appendChild(listItem);
  });
};

// Section 3: Fetch external JSON data and display as a table
const fetchAndDisplayData = async () => {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=5"; // Fetch 5 Pokémon
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const tableBody = document.getElementById("table-display");
    data.results.forEach(pokemon => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${pokemon.name}</td>
        <td><a href="${pokemon.url}" target="_blank">Link</a></td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
  }
};

// Section 4: Demonstrate JSON.stringify and JSON.parse
const demonstrateJSONMethods = () => {
  const jsonObject = {
    name: "Alice",
    age: 28,
    country: "Canada",
    hobbies: ["reading", "traveling", "coding"]
  };

  // Converting a JavaScript object to a JSON string
  const stringifiedJSON = JSON.stringify(jsonObject);
  console.log("Stringified JSON:", stringifiedJSON);

  // Converting the JSON string back into a JavaScript object
  const parsedJSON = JSON.parse(stringifiedJSON);
  console.log("Parsed JSON:", parsedJSON);

};

// Initialize all sections
fetchSimpleJSON();
displayJSONArray();
fetchAndDisplayData();
demonstrateJSONMethods();




  