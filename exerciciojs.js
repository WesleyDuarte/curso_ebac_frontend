let alunos = [
    {nome:'wesley',nota:4},
    {nome:'eduardo',nota:6},
    {nome:'karol',nota:7},
];

function retornaMaiorQ6(){
    let aprovados = alunos.filter((aluno)=> aluno.nota >= 6)
    return aprovados;
}


console.log(retornaMaiorQ6())