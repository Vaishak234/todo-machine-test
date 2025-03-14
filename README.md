# To-Do List App with Redux

## Description
A simple To-Do List application built using React and Redux that allows users to manage their tasks efficiently. The app supports adding, completing, undoing, editing, and deleting tasks. Additionally, tasks are persisted using `localStorage`, ensuring that they remain saved even after refreshing the page. Users can also filter tasks based on their status: All, Completed, or Pending.

## Features
- **Add a Task:** Users can type in a task and click "Add" to include it in the list.
- **Complete a Task:** Click the "Complete" button to mark a task as completed (crossed out).
- **Undo a Completed Task:** Click "Undo" to mark a completed task as pending.
- **Edit a Task:** Click "Edit," modify the text, and click "Update" to save changes.
- **Delete a Task:** Click "Delete" to remove a task permanently.
- **Filter Tasks:** Users can filter tasks by selecting "All," "Completed," or "Pending."
- **Persistent Storage:** Tasks are stored in `localStorage`, ensuring they remain available after page refresh.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Vaishak234/todo-machine-test
   ```
2. Navigate to the project directory:
   ```bash
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm run dev
   ```

## Usage
1. Type a task in the input field and click "Add" to add it to the list.
2. Click "Complete" to mark a task as done.
3. Click "Undo" to revert a completed task to pending.
4. Click "Edit" to modify an existing task and "Update" to save changes.
5. Click "Delete" to remove a task permanently.
6. Use the filter buttons to display All, Completed, or Pending tasks.

## State Management with Redux
- The app uses Redux to manage the global state of tasks.
- The tasks are stored in the Redux store and updated based on user actions.
- The `localStorage` is used to persist tasks between sessions by syncing the Redux store with `localStorage`.

## Local Storage Integration
- On app load, tasks are fetched from `localStorage` and initialized in the Redux store.
- Every time the task list is updated, the tasks are saved in `localStorage` to maintain persistence.

## Technologies Used
- React.js
- Redux Toolkit
- JavaScript
- Tailwind CSS (for styling)
- LocalStorage (for persistence)


## License
This project is open-source and available under the MIT License.

