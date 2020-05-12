//selectors

const todoInput = document.querySelector('.todo-input'); //input field
const todoButton = document.querySelector('.todo-button'); //plus/add button
const todoList =  document.querySelector('.todo-list'); //ul





//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);


//Functions

function addTodo (event) {
  //prevent form from submitting
    event.preventDefault();
    //create Todo Div
    const todoDiv = document.createElement('div');

    //adds class to the div
    todoDiv.classList.add('todo');

    //create li item to go in the div
    const newTodo =  document.createElement('li');
    // the li gets the text from the user input box
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');

    //adds the li that was created to the todo div
    todoDiv.appendChild(newTodo);

    //check mark button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //Finally append the todo div to the ul

    todoList.appendChild(todoDiv);

    
    //clear todo input value

    todoInput.value = '';

    //delete item

    
   
    
}
function deleteCheck (e) {
  const item = e.target;
//when clicking in the ul section this is looking for when the trash button is clicked
  if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.remove();
      
  }
}