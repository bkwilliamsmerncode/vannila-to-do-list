function addTask() {
    const newTaskInput = document.getElementById('newTaskInput');
    const taskText = newTaskInput.value.trim();

    if (taskText !== '') {
      const todoList = document.getElementById('todoList');
      
      // Create a new task element
      const taskElement = document.createElement('li');
      taskElement.className = 'task';

      // Create an input element for the checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.addEventListener('change', function() {
        toggleTaskStatus(taskElement);
      });

      // Create a span element for the task text
      const taskTextElement = document.createElement('span');
      taskTextElement.textContent = taskText;

      // Create a button element to delete the task
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTask(taskElement);
      });

      // Append elements to the task element
      taskElement.appendChild(checkbox);
      taskElement.appendChild(taskTextElement);
      taskElement.appendChild(deleteButton);

      // Append the task element to the todo list
      todoList.appendChild(taskElement);

      // Clear the input field
      newTaskInput.value = '';
    }
  }

  // Function to toggle the status (completed/incomplete) of a task
  function toggleTaskStatus(taskElement) {
    taskElement.classList.toggle('completed');
  }

  // Function to delete a task
  function deleteTask(taskElement) {
    taskElement.remove();
  }