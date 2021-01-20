

// uma funcao convencional recebe a seguinte estrutura
let array = [1, 2, 3, 4, 5, 6]

console.table(array)

let array2 = array.map(function (value, index){
    return value * 10
})




//array function 
// (PARAMETRO) => OPERACAO ou  sem parametro: () => OPERACAO
// com mais parametro (parametro1, parametro2, parametro3) => OPERACAO

// sintaxe implicita, nao necessita do return
// o primeiro parametro, se for unico, nao precisa de ()
let array3  = array.map(value => value*10)


// sintaxe explicita, necessita do *return* e pode ser escrita em varias linhas
let array4 = array.map((value) => {
    /*...... restante da operacao...*/
    return value*10
})


// demonstracao de como fica mais clean o codigo em funcoes como setTimeout

// setTimeout(funcao(){
    // .... 
//}, tempo_em_milesegundos)

// no modo antig

setTimeout(function() {
    console.log('teste')
}, 2000)

//modo arrow function
setTimeout(() => console.log('teste'), 2000)






