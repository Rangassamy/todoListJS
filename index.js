// Récuperation des éléments en HTML
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todo");

// Fonction qui écoute lorque le formulaire est valider
todoForm.addEventListener("submit", (e) => {
    // empêche le rechargement de la page
  e.preventDefault();

  // Permet d'éviter les beugs lorsque l'utilisateur ne met rien dans l'input
  if (todoInput.value === "") {
    return alert("Veuillez saisir une tâche avant de valider !");
  }

  //On incrémente un li dans l'ul avec la valeur de l'input lorsque le formulaire est valider
  todo.innerHTML += ` <li>${todoInput.value}</li>`;

  // On remet la valeur de l'input à zéro, des guillemets vide pour signaler que il ne doit rien avoir
  todoInput.value = "";
});
