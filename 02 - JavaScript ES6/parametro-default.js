// explicar parametro default


// parametro default foi introduzido na ES6 e soluciona prolemas
// por exemplo de manutencao de codigos... Imagina que depois do 
// software pronto seja necessario introduzir mais parametros em uma funcao
// e que essa funcao seja utilizada em varias partes do software.

// a solucao é como aprezentado abaixo

// obs: O parametro default nunca deve ser o primeiro parametro,
// pois o primeiro parametro sera o parametro obrigatorio
function nameFunctio (param1, param2 = 'algumValor') {
    if(param2 === 'algumValor') {
        /* ... executa o bloco com apenas o primeiro parametro */
        console.log(param1)
    }

    /* executa a logica com os dois parametros */
    console.log(param1, param2)
} 