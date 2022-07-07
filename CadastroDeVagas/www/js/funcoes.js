function incluirUmaLinha(){
    //pegar todos os valores
    let nome = document.getElementById("nome").value
    let salario = document.getElementById("salario").value
    let descricao = document.getElementById("descricao").value
    let requisitos = document.getElementById("requisitos").value
    let beneficios = document.getElementById("beneficios").value
    let empresa = document.getElementById("empresa").value
    let contato = document.getElementById("contato").value

    //montar linha da tabela
   /* let linhaNova = `<tr><td>${nome}</td>`
    linhaNova += `<td>${salario}</td>`
    linhaNova += `<td>${descricao}</td>`
    linhaNova += `<td>${requisitos}</td>`
    linhaNova += `<td>${beneficios}</td>`
    linhaNova += `<td>${empresa}</td>`
    linhaNova += `<td>${contato}</td>`
*/

let linhaNova = `<div class="row"><div class="col s12 m6"><div class="z-depth-4 left-align Heading h3 card-panel hoverable card darken-1"><div class="card-content white-text"><p class="card-title" style="font-weight:800;">${nome}</p><p style="">Faixa Salarial:<span style="font-weight:100;">${salario}</span><br>Descrição:<span style="font-weight:100;"> ${descricao}<span><br>Requisítos: <span style="font-weight:100;"> ${requisitos} </span><br>Benefícios: <span style="font-weight:100;"> ${beneficios}<span> <br>Sobre a Empresa: <span style="font-weight:100;"> ${empresa}<span> </p></div><div class="card-action"><a href="#" style="font-weight:300; font-style:italic;">${contato}</a></div></div></div></div>`
    document.getElementById("ListarVagas").innerHTML += linhaNova

}

function limpar(){
    document.getElementById("nome").value = ""
    document.getElementById("salario").value = ""
    document.getElementById("descricao").value = ""
    document.getElementById("requisitos").value = ""
    document.getElementById("beneficios").value = ""
    document.getElementById("empresa").value = ""
    document.getElementById("contato").value = ""
}


let btSalvar = document.getElementById("salvar")
btSalvar.addEventListener("click", function(){
    incluirUmaLinha()
    limpar()
    salvar()
})

function salvar(){
localStorage.ListarVagas = document.getElementById("ListarVagas").innerHTML


}

function excluirTudo(){
localStorage.clear()
document.getElementById("ListarVagas").innerHTML = ""
}

btLimpar = document.getElementById("limpar")
btLimpar.addEventListener("click", function(){
    excluirTudo()
})

function excluirUmaLinha(botao){
    botao.parentNode.parentNode.remove()
    salvar()

}


function carregar(){
    if(localStorage.ListarVagas){
        document.getElementById("ListarVagas").innerHTML = 
        localStorage.ListarVagas
    }
}

window.addEventListener("load", function(){
    carregar()
})