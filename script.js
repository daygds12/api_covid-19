$.ajax({
    url: "https://covid.mathdro.id/api",
    success: (dados) => {
        dadosRecebidos(dados)
    }
})
// funcao de captura de resultados com jquery 
function dadosRecebidos(result) {
    $(".container1").html(`<h3>Casos Confirmados</h3> <div><h1>
    ${result.confirmed.value}</h1></div>`)


    $(".container2").html(`<h3>Casos Recuperados</h3> <div><h1>
    ${result.recovered.value}</h1></div>`)


    $(".container3").html(`<h3>Óbitos Confirmados</h3> <div><h1>
    ${result.deaths.value}</h1></div>`)
}
