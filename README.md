
# # Todo-List

## Overview

The Todo List project is a simple yet powerful task management application designed to help users organize their daily tasks efficiently. The application allows users to create, manage, and delete tasks, offering a clean and intuitive user interface. This project demonstrates core concepts of React.js, including state management, component-driven architecture, and CSS for styling. The Todo List is also responsive, ensuring usability across various devices, and supports persistent data storage using local storage.

## How to Use

**1] Clone the Repository:** Start by cloning the repository to your local machine.
```bash
 git clone https://github.com/HarshMaurya04/Todo-List.git
``` 

**2] Install Dependencies:** Navigate to the project directory and install the required dependencies.
```bash
 cd todo-list
 npm install
``` 

**3] Run the Application:** Start the development server to run the application locally.
```bash 
 npm start
``` 

**4] Add a Task:** Use the input fields to add a new task by providing a title and description. The task will appear in the list below.

**5] Mark as Complete:** Check the checkbox next to a task to mark it as completed. The title will be struck through.

**5] Delete a Task:** Click the "Delete" button to remove a task from the list.

## Technical Details

**1] React Components:** The project is built using React, with components such as 'TodoItems', 'Todos', 'AddTodos', and 'About'. Each component is responsible for a specific part of the application.

- **TodoItems:** Renders individual tasks with a title, description, checkbox, and delete button.
- **Todos:** Manages the list of tasks, rendering them and handling state updates.
- **AddTodos:** Provides the form for adding new tasks. 
- **About:** Displays static content describing the application.

**2] CSS Modules:** The project uses CSS Modules for styling, ensuring that styles are scoped to specific components to avoid conflicts. The design includes responsive layouts, hover effects, and conditional styling for completed tasks.

**3] State Management:** React's useState hook is employed for managing the state of tasks (todos), including their addition, deletion, and completion status. The state is updated in real-time as users interact with the application.

**4] Local Storage:** The application uses the browser's local storage to persist tasks, so they remain even after the page is refreshed. This ensures that users' tasks are saved and restored seamlessly across sessions.

**5] Responsive Design:** The application is designed to be responsive, adjusting to different screen sizes. Flexbox is used to handle the layout, ensuring that components such as the task list and delete button remain aligned and properly sized across devices.

## Screenshots

![Screenshot 2024-09-01 122735](https://github.com/user-attachments/assets/76346793-5301-41de-9392-a986a4f3255a)
![Screenshot 2024-09-01 122750](https://github.com/user-attachments/assets/127519f7-a4f7-42cf-b826-431a7e26d126)

![Screenshot 2024-09-01 122759](https://github.com/user-attachments/assets/a9eaa147-39a6-4d9e-8000-6035d398763b)
![Screenshot 2024-09-01 122839](https://github.com/user-attachments/assets/869ed364-63a8-4c16-b7a7-35e49377f59c)
![Screenshot 2024-09-01 122847](https://github.com/user-attachments/assets/63c2fd3f-577c-4029-aa64-a8720e3f01a8)

