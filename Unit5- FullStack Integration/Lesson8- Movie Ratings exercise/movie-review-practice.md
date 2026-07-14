# Practice Exercise: Movie Ratings App

## Objective

Build a single Express application using the MVC pattern with EJS views. Keep everything in one app where the server renders HTML pages with EJS.

The app should let users:

- view a list of movies
- open a movie details page
- add a review for a movie
- add a new movie
- delete a movie or review

---

## What you will build

Create a full-stack app that uses:

- EJS for the views
- Express for the server
- a model for movie and review data
- a controller for request handling
- routes to connect URLs to controller functions
- a simple stylesheet in the public folder

This means your app will render pages server-side instead of using a separate client folder.

---

## Recommended project structure

```text
movie-review-app/
|__src/
  ├── app.js
  ├── controllers/
  │   ├── movieController.js
  │   └── reviewController.js
  ├── models/
  │   ├── movieModel.js
  │   └── reviewModel.js
  ├── routes/
  │   ├── movieRoutes.js
  │   └── reviewRoutes.js
  ├── views/
  │   ├── index.ejs
  │   └── show.ejs
  │   └── partials/
  ├── public/
  │   └── css/
  │       └── styles.css
├── test/
│   └── app.test.js
└── package.json
```

---

## Requirements

### 1. Application structure

- Build the app as one Express project with EJS views.
- Use the MVC pattern: models for data, controllers for logic, and routes for URL handling.
- Keep routes simple and let controllers do most of the work.

### 2. EJS pages

Your app should include at least these pages:

- `GET /movies` → show a homepage with all movies
- `GET /movies/:id` → show movie details and reviews

Each page should be rendered with `res.render()`.

### 3. User actions

Add forms to:

- create a new movie
- submit a new review
- delete a movie
- delete a review

Use form submissions with `express.urlencoded()` so the server can receive the data.

### 4. Data model requirements


Each movie should include:

- a unique id
- a title
- a description
- a release year
- a poster image link

Each review should include:

- a unique id
- a movie reference
- a reviewer name
- a comment
- a rating from 1 to 5

### 5. Styling requirements

- Serve a stylesheet from the public folder.
- Make the pages visually clear and easy to read.
- You may use Bootstrap or plain CSS.

### 6. Behavior requirements

- The home page should display movie cards or a list with title, year, and poster.
- The details page should show the movie description and all reviews for that movie.
- If a movie does not exist, show a friendly message such as `Movie not found`.
- Use EJS conditionals so review information only appears when it exists.

---

## Unit testing with Mocha and Chai

Once the app is working, add tests for the Express routes.

### Testing requirements

- Install Mocha, Chai, and Chai HTTP as development dependencies.
- Add a test script to your package.json.
- Create a test file for the app routes.

### Run the tests

Run the test command from your project folder.

---

## Stretch challenge

Add a JSON API endpoint such as `GET api-docs` and use swagger to document the api endpoints 

---

## Tips

- Keep routes simple and let controllers do the logic.
- Keep your EJS templates focused on presentation.
