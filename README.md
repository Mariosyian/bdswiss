# BDSwiss
BDSwiss Assessment by Marios Yiannakou

Your task is to write a simple web app (backend and frontend) that allows the users to register, log in, and log out using REST API calls on the backend.

Implementation details:

- The app should allow the users to register, login, and log out.
- The minimum user data to be stored are:
  - email
  - password
    -  The password should be a minimum of 8 characters with at least one number and one character.
  - full name
    -  The full name should be at least 5 characters long.
- When logging in, the app should show the following message 'Welcome X! To logout click here'.
  - X should be the name of the registered user
  - The word 'here' should be a link that would log the user out.
- Automated tests are required. The candidate is free to pick the tests to be implemented.

Things to consider:
- Use React for the client-side web application.
- Pick durable storage (files, databases, etc) of your choice to save the user data.
