
function criarContadorNumerico(numeroAlunos){

    function somaUsuario(){
        numeroAlunos++
        return $={numeroAlunos }
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
prova1='8'
test ='10'
constructor(prova1,test){
    this.prova1
    this.test
}

}
class ObterMedia{
    prova1='8'
    test='10'
    media=''
   
    
   constructor(prova1,test,media){
   this.prova1=8
   this.test=10
   this.media=18/2

   
}
 
}



const media=new ObterMedia()

console.log(media)



const prova1 = new Avaliacao()
const test = new Avaliacao()

console.log(prova1)



const primeiroAluno = new Aluno("joao", '06/11/2004');
primeiroAluno.addAvaliacao(prova1)
primeiroAluno.addAvaliacao(test)



console.log(primeiroAluno)
console.log(primeiroAluno.idade)