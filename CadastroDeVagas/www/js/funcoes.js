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
    let linhaNova = `<tr><td>${nome}</td>`
    linhaNova += `<td>${salario}</td>`
    linhaNova += `<td>${descricao}</td>`
    linhaNova += `<td>${requisitos}</td>`
    linhaNova += `<td>${beneficios}</td>`
    linhaNova += `<td>${empresa}</td>`
    linhaNova += `<td>${contato}</td>`

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
navigator.vibrate(3000)

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