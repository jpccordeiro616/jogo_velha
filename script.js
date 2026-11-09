const tabuleiro = document.getElementById("tabuleiro");
const aviso = document.getElementById("status");
const linhas = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

let casas, vez, fim;

function iniciar() {
  tabuleiro.innerHTML = "";
  casas = Array(9).fill("");
  vez = "X";
  fim = false;
  aviso.textContent = "Vez de X";
  for (let i = 0; i < 9; i++) {
    const b = document.createElement("button");
    b.className = "casa";
    b.onclick = () => jogar(i, b);
    tabuleiro.appendChild(b);
  }
}

function jogar(i, botao) {
  if (fim || casas[i]) return;
  casas[i] = vez;
  botao.textContent = vez;

  if (linhas.some(l => l.every(n => casas[n] === vez))) {
    aviso.textContent = vez + " venceu!";
    fim = true;
  } else if (casas.every(c => c)) {
    aviso.textContent = "Empate!";
    fim = true;
  } else {
    vez = vez === "X" ? "O" : "X";
    aviso.textContent = "Vez de " + vez;
  }
}

document.getElementById("reiniciar").onclick = iniciar;
iniciar();
