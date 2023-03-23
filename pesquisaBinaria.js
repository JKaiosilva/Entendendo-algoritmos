const pesquisaBinaria = (lista, item) => {
    var baixo = 0
    var alto = lista.length - 1

    while (baixo <= alto){
        var meio = Math.floor((baixo + alto) / 2)
        var chute = lista[meio]
        if(chute === item){
            return meio
        }if(chute > item) {
            alto = meio - 1
        }else{
            baixo = meio + 1
        }
    }
    return null
}

minhaLista = [1, 3, 5, 7, 9]

console.log(pesquisaBinaria(minhaLista, -1))