/*   
nome: caractere
   numero: real

inicio
// Seção de Comandos
   escreval ("digite seu nome")
   leia(nome)
   escreval ("digite seu numero")
   leia(numero)
   
   escreval("Nome: ", nome, " | ", "Número: ", numero)
   */

   var nome, numero

   nome = prompt("Digite o seu Nome")
   nome = prompt("Digite o seu Numero")

   document.getElementById("paragrafo").innerText = "Nome: " + nome + " | " + "Número: " + numero