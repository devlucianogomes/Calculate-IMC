// capturar o evento de submit do formulário
let form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  setResultado();
  // capturando os valores dos inputs
  let inputPeso = event.target.querySelector("#peso");
  let inputAltura = event.target.querySelector("#altura");

  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value);

  /*
    Cecando se o peso e altura são diferentes de true, ou seja, se são falsos
    no caso de falso, então a função setResultado recebe como parametro o peso 
    inválido e também o parametro de false, para que seja aplicado o fundo vermelho
    e logo em seguida, um return para que feche a execução da função
  */
  if (!peso) {
    setResultado("Dados Inválidos", false);
    return;
  }

  if (!altura) {
    setResultado("Dados Inválidos", false);
    return;
  }

  const imc = getImc(peso, altura);
  const level = getLevelImc(imc);

  const msg = `Seu imc é ${imc} - ${level}`;
  setResultado(msg, true);
});

// Creating function for get level imc
function getLevelImc(imc) {
  const levels = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade 1",
    "Obesidade 2",
    "Obesidade 3",
  ];

  if (imc >= 39.9) return levels[5];

  if (imc >= 34.9) return levels[4];

  if (imc >= 29.9) return levels[3];

  if (imc >= 24.9) return levels[2];

  if (imc >= 18.5) return levels[1];

  if (img < 18.5) return levels[0];
}

// Creating function for get imc
function getImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

// criar uma função somente para criar o paragrafo do resultado
function criaParagrafo() {
  let paragrafo = document.createElement("p");
  return paragrafo;
}

// criar a funcao para setar o resultado em tela
// ou seja, mostrar o paragrafo criado em tela, abaixo do button
function setResultado(msg, isValid) {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = ""; // zerando o html
  let paragrafo = criaParagrafo(); // paragrafo criado

  if (isValid) {
    paragrafo.classList.add("pResultado");
  } else {
    paragrafo.classList.add("badResult");
  }

  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}
