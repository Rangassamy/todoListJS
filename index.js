// Récuperation des éléments en HTML
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo");
const Tasks = [];

// Fonction qui écoute lorque le formulaire est valider
todoForm.addEventListener("submit", (e) => {
  // empêche le rechargement de la page
  e.preventDefault();

  // Permet d'éviter les beugs lorsque l'utilisateur ne met rien dans l'input
  if (todoInput.value === "") {
    return alert("Veuillez saisir une tâche avant de valider !");
  }
  Tasks.push(todoInput.value);
  localStorage.setItem("task", JSON.stringify(Tasks));
  renderTaskTodo(todoInput.value);
});

//fonction permettant de afficher la valeur dans li
function renderTaskTodo(value) {
  todo.innerHTML += ` <li class="todoTask">${value}</li>`;
  // On remet la valeur de l'input à zéro, des guillemets vide pour signaler que il ne doit rien avoir
  todoInput.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  renderTaskLocalStorage(JSON.parse(localStorage.getItem("task")));
});

function renderTaskLocalStorage(values) {
  values.forEach((value) => {
    todo.innerHTML += ` <li class="todoTask">${value}</li>`;
  });
}
