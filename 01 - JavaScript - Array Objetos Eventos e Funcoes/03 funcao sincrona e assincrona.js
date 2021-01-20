
/**
 * funcoes sincronas sao as funcoes convencionais
 * que acontecem de forma sequencial ou seja,
 * espera o resultado para executar um proximo trecho de codigo
 * 
 * 
 * 
 * 
 * Funcoes assincronas sao funcoes que permintem ao dev
 * executa-la porem somente apost todo seu processamento o resultado
 * é enviado como retorno. Ñ exite uma ordem sincronizada e é baseada
 * em eventos
 */


 // exempĺo de assincronismo 

 setTimeout (() => {
     console.log('retorna algo apos 2 seg')
 }, 2000)

 // suposto trecho de codigo 01

 // suposto trecho de codigo 02

 // suposto trecho de codigo 03

// neste caso, os trechos de codigo poderao acontecer antes mesmo
// do callback da setTimeout retornar o resultado
 
