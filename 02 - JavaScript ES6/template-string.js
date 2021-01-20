// interpolacao de variaveis
// textos multilinhas

// uso da crase ` ... `


// agora uma variavel do tipo string pode receber um texto multilinhas sem precisar concatenar
 let a = `
    <p> teste.... teste..... teste.... teste ....</p>
    <p> teste.... teste..... teste.... teste ....</p>
    <p> teste.... teste..... teste.... teste ....</p>
    <p> teste.... teste..... teste.... teste ....</p>
    <p> teste.... teste..... teste.... teste ....</p>
    <p> teste.... teste..... teste.... teste ....</p>
`

// do contrario, sem a template string, seria

let a = '<p> teste.... teste..... teste.... teste ....</p>' +
'<p> teste.... teste..... teste.... teste ....</p>' +
'...'


// INTERPOLACAO DE VARIAVEIS

let a = 'teste'

console.log(` test test test ${a} `)