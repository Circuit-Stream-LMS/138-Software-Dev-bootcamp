// Example 1: Using async/await for GET request
async function fetchDataWithAsyncAwait() {
    try {
      // Making a GET request to fetch data from the server
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      
      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response body as JSON
      const data = await response.json();
      
      // Log the fetched data
      console.log('GET Data (async/await):', data);
    } catch (error) {
      // Handle any errors that occur during the fetch process
      console.error('Error with async/await:', error);
    }
  }
  

  // Example 2: Using async/await for POST request
  async function postDataWithAsyncAwait() {
    try {
      const postData = {
        title: 'foo',
        body: 'bar',
        userId: 1
      };
  
      // Making a POST request to send data to the server
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'  // Indicate we're sending JSON data
        },
        body: JSON.stringify(postData)  // Convert JavaScript object to JSON string
      });
  
      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Parse the response body as JSON
      const data = await response.json();
      
      // Log the result of the POST request
      console.log('POST Data (async/await):', data);
    } catch (error) {
      // Handle any errors that occur during the fetch process
      console.error('Error with async/await POST:', error);
    }
  }
  
  fetchDataWithAsyncAwait(); // Using async/await for GET
  postDataWithAsyncAwait(); // Using async/await for POST
  