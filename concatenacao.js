/*   
nome: caractere
   numero: real

inicio
// Se��o de Comandos
   escreval ("digite seu nome")
   leia(nome)
   escreval ("digite seu numero")
   leia(numero)
   
   escreval("Nome: ", nome, " | ", "N�mero: ", numero)
   */

   var nome, numero

   nome = prompt("Digite o seu Nome")
   nome = prompt("Digite o seu Numero")

   document.getElementById("paragrafo").innerText = "Nome: " + nome + " | " + "N�mero: " + numero