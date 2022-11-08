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
    name = ''
    constructor(aluno){
        this.#id = contador()
        this.name = aluno
    }
}

const primeiroAluno = new Aluno("Primeiro Aluno");
const segundoAluno = new Aluno("Segundo Aluno");


console.log(primeiroAluno)
console.log(segundoAluno)