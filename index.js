// Récupération des éléments en HTML
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo");

// Fonction qui écoute lorsque le formulaire est validé
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (todoInput.value === "") {
    return alert("Veuillez saisir une tâche avant de valider !");
  }

  // Récupérer les tâches depuis le localStorage ou initialiser un tableau vide
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  // Ajouter la nouvelle tâche
  tasks.push(todoInput.value);

  // Sauvegarder les tâches mises à jour dans le localStorage
  localStorage.setItem("tasks", JSON.stringify(tasks));

  // Afficher la nouvelle tâche
  renderTask(todoInput.value);

  // Réinitialiser la valeur de l'input
  todoInput.value = "";
});

// Fonction permettant d'afficher une tâche dans un élément <li>
function renderTask(value) {
  const li = document.createElement("li");
  li.textContent = value;
  li.className = "todoTask";

  // Ajouter un écouteur d'événements pour supprimer la tâche au clic
  li.addEventListener("click", () => {
    // Supprimer la tâche de l'affichage
    li.remove();

    // Supprimer la tâche du localStorage
    removeTaskFromLocalStorage(value);
  });

  todoList.appendChild(li);
}

// Fonction pour supprimer une tâche du localStorage
function removeTaskFromLocalStorage(value) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== value);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Charger les tâches depuis le localStorage au chargement de la page
window.addEventListener("DOMContentLoaded", () => {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(renderTask);
});
