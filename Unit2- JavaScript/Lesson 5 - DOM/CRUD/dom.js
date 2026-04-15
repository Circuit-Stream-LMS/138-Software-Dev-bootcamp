
// CREATE: Adding a new item to the list
function createItem() {
  const list = document.getElementById('item-list');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  list.appendChild(newItem);
  alert('New item created!');
}

// READ: Accessing and logging the text content of the first item
function readItem() {
  const firstItem = document.querySelector('#item-list li');
  if (firstItem) {
    alert('First item text: ' + firstItem.textContent);
  } else {
    alert('No items to read!');
  }
}

// UPDATE: Modifying the text of the second item
function updateItem() {
  const items = document.querySelectorAll('#item-list li');
  if (items.length > 1) {
    items[1].textContent = 'Updated Item';
    alert('Second item updated!');
  } else {
    alert('Not enough items to update!');
  }
}

// DELETE: Removing the last item in the list
function deleteItem() {
  const list = document.getElementById('item-list');
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
    alert('Last item deleted!');
  } else {
    alert('No items to delete!');
  }
}
