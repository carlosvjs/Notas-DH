// Dentro do arquivo utils.js, criar uma função que recebe como parâmetro um array de objetos. A função percorre o array de objetos e identifica a pessoa que é menor de 18 anos. Caso encontrar, retornar o nome da pessoa (utilizar o “break” para sair do loop).

const pessoas = require('./pessoas');

/*function validacao (pessoas) {
    for (let i = 0; pessoas.lenght; i++) {
        if (pessoas[idade] < 18)
        return (pessoas[idade]);
        break
    }
}

console.log(validacao)

module.exports = validacao;*/

//Código Amanda

const validacao = function maior(array){
    for (let i = 0; i < array.length; i++) {
        if(array.idade[i] > 18){
            return array.nome[i]
            break

        }
        
    }
}
console.log(validacao)
module.exports = validacao
