algoritmo "estruturarepita"
// Fun��o :
// Autor :
// Data : 24/11/2020
// Se��o de Declara��es 
var
   sairLoop: caractere
   valor1, valor2: real

inicio
// Se��o de Comandos
   repita
         escreva("Digite o primeiro valor")
         leia(valor1)
         escreva("Digite o segundo valor")
         leia(valor2)
         escreval("Resultado: ", valor1 + valor2)
         escreval("Deseja sair?")
         leia(sairLoop)
   ate sairLoop <> "N"
 
fimalgoritmo
