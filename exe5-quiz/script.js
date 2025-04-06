// PARTE 1: Lista de perguntas e respostas
const perguntas = [ 
  {
    pergunta: "Quem foi o primeiro mentor de Naruto na Academia Ninja?",
    respostas: [
      { opcao: "Iruka Umino", correto: true },
      { opcao: "Kakashi Hatake", correto: false },
      { opcao: "Jiraiya", correto: false },
      { opcao: "Hiruzen Sarutobi", correto: false },
    ],
  },
  {
    pergunta:
      "Qual é o nome do jutsu de assinatura que Kakashi ensinou a Sasuke?",
    respostas: [
      { opcao: "Rasengan", correto: false },
      { opcao: "Chidori", correto: true },
      { opcao: "Kage Bunshin no Jutsu", correto: false },
      { opcao: "Katon: Goukakyuu no Jutsu", correto: false },
    ],
  },
  {
    pergunta: "Qual equipe de genin Kakashi Hatake liderou?",
    respostas: [
      { opcao: "Time 8", correto: false },
      { opcao: "Time 10", correto: false },
      { opcao: "Time Guy", correto: false },
      { opcao: "Time 7", correto: true },
    ],
  },
  {
    pergunta:
      "Qual organização criminosa caçava os Jinchuriki (portadores das Bestas com Caudas)?",
    respostas: [
      { opcao: "ANBU", correto: false },
      { opcao: "Raiz (Fundação)", correto: false },
      { opcao: "Akatsuki", correto: true },
      { opcao: "Otogakure (Vila do Som)", correto: false },
    ],
  },
  {
    pergunta: "Qual é o Dōjutsu (técnica ocular) característico do clã Uchiha?",
    respostas: [
      { opcao: "Byakugan", correto: false },
      { opcao: "Rinnegan", correto: false },
      { opcao: "Sharingan", correto: true },
      { opcao: "Tenseigan", correto: false },
    ],
  },
]

// PARTE 2: Pegando os elementos do HTML
const perguntaElemento = document.querySelector(".pergunta")
const respostasElemento = document.querySelector(".respostas")
const progressoElemento = document.querySelector(".progresso")
const feedbackElemento = document.querySelector("#feedback-mensagem")
const resultadoFinalElemento = document.querySelector("#resultado-final")
const caixaPerguntaElemento = document.querySelector(".caixapergunta")
const sobreElemento = document.querySelector(".sobre")

// PARTE 3: Variáveis para controle do jogo
let indiceAtual = 0
let acertos = 0
let timeoutFeedback = null

// PARTE 4: Função para carregar uma nova pergunta
function carregarPergunta() {
  // Limpa o feedback anterior se houver um timeout pendente
  if (timeoutFeedback) {
    clearTimeout(timeoutFeedback)
    feedbackElemento.innerHTML = ""
  }
  //indice da pergunta
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`
  const perguntaAtual = perguntas[indiceAtual]
  perguntaElemento.innerHTML = perguntaAtual.pergunta
  respostasElemento.innerHTML = ""

  // Percorre todas as respostas da pergunta atual
  perguntaAtual.respostas.forEach((resposta) => {
    const botao = document.createElement("button")
    botao.classList.add("botao-resposta")
    botao.innerText = resposta.opcao
    botao.onclick = function () {
      if (timeoutFeedback) clearTimeout(timeoutFeedback)
      feedbackElemento.innerHTML = ""
      resultadoFinalElemento.innerHTML = ""
      respostasElemento.querySelectorAll('.botao-resposta').forEach(btn => btn.disabled = true)
      if (resposta.correto) {
        acertos++
        feedbackElemento.innerHTML = "Parabéns! Resposta Correta!"
        feedbackElemento.style.color = "green"
        timeoutFeedback = setTimeout(() => {
          feedbackElemento.innerHTML = ""
          proximoPasso()
        }, 1500)
      } else {
        feedbackElemento.innerHTML = "Ops! Resposta Incorreta."
        feedbackElemento.style.color = "red"
        timeoutFeedback = setTimeout(() => {
          feedbackElemento.innerHTML = ""
          proximoPasso()
        }, 1500)
      }
    }
    respostasElemento.appendChild(botao);
  })
}

// Função auxiliar para avançar no quiz
function proximoPasso() {
   indiceAtual++
    if (indiceAtual < perguntas.length) {
        carregarPergunta()
    } else {
        finalizarJogo()
    }
}

// PARTE 5: Função para mostrar a tela final
function finalizarJogo() {
  // Limpa qualquer feedback pendente
  if (timeoutFeedback) clearTimeout(timeoutFeedback)
  feedbackElemento.innerHTML = ""

  // Esconde a caixa de perguntas/progresso e as respostas
  caixaPerguntaElemento.style.display = "none"
  respostasElemento.style.display = "none"

  // Garante que a área .sobre/.prompt esteja visível
  sobreElemento.style.display = "flex"

  if (acertos == 5){
    resultadoFinalElemento.innerHTML = `<img src="joia.png" alt=""> <br>Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você ganha 50 moedas!💴</p>`
    adicionarMoedas(50)
  }else if(acertos == 4){
    resultadoFinalElemento.innerHTML = `<img src="joia.png" alt=""> <br>Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você ganha 40 moedas!💴</p>`
    adicionarMoedas(40)
  }else if(acertos == 3){
    resultadoFinalElemento.innerHTML = `<img src="joia.png" alt=""> <br>Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você ganha 30 moedas!💴</p>`
    adicionarMoedas(30)
  }else if(acertos == 2){
    resultadoFinalElemento.innerHTML = `<img src="joia.png" alt=""> <br>Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você ganha 20 moedas!💴</p>`
    adicionarMoedas(20)
  }else if (acertos == 1){
    resultadoFinalElemento.innerHTML = `<img src="joia.png" alt=""> <br>Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você ganha 10 moedas!💴</p>`
    adicionarMoedas(10)
  }else{
    resultadoFinalElemento.innerHTML = `Fim do Teste!<br>Você acertou ${acertos} de ${perguntas.length} perguntas. <p>Você não ganhou moedas!</p>`
  }
  console.log("Acertos finais:", acertos)
}

carregarPergunta()
