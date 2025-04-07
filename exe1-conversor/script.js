function converter(){
    const resultadosreais = document.getElementById("resultadoreais")
    const resultadosdolares = document.getElementById("resultadodolares")
    const resultadosyenes = document.getElementById("resultadoyenes")
    const divresultados = document.getElementById("resultados")

    let moedas = getMoedas()
    console.log(moedas)

    let resultadosReais = (moedas * 0.1).toFixed(2)
    console.log(resultadosreais)
    let resultadosDolares = (moedas * 0.01).toFixed(2)
    console.log(resultadosdolares)
    let resultadosYenes = (moedas * 0.5).toFixed(2)
    console.log(resultadosyenes)

    resultados.style.display = 'block'
    resultadosreais.innerHTML = `Suas moedas equivalem a R$${resultadosReais}`
    resultadosdolares.innerHTML = `Suas moedas equivalem a $${resultadosDolares}`
    resultadosyenes.innerHTML = `Suas moedas equivalem a ¥${resultadosYenes}`
}

