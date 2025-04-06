//criar lista com jogadores
//calcular a força de cada jogador e depois somar para saber a força do time
//calcular a força do time do computador
//comparar os dois times para saber quem venceu

viloesPossiveis = [
  "Madara Uchiha",
  "Orochimaru",
  "Pain",
  "Itachi Uchiha",
  "Obito Uchiha",
  "Deidara",
  "Sasori",
  "Kisame Hoshigaki",
  "Kakuzu",
  "Hidan",
  "Zabuza Momochi",
  "Kabuto Yakushi",
  "Kaguya Ōtsutsuki",
  "Konan" 
]

function criartime(){

  let divResultados = document.getElementById('resultados')
  let resultadoTime = document.getElementById('resultadoTime')
  let resultadoForcaTime = document.getElementById('resultadoForcaTime')
  let resultadoViloes = document.getElementById('resultadoViloes')
  let resultadoForcaViloes = document.getElementById('resultadoForcaViloes')
  let resultadoFinal = document.getElementById('resultadoFinal')

  let personagens = [
    "","",""
  ]
  
  let viloes = []

  let forcaPersonagens = 0
  let forcaViloes = 0

  personagens[0] = document.getElementById('personagem1').value || "Ninja Genérico 1"
  personagens[1] = document.getElementById('personagem2').value || "Ninja Genérico 2"
  personagens[2] = document.getElementById('personagem3').value || "Ninja Genérico 3"
  
  console.log(personagens)

  for(let i=0; i<3; i++){
    forcaPersonagens += Math.floor(Math.random()*10)+1
  }
  console.log(forcaPersonagens)

  const viloestime = Math.min(3, viloesPossiveis.length)

  for (let i = 0; i < viloestime; i++) {
      let vilaoSorteado
      let indiceAleatorio
      let jaEscolhido

      do {
          indiceAleatorio = Math.floor(Math.random() * viloesPossiveis.length)
          vilaoSorteado = viloesPossiveis[indiceAleatorio]
          jaEscolhido = viloes.includes(vilaoSorteado)
      } while (jaEscolhido)
      viloes.push(vilaoSorteado)
  }

  console.log(viloes)

  for (let i=0; i<3; i++){
    forcaViloes +=  Math.floor(Math.random()*10)+1
  }

  console.log(forcaViloes)
  
  let resultadoguerra 
  if (forcaPersonagens > forcaViloes){
    resultadoguerra = `Você ganhou a Guerra Ninja! Parabéns, voce ganha 30 moedas💴`
    document.getElementById("btnReiniciar").style.display = "inline"
    adicionarMoedas(30)
  }else if(forcaPersonagens < forcaViloes){
    resultadoguerra = `Você perdeu a Guerra Ninja!`
    document.getElementById("btnReiniciar").style.display = "inline"
  }else{
    resultadoguerra = `Ocorreu a paz na Guerra Ninja! ouve um empate`
    document.getElementById("btnReiniciar").style.display = "inline"
  }

  console.log(resultadoguerra)
  divResultados.style.display = 'block'
  resultadoTime.innerHTML = personagens.join(', ')
  resultadoForcaTime.innerHTML = `Força Total: ${forcaPersonagens}`
  resultadoViloes.innerHTML = viloes.join(', ')
  resultadoForcaViloes.innerHTML = `Força Total: ${forcaViloes}`
  resultadoFinal.innerHTML = `${resultadoguerra}`
}

function limpar() {
  let divResultados = document.getElementById('resultados')
  divResultados.style.display = 'none'
}