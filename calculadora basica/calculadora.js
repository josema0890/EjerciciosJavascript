function calcular() {
/* recupero los valores de resultado1 y resultado2 y los convierto a numerico con parseInt*/
	var resultado1 = parseInt(document.getElementById("valor1").value);
	var resultado2 = parseInt(document.getElementById("valor2").value);
/* recupero el valor del operador para realizar la operación indicada por el usuario */
	var operador = document.getElementById("operador").value;
/* muestro por consola los valores para debug */
	console.log("Valor de resultado1: " + resultado1);
	console.log("Valor de resultado2: " + resultado2);
	console.log("Valor de operador recuperado: " + operador);
	var resultado;
/* Si el valor recuperado es +, sumo los valores */	
	if (operador == "+") {
		resultado = resultado1 + resultado2;
/* Si el valor recuperado es -, resto los valores */
	} else if (operador == "-") {
		resultado = resultado1 - resultado2;
/* Si el valor recuperado es *, multiplico los valores */
	} else if (operador == "*") {
		resultado = resultado1 * resultado2;
/* Si el valor recuperado es /, divido los valores */
	} else if (operador == "/") {
		resultado = resultado1 / resultado2;
	}
/* muestro por consola el resultado para debug */
	console.log("valor del resultado: " + resultado)
	alert("El resultado es: " + resultado);
}