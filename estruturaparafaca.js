/*
var
   numero, fatorial, contador: inteiro

inicio
// Se��o de Comandos
   escreva("Escreva o n�mero para calcular o fatorial")
   leia(numero)
   fatorial := 1
   
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva ("O fatorial de ", numero, " �: ", fatorial)
   */

    function calcularBotao(){
        var numero, fatorial, contador

        numero = prompt("digite numero")
        fatorial = 1
        for (contador = 1; contador <= numero; contador ++){
            fatorial = fatorial * contador
        }

        alert("O fatorial de " + numero + " �: " + fatorial)
    }
        

    