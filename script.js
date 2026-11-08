const form = document.getElementById("form-tarefa");
const campo = document.getElementById("campo-tarefa");
const lista = document.getElementById("lista");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const texto = campo.value.trim();
  if (texto === "") return;

  const item = document.createElement("li");

  const spanTexto = document.createElement("span");
  spanTexto.textContent = texto;

  const botaoRemover = document.createElement("button");
  botaoRemover.textContent = "Remover";
  botaoRemover.addEventListener("click", function () {
    item.remove();
  });

  item.appendChild(spanTexto);
  item.appendChild(botaoRemover);
  lista.appendChild(item);

  campo.value = "";
  campo.focus();
});
