algoritmo "estruturaenquanto"
// Fun��o :
// Autor :
// Data : 24/11/2020
// Se��o de Declara��es 
var
   nome: caractere
   idade, limite, contador: inteiro
   
inicio
// Se��o de Comandos
   escreva("Digite a quantidade de vezes que vai ser verificada a idade: ")
   leia(limite)
   
   contador := 0
   
   enquanto contador < limite faca
            escreva("Digite o nome da pessoa: ")
            leia(nome)
            escreva("Digite a idade de ", nome, ": ")
            leia(idade)
            se idade > 18 entao
               escreval(nome, " voc� � maior de idade!")
            senao
                 escreval(nome, " voc� � menor de idade!")
            fimse
            contador := contador + 1
   fimenquanto
   
fimalgoritmo
