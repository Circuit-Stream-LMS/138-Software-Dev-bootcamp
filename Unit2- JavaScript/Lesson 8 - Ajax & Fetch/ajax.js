// Step 1: An event triggers the need for new data
document.querySelector('button').addEventListener('click', function() {
    console.log('Button clicked! Event triggered.');

    // Step 2: Create an AJAX request
    let xhr = new XMLHttpRequest();
    let url = 'https://jsonplaceholder.typicode.com/todos/1'; // Example URL
    console.log('AJAX request created for:', url);

    // Step 3: Send the request to the server asynchronously
    xhr.open('GET', url, true);
    console.log('Sending request to server...');
    xhr.send();

    // Step 4: Server processes the request
    console.log('Request sent to server, waiting for response...');

    // Step 5: Handle the server's response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            console.log('Server response received:');
            console.log('Response Text:', xhr.responseText);

            // Step 6: Handle the response in JavaScript
            let responseData = JSON.parse(xhr.responseText);
            console.log('Parsed Response Data:', responseData);

            // Step 7: Reflect the updated content in the UI (DOM Manipulation)
            let todoTitle = responseData.title;
            document.getElementById('todoTitle').textContent = todoTitle;
            console.log('Updated content in the UI: ', todoTitle);
        }
    };
});
