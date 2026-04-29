// GET request
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked! Event triggered.');

    // Step 2: Use Fetch API to make the request
    let url = 'https://jsonplaceholder.typicode.com/todos/1'; // Example URL
    console.log('Fetching data from:', url);

    // Step 3: Send the request and handle the response
    fetch(url)
        .then(response => response.json())  // Parse the response as JSON
        .then(data => {
            console.log('Parsed Data:', data);

            // Step 4: Update the UI with the response data
            let todoTitle = data.title;
            document.getElementById('todoTitle').textContent = todoTitle;
            console.log('Updated content in the UI:', todoTitle);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

// POST request
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked! Event triggered.');

    // Step 1: Define the URL and the data to send
    let url = 'https://jsonplaceholder.typicode.com/posts';  // Example URL for POST
    let postData = {
        title: 'foo',
        body: 'bar',
        userId: 1
    };

    // Step 2: Use Fetch API to send a POST request
    fetch(url, {
        method: 'POST',  // Specify the request method
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)  // Convert data to JSON format
    })
    .then(response => response.json())  // Parse the response as JSON
    .then(data => {
        console.log('Data successfully posted:', data);
        // Optionally, update the UI with the response
    })
    .catch(error => {
        console.error('Error posting data:', error);
    });
});

//MUltiple requests
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked! Event triggered.');

    // Step 1: Define the URLs for the multiple requests
    let urls = [
        'https://jsonplaceholder.typicode.com/todos/1',
        'https://jsonplaceholder.typicode.com/todos/2',
        'https://jsonplaceholder.typicode.com/todos/3'
    ];

    // Step 2: Create an array of fetch promises
    let fetchPromises = urls.map(url => fetch(url).then(response => response.json()));

    // Step 3: Use Promise.all to handle multiple requests in parallel
    Promise.all(fetchPromises)
        .then(responses => {
            console.log('All data received:', responses);
            responses.forEach((data, index) => {
                console.log(`Todo ${index + 1}:`, data);
                // Optionally, update the UI with the fetched data
            });
        })
        .catch(error => {
            console.error('Error fetching multiple data:', error);
        });
});


