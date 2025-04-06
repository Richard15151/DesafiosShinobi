let rodada = 1;
let ganhou = true;

function jogar(escolhaJogador) {
  console.log(escolhaJogador)
  if (rodada > 3 || !ganhou) return;

  let caminhoErrado = Math.floor(Math.random() * 3) + 1;
  console.log(caminhoErrado)

  if (escolhaJogador == caminhoErrado) {
    let resultado = 'Caminho errado! Você foi capturado pela Akatsuki! <img src="akatsuki.png" alt="">';
    ganhou = false;
    document.getElementById("res").innerHTML = resultado;
    document.getElementById("btnReiniciar").style.display = "inline"; 
  } else {
    if (rodada < 3) {
      let resultado = `<p>Rodada: ${rodada}</p> Você acertou o caminho! Escolha novamente <img src="floresta.jpg" alt="">`;
      document.getElementById("res").innerHTML = resultado;
    } else {
      let resultado = 'Você chegou à Vila da Folha! Parabéns!<img src="viladafolha.jpg" alt=""><p>Você ganha 20 moedas💴</p>';
      document.getElementById("res").innerHTML = resultado;
      document.getElementById("btnReiniciar").style.display = "inline"; 
      adicionarMoedas(20)
    }
    rodada++;
  }
}

function limpar() {
  document.getElementById("res").innerHTML = '';
  document.getElementById("btnReiniciar").style.display = "none";
  rodada = 1;
  ganhou = true;
}