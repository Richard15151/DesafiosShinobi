// Inicializa as moedas se ainda não existirem
if (localStorage.getItem("moedas") === null) {
    localStorage.setItem("moedas", "0");
  }
  
  // Função para adicionar moedas
  function adicionarMoedas(qtd) {
    let moedasAtuais = parseInt(localStorage.getItem("moedas"));
    moedasAtuais += qtd;
    localStorage.setItem("moedas", moedasAtuais.toString());
    atualizarExibicaoMoedas(); // Atualiza na tela se o elemento existir
  }
  
  // Função para pegar o total de moedas
  function getMoedas() {
    return parseInt(localStorage.getItem("moedas"));
  }
  
  // Função para atualizar a exibição das moedas na tela
  function atualizarExibicaoMoedas() {
    const elemento = document.getElementById("moedas");
    if (elemento) {
      elemento.textContent = "Suas moedas: "+getMoedas()+"💴";
    }
  }
  