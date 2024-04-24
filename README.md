# CRUD Task Management Project with Registration and Login

This project is a CRUD (Create, Read, Update, Delete) system with login and registration functionalities designed to allow users to manage their tasks effectively. Users can register on the platform, log in to their accounts, and then add, edit, and delete tasks as needed. It's a useful tool for organizing and managing daily activities, providing an intuitive and easy-to-use interface for task management.

## Project Status
Stable

## Installation

Below are the steps to install and run the project on a local environment.

1. **Clone the Repository**: Clone this repository: git clone https://github.com/SamuelSml8/USERS-TASKS.git
2. **Install Dependencies**: Commands to install the necessary dependencies: npm install
3. **Run Backend**: Into src run the backend project with the command: npm run dev
4. **Run Frontend**: Into client run the frontend project with the command: npm run dev 

## Usage

How to use the project once it´s installed and runnig.

1. **Registration and Login**: You can register with your personal data and login once registered
2. **Create Tasks**: Click in the new task button to create a new task
3. **Edit Tasks**: Click in the edit button to edit a specific task with new data
4. **Delete Tasks**: Click in the delete button to delete a specific task

## Project Structure

The project is organized in two main directories:

### Backend (src)

src/
│.
├── controllers/ # Drivers to handle HTTP requests
│ ├── auth.controller.js
│ └── tasks.controller.js
│.
├── libs/ # Libraries and utilities
│ └── jwt.js
│.
├── middlewares/ # Middlewares for intercepting and processing HTTP requests
│ ├── validateToken.js
│ └── validator.middleware.js
│.
├── models/ # Database data models
│ ├── task.model.js
│ └── user.model.js
│.
├── routes/ # Route definitions for each resource
│ ├── auth.routes.js
│ └── tasks.routes.js
│.
├── schemas/ # Data validation schemes
│ ├── auth.schema.js
│ └── task.schema.js
│.
├── app.js # Main application configuration
├── config.js # Project configuration
├── db.js # Database connection
└── index.js # Main entry point

### Frontend (client/src).

The frontend is organized as follows:

client/
│.
└── src/
│.
├── api/ # Configuration files and functions for making API calls
│ ├── auth.js
│ └── tasks.js
│.
├── components/ # Reusable React components
│ ├── Navbar.jsx
│ └── TaskCard.jsx
│.
├── context/ # React contexts for global state management
│ ├── AuthContext.jsx
│ └── TaskContext.jsx
│.
├── pages/ # Application page components
│ ├── HomePage.jsx
│ ├── LoginPage.jsx
│ ├── ProfilePage.jsx
│ ├── RegisterPage.jsx
│ ├── TaskFormPage.jsx
│ └── TasksPage.jsx
│.
├── app.jsx # Main component
├── ProtectedRoute.jsx # Component to protected routes
└── main.jsx # Main entry point of the application 

## Contact

If you want to contact me, here are my contact details
Email: veramirandasamuel6@gmail.com
WhatsApp: 3126621145
