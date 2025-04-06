function jogar(escolhaJogador) {
  const escolhaComputador = Math.floor(Math.random() * 3) + 1;
  const escolhas = ["", "Pedra", "Kunai", "Pergaminho"];
  let resultado = "";

  if (escolhaJogador == escolhaComputador) {
    resultado = `Empate! Ambos escolheram <strong>${escolhas[escolhaJogador]}</strong><img src="narutoempate.png" alt="">`;
  } else if (escolhaJogador == 1) {
    if (escolhaComputador == 2) {
      resultado = `Você venceu! Pain escolheu <strong>Kunai</strong> <img src="narutofeliz.png" alt=""> <p>Você ganha 1 moeda! 💴</p>`;
      adicionarMoedas(1);
    } else {
      resultado = `Você perdeu! Pain escolheu <strong>Pergaminho</strong><img src="narutotriste.png" alt="">`;
    }
  } else if (escolhaJogador == 2) {
    if (escolhaComputador == 1) {
      resultado = `Você perdeu! Madara escolheu <strong>Pedra</strong><img src="narutotriste.png" alt="">`;
    } else {
      resultado = `Você venceu! Madara escolheu <strong>Pergaminho</strong> <img src="narutofeliz.png" alt=""><p>Você ganha 1 moeda! 💴</p>`;
      adicionarMoedas(1);
    }
  } else if (escolhaJogador == 3) {
    if (escolhaComputador == 1) {
      resultado = `Você venceu! Obito escolheu <strong>Pedra</strong> <img src="narutofeliz.png" alt=""><p>Você ganha 1 moeda! 💴</p>`;
      adicionarMoedas(1);
    } else {
      resultado = `Você perdeu! Obito escolheu <strong>Kunai</strong><img src="narutotriste.png" alt="">`;
    }
  }

  document.getElementById("res").innerHTML = resultado;
}
function limpar(){
  document.getElementById("res").innerHTML = ''
}