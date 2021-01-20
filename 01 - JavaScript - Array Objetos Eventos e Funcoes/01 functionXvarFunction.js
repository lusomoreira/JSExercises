// Diferenca entre function e var function

// funcao


    // na funcao, a chamada pode acontecer antes ou depois do bloco de codigo
    // nameFunction('eu', 'nos')

    function nameFunction (parameters1, parameters2) {
        console.log('Exibe valores dos parametros: ' + parameters1 + '' + parameters2)
    }

    // chamada da funcao?
    nameFunction('eu', 'nos')

// var Function


    const nameFunction = function anyNameForIdentifyFunction (parameters1, parameters2) {
        console.log('Exibe valores dos parametros: ' + parameters1 + '' + parameters2)
    }

    //Diferente da Function, a chamada da mesma so pode acontecer apos o bloco de codigos,
    // pois pra ela existir, precisa, previamente, ser alocada na memoria.

    nameFunction('eu', 'nos');


// Parametro Default

    // No javaScript atual, permite-se utilizacao de parametro default
    function nameFunction (param = 'Meu Nome') {
        console.log('Exibe valores dos parametros: ' + param)
    }

    nameFunction()
    // Caso na chamada da funcao nao seja definido um parametro, entao ele usara o parametro
    // default, o resultado seria 'Exibe valores dos parametros: Meu Nome'

    nameFunction('Algum Nome')
    // ou entao se pode passar o parametro na chamada da funcao,
    // nesse caso o default é sobrescrito e o resultado é 'Exibe valores dos parametros: Algum Nome'
    