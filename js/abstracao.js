class Avaliacao{
    tipo = ''
    nota = 0
    observacao = ''

    constructor( tipo ){
        this.tipo = tipo
    }
}

class Aluno{
    nome = ''
    endereco = ''
    data_nascimento = ''
    email = ''
    telefone = ''

    constructor( nome ){
        this.nome = nome

    }
}


let aluno1 = new Aluno('charle')
let avaliacao1 = new Avaliacao('boa')

console.log(avaliacao1);
console.log(aluno1);