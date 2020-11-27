algoritmo "estruturas de controle"
// Função :
// Autor :
// Data : 18/11/2020
// Seção de Declarações 
var
   nota1, nota2, media: real
   nome: caractere
   

inicio
// Seção de Comandos
   escreval ("Digite o nome do aluno: ")
   Leia(nome)
   escreval ("Digite a nota 1: ")
   Leia(nota1)
   escreval ("Digite a nota 2: ")
   Leia(nota2)
   
   media <- (nota1 + nota2) / 2
   
   se media >= 5 entao
      escreval ("O aluno ", nome, " tirou ", media, ".", " E foi aprovado")
   senao
        escreval ("O aluno ", nome, " tirou ", media, ".", " E foi reprovado")
   fimse

 
fimalgoritmo
