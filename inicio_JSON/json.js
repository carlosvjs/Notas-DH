let pessoa = {
    nome:"vinicius",
    idade:"33",
    altura: 1.80
}

let json = JSON.stringify(pessoa);

console.log(json)

let listaCompras = ["leite", "cafe", "suco"];

let json2 = JSON.stringify(listaCompras);

console.log(json2)

let json3 = JSON.parse(json2)

console.log(json3)

