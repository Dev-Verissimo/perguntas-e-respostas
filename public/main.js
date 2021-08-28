function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

// function fazLinha(usuario) {
//     let linha = document.createElement('tr')
//     let tdId = document.createElement('td')
//     let tdNome = document.createElement('td')
//     tdId.innerHTML =  usuario.results[0].category

//     linha.appendChild(tdId)
//     linha.appendChild(tdNome)

//     return linha
// }

function main() {
    let perguntas = fazGet("https://opentdb.com/api.php?amount=2")
    let usuarios = JSON.parse(perguntas)
    console.log(usuarios)
    console.log(usuarios.results[0].category)
    console.log(usuarios.results[0].incorrect_answers)
    console.log(usuarios.results[0].correct_answer)

    console.log(usuarios.response_code)

    let category = usuarios.results[0].category

    // Array.from(category).forEach(element => {
    //     let linha = document.createElement('p')

        
    // });



    let tabela = document.getElementById('tabela')

    let linha = document.createElement('p')
    linha.innerHTML = usuarios.results[0].correct_answer
    tabela.appendChild(linha)
    
    // console.log(
    //     usuarios.results[0].incorrect_answers[1]
    // )


    Array.from(usuarios.results[0].incorrect_answers).forEach((function(name,i){
        let linha = document.createElement('p')
        linha.innerHTML = name
        tabela.appendChild(linha)
        console.log(name)
    }))


}

main()