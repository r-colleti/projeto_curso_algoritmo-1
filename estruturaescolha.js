/*
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
   */

   var valor1, valor2, resultado, operacao

   function calcularBotao(){
        valor1 = prompt("Digite o primeiro valor")
       operacao = prompt("Operação")
       valor2 = prompt("Digite o segunddo valor")

       switch (operacao){
              case "+":
              resultado = parseInt(valor1) + parseInt(valor2)
              break;
              case "-":
              resultado = parseInt(valor1) - parseInt(valor2)
              break;
              case "*":
              resultado = parseInt(valor1) * parseInt(valor2)
              break;
              case "/":
              resultado = parseInt(valor1) / parseInt(valor2)
              break;
       }
        alert(resultado)
   }