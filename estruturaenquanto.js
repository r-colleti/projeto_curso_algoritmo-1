/*
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
   
   */

   var nome, idade, limite, contador

   function calcularBotao(){
          limite = prompt("Digite a quantidade de vezes que vai ser verificada a idade: ")
          contador = 0

          while(contador < limite){
                nome = prompt("Digite o nome da pessoa: ")
                idade = prompt("Digite a idade de " + nome + ": ")
                if (idade > 18) 
               alert(nome + " voc� � maior de idade!")
                else
                 alert(nome + " voc� � menor de idade!")
                contador++
          } 
   }