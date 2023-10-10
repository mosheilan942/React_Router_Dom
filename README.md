# React Users App #
This is a simple React app that displays a list of users fetched from an API. Users can click on a user to view details and tasks for that user. React Router is used for routing between the users list, user details, and task pages.


This project was bootstrapped with Create React App.

Features
Displays a list of users fetched from https://jsonplaceholder.typicode.com/users
Clicking on a user navigates to a user details page via React Router
User details page shows information specific to that user
User details page also contains a list of tasks for that user
React Router manages navigation between the users list, user details, and tasks pages
Pages
HomePage - Displays the list of users
UserDetailsPage - Shows details for a specific user and list of tasks
TasksPage - Will display details for a specific task
Components
App - Handles overall app routing
UsersList - Responsible for fetching and rendering the users list
UserDetails - Fetches and displays details for a single user
TasksList - Will fetch and render tasks for the user
Additional Libraries
React Router - For routing between pages
TypeScript - For type safety