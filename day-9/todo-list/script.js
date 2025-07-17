const adderInput = document.getElementById("adder-inp");
const adderForm = document.getElementById("adder-form");
const todoList = document.getElementById("todos");

let num = 1;
function addTask() {
  if (!adderInput.value) return;

  const newNode = `<div class="todo-item" onclick="this.remove()">
    <p>${num++}. ${adderInput.value}</p>
  </div>`;

  // todoList.innerHTML = newNode + todoList.innerHTML;
  todoList.innerHTML += newNode;
  adderInput.value = "";
}

adderForm.onsubmit = (e) => {
  e.preventDefault();
  addTask();
};
