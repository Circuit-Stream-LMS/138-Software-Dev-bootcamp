
// Data
let contacts = [
  { name: "John Doe", phone: "1234567890" },
  { name: "Alice Smith", phone: "9876543210" },
  { name: "Bob Johnson", phone: "5551234567" }
];

// Helper
function findContactIndex(query) {
  return contacts.findIndex(c => c.name === query || c.phone === query);
}

// CRUD
function addContact(contact) {
  contacts.push(contact);
}

function viewContacts(list = contacts) {
  list.forEach(c => console.log(`${c.name} - ${c.phone}`));
}

function deleteContact(query) {
  const i = findContactIndex(query);
  if (i === -1) return console.log(`No contact matching "${query}".`);
  contacts.splice(i, 1);
}

function updateContact(query, updates) {
  const i = findContactIndex(query);
  if (i === -1) return console.log(`No contact matching "${query}".`);

  // Only change a field if a new value was actually passed in.
  if (updates.name) contacts[i].name = updates.name;
  if (updates.phone) contacts[i].phone = updates.phone;
}

function searchContact(query) {
  const i = findContactIndex(query);
  return i === -1 ? null : contacts[i];
}

/*
localeCompare (built in) tells us the order of two strings:
  negative  → first string comes BEFORE the second
  positive  → first string comes AFTER the second
  0         → they're equal
*/
function compareContacts(a, b, field, order) {
  let result;

  if (field === "name") {
    result = a.name.localeCompare(b.name);
  } else {
    result = a.phone.localeCompare(b.phone, undefined, {numeric: true});
  }

  // localeCompare already gives us ascending order for free.
  // For descending, we just flip the sign of that same result.
  if (order === "desc") {
    result = -result;
  }

  return result;
}

//Quick Sort 

function quickSort(arr, field, order) {
  // Base case: 0 or 1 items is already sorted, nothing to do.
  if (arr.length <= 1) return arr;

  // 1. Pick the pivot - first item here
  const pivot = arr[0];
  // remaining array 
  const rest = arr.slice(1);

  // 2. Split the rest into two piles by comparing each one to the pivot.
  const left = rest.filter(item => compareContacts(item, pivot, field, order) <= 0);  // belongs before pivot
  const right = rest.filter(item => compareContacts(item, pivot, field, order) > 0);  // belongs after pivot

  // 3. Sort each pile the same way (recursion)
  return [...quickSort(left, field, order), pivot, ...quickSort(right, field, order)];
}

// Examples
console.log("All contacts:");
viewContacts();

console.log("\nQuick Sort — name A→Z:");
viewContacts(quickSort(contacts, "name", "asc"));

console.log("\nQuick Sort — name Z→A:");
viewContacts(quickSort(contacts, "name", "desc"));

console.log("\nQuick Sort — phone asc:");
viewContacts(quickSort(contacts, "phone", "asc"));

console.log("\nQuick Sort — phone dsc:");
viewContacts(quickSort(contacts, "phone", "desc"));

console.log("\nSearch 'Alice Smith':", searchContact("Alice Smith"));

updateContact("Bob Johnson", { phone: "5559999999" });
deleteContact("John Doe");
console.log("\nAfter update + delete:");
viewContacts();