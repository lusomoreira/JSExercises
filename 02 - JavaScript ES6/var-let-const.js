// Diferenca entre var let e const


/**
 * na ordem de prioridade para utilização
 * 
 * const
 * let
 * var
 * 
 * 
 * const é usado para declarar um obj nao mutavel
 * ou seja, algo que nao tera seu valor reatribuido
 * 
 * let, pelo contrario, é usado para declarar obj e 
 * variaveis que podem ser reatribuidas
 * 
 * var, ja é uma utilização legada, que declara um obj/variable
 * global.. seu valor sera utilizado em todo o escopo
 * 
 */


 // 1 - exemplo de var
    function testeVar () {

        if (1<2) {
            var b = 'valor'
            console.log(b)
            b = 2
            console.log(b)
        }
    
        console.log(`valor de Var ${b}`)
    }
    
    testeVar()    

    // nesse caso o valor de var b, mesmo declarado dentro do 
    // escopo de If, ele sera acessivel de forma global, ou seja
    // fora do escopo de IF



// 2 -  exemplo de let

    function testeLet () {

        if (1<2) {
            let b = 'outrovalor'
            console.log(b)
            b = 28
            console.log(b)
        }

        console.log(`valor de let ${b}`)
    }

    testeLet()

    // Nesse caso o valor de let b só é acessivel dentro 
    // do escopo de IF

//3 - Exemplo de Const

function testeConst() {

    if (1<2) {
        const b = 'valor'
        console.log(b)
        b = 2
        // aqui acontece o erro, pois o valor de const nao pode ser reatribuido
        console.log(b)
    }

    console.log(`valor de Var ${b}`)
}

testeConst()
