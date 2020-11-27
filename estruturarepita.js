/*
var
   sairLoop: caractere
   valor1, valor2: real

inicio
// Seção de Comandos
   repita
         escreva("Digite o primeiro valor")
         leia(valor1)
         escreva("Digite o segundo valor")
         leia(valor2)
         escreval("Resultado: ", valor1 + valor2)
         escreval("Deseja sair?")
         leia(sairLoop)
   ate sairLoop <> "N"
   */

   function calcularBotao(){
          var sairLoop, valor1, valor2

          do{
            valor1 = prompt("Digite o primeiro valor")
         valor2 = prompt("Digite o segundo valor")
         alert("Resultado: " + (parseInt(valor1) + parseInt(valor2))
         sairLoop = prompt("Deseja sair?")
          } while(sairLoop != "N")
   }