algoritmo "tipos de opera��es logicas"
// Fun��o :
// Autor :
// Data : 18/11/2020
// Se��o de Declara��es 
var
   nota1, nota2, media: real
   nome: caractere
   passou: logico


inicio
// Se��o de Comandos
   passou := falso
   escreval ("Digite o nome do aluno: ")
   Leia(nome)
   escreval ("Digite a nota 1: ")
   Leia(nota1)
   escreval ("Digite a nota 2: ")
   Leia(nota2)

   media <- (nota1 + nota2) / 2

   se media >= 5 entao
      passou := verdadeiro
   fimse
   
   se (passou) && (media >=50 || media <= 70) entao
      escreval ("O aluno ", nome, " tirou ", media, ".", " E foi aprovado")
   senao
        escreval ("O aluno ", nome, " tirou ", media, ".", " E foi reprovado")
   fimse

fimalgoritmo
