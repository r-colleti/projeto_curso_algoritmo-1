/*
var
   valor1, valor2, resultado: real
   operacao: caractere

inicio
// Se��o de Comandos
   escreva("Digite o primeiro n�mero:")
   leia(valor1)
   
   escreva("Escolha a opera��o: + | - | / | *")
   leia(operacao)

   escreva("Digite o seundo n�mero:")
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
   
   escreva("O resultado �: ", resultado)
   */

   var valor1, valor2, resultado, operacao

   function calcularBotao(){
        valor1 = prompt("Digite o primeiro valor")
       operacao = prompt("Opera��o")
       valor2 = prompt("Digite o segunddo valor")

       if (operacao == "+"){
        resultado = parseInt(valor1) + parseInt(valor2)
       } else if (operacao == "-"){
              resultado = parseInt(valor1) - parseInt(valor2)
       } else if (operacao == "*"){
              resultado = parseInt(valor1) * parseInt(valor2)
       } else if (operacao == "/"){
              resultado = parseInt(valor1) / parseInt(valor2)
        }

        alert(resultado)
   }