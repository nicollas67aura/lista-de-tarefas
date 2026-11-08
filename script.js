const form = document.getElementById("form-tarefa");
const campo = document.getElementById("campo-tarefa");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campo.value.trim();
  if (texto === "") return;

  const item = document.createElement("li");
  item.textContent = texto;
  lista.appendChild(item);

  campo.value = "";
  campo.focus();
});
