/*
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

   */

   var nome, nota1, nota2, passou;

   passou = false;

   nome = prompt("Digite o nome do aluno:")
   nota1 = prompt("Digite a nota 1: ")
   nota2 = prompt("Digite a nota 2: ")

   //pareseInt transforma em n�mero inteiro
   media = (parseInt(nota1) + parseInt(nota2)) / 2
   
   if(media >= 5){
        passou = true;
   }

      if(passou && (media >= 70 && media <= 90)){
        alert("O aluno " + nome + " tirou " + media + "." + " E foi aprovado")
   }
   else{
        alert("O aluno " + nome + " tirou " + media + "." + " E foi reprovado")
   }