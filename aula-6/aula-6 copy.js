


function criarContadorNumerico(numeroAlunos){

    function somaUsuario(){
        numeroAlunos++
        return ${numeroAlunos - 1 }
    }
    return somaUsuario
}



const contador = criarContadorNumerico(1)

class Aluno{
    #id = ''
    #name = ''
    #dataNascimento = ''
    #avaliacao = []
    constructor(name, dataDeNiver ){

        this.#name = name

        this.#dataNascimento = dataDeNiver
    }

    addAvaliacao(avaliacao){
        this.#avaliacao.push(avaliacao)
    }

    get idade(){

        if(!this.#dataNascimento){
            throw new Error('Data de nascimento não encontrada')
        }
        const idadeQuebrada = this.#dataNascimento.split('/')
        const dateReverse = idadeQuebrada.reverse().join('-')

        const timestamp = new Date(dateReverse).getTime();
        const idade = (Date.now() - timestamp) / (1000 * 60 * 60 * 24 * 365) 
        return Math.floor(idade) 


    }
}
class Avaliacao{
    tipo = ''
    nota = 0
    observacao = ''
    constructor( tipo, nota ){
        this.tipo = tipo
        this.nota = nota
    }

}

const prova1 = new Avaliacao('prova', 8)
const test = new Avaliacao('test', 10)

const primeiroAluno = new Aluno("joao", '06/11/2004');
primeiroAluno.addAvaliacao(prova1)
primeiroAluno.addAvaliacao(test)
console.log(primeiroAluno)
console.log(primeiroAluno.idade)