let form = document.querySelector(".form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  setResultado();
  let inputPeso = event.target.querySelector("#peso");
  let inputAltura = event.target.querySelector("#altura");

  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value);

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

  const msg = `Your BMI is ${imc} - ${level}`;
  setResultado(msg, true);
});

// Creating function for get level imc
function getLevelImc(imc) {
  const levels = [
    "Abaixo do peso",
    "Normal Weight",
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

function criaParagrafo() {
  let paragrafo = document.createElement("p");
  return paragrafo;
}

function setResultado(msg, isValid) {
  let resultado = document.querySelector(".resultado");
  resultado.innerHTML = "";
  let paragrafo = criaParagrafo();

  if (isValid) {
    paragrafo.classList.add("pResultado");
  } else {
    paragrafo.classList.add("badResult");
  }

  paragrafo.innerHTML = msg;
  resultado.appendChild(paragrafo);
}
