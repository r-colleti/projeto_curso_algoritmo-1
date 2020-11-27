/*
var
   numero, fatorial, contador: inteiro

inicio
// Seção de Comandos
   escreva("Escreva o número para calcular o fatorial")
   leia(numero)
   fatorial := 1
   
   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva ("O fatorial de ", numero, " é: ", fatorial)
   */

    function calcularBotao(){
        var numero, fatorial, contador

        numero = prompt("digite numero")
        fatorial = 1
        for (contador = 1; contador <= numero; contador ++){
            fatorial = fatorial * contador
        }

        alert("O fatorial de " + numero + " é: " + fatorial)
    }
        

    