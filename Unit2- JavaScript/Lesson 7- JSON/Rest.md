## RESTful Architecture Overview

REST (Representational State Transfer) is an architectural style for designing networked applications. It is based on stateless communication, typically over HTTP, where each request from a client to a server must contain all the information needed to understand and process the request.

### HTTP Methods
The HTTP methods are used to perform CRUD operations (Create, Read, Update, Delete) on resources. These methods are fundamental to RESTful APIs:

1. **GET**: Retrieve data from the server (Read operation).
2. **POST**: Send data to the server, often used to create a new resource (Create operation).
3. **PUT**: Update an existing resource or create it if it does not exist (Update operation).
4. **PATCH**: Partially update an existing resource (Update operation).
5. **DELETE**: Remove a resource from the server (Delete operation).

![Restful Architecture](https://miro.medium.com/v2/resize:fit:788/1*m3jEkdc9SKTK6vNPhRHCqg.jpeg)

### HTTP Status Codes
HTTP status codes are used to indicate the result of a server's attempt to process a client's request. They are grouped into five categories:

- **1xx - Informational**: Request received, continuing process.
  - Example: `100 Continue`
  
- **2xx - Success**: The request was successfully received, understood, and accepted.
  - `200 OK`: The request was successful.
  - `201 Created`: The resource was created successfully (usually with POST).

- **3xx - Redirection**: Further action is required to complete the request.
  - `301 Moved Permanently`: The resource has been permanently moved to a new location.
  
- **4xx - Client Error**: The request contains bad syntax or cannot be fulfilled.
  - `400 Bad Request`: The server could not understand the request.
  - `404 Not Found`: The requested resource could not be found.

- **5xx - Server Error**: The server failed to fulfill a valid request.
  - `500 Internal Server Error`: The server encountered an unexpected condition that prevented it from fulfilling the request.

![HTTP Status Codes](https://restfulapi.net/wp-content/uploads/HTTP-Error-Codes.jpg)

### Conclusion
RESTful architecture uses standard HTTP methods to interact with resources, ensuring a stateless communication model. The HTTP status codes provide important feedback on the result of these interactions.
