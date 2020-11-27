algoritmo "estruturaescolha"
// Função :
// Autor :
// Data : 23/11/2020
// Seção de Declarações 
var
   valor1, valor2, resultado: real
   operacao: caractere

inicio
// Seção de Comandos
   escreva("Digite o primeiro número:")
   leia(valor1)

   escreva("Escolha a operação: + | - | / | *")
   leia(operacao)

   escreva("Digite o seundo número:")
   leia(valor2)
   
   escolha operacao
           caso "+"
           resultado := valor1 + valor2
           caso "-"
           resultado := valor1 - valor2
           caso "*"
           resultado := valor1 * valor2
           caso "/"
           resultado := valor1 / valor2
   fimescolha

   escreva("O resultado é: ", resultado)
   
fimalgoritmo
