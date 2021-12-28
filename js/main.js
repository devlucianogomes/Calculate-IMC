// capturar o evento de submit do formulário
let form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  setResultado();
});
// capturar o evento de submit do formulário - fim

// criar uma função somente para criar o paragrafo do resultado
function criaParagrafo() {
  let paragrafo = document.createElement("p");
  paragrafo.classList("pResultado");
  paragrafo.innerHTML = "Teste";
}

// criar a funcao para setar o resultado em tela
// ou seja, mostrar o paragrafo criado em tela, abaixo do button
function setResultado(mensagem) {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = ""; // zerando o html
  resultado.appendChild(paragrafo); // inserindo o p criado pela function
}
