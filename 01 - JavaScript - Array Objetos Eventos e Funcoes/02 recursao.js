// Recursao
// Ato de executar a chamada de um método (function) dentro dele mesmo

// Exemplo clichê com fatorial 
// 3! = 3 * 2 * 1 fatorial de 3

    function fatorial (num) {
        if (num == 1) {
            return 1;
        } else {
            return num * fatorial(num -1)
        }
    }


    // CHMADA DA FUNCAO
    var resultado = fatorial(3)
    

    /* DEVE TER UM PONTO DE PARTIDA E UM PONTO DE PARADA   
        Baseado no seu parametro, caso contrario entrará em loop
    */
