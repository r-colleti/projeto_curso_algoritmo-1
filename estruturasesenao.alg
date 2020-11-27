algoritmo "Estrutura se senao"
// Função :
// Autor :
// Data : 20/11/2020
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
   
   SE operacao = "+" entao
      resultado := valor1 + valor2
   senao
        SE operacao = "-" entao
           resultado := valor1 - valor2
         senao
              SE operacao = "/" entao
                 resultado := valor1 / valor2
            senao
                 SE operacao = "*" entao
                    resultado := valor1 * valor2
                 fimse
            fimse
         fimse
   fimse
   
   escreva("O resultado é: ", resultado)
   
fimalgoritmo
