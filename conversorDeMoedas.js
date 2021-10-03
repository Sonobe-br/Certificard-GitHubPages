function Converter() {
var valorElemento = document.getElementById('valor');
var valor = valorElemento.value;
var valorEmRealNumerico = parseInt(valor); 
//console.log(valorEmDolarNumerico);
    
var valorEmReal = valorEmRealNumerico.toFixed(2) * 5.38; /* Cotação do dia 2 de outubro 2021 */
console.log(valorEmReal);
    
var elementoValorConvertido = document.getElementById('valorConvertido');
var valorConvertido = 'The result in Real is R$' + valorEmReal;
elementoValorConvertido.innerHTML = valorConvertido;   
}

//convertendo real para dólar
function Convertido() {
let elementoValor = document.getElementById('valores');
let valores = elementoValor.value;
let valorEmDolarNumerico = parseInt(valores); 
let valorEmDolar = valorEmDolarNumerico.toFixed(2) / 5.00; /* Cotação do dia 2 de outubro 2021 */
console.log(valorEmDolar);
    
let elementoMoedaConvertida = document.getElementById('trocandoValores');
let trocandoValores = 'The result in Dollar is US$' + valorEmDolar;
elementoMoedaConvertida.innerHTML = trocandoValores;   
}

//convertendo libra para real
function ConvertidoGbp() {
let elementoValor3 = document.getElementById('valorGbp');
let valorGbp = elementoValor3.value;
let valorEmEsterlinaNumerico = parseInt(valorGbp); 
        
let valorEmLibra = valorEmEsterlinaNumerico.toFixed(2) * 7.27; /* Cotação do dia 3 de outubro 2021 */
console.log(valorEmLibra);
    
let elementoMoedaConvertida3 = document.getElementById('trocandoValores3');
let trocandoValores3 = 'The result in Real is R$' + valorEmLibra;
elementoMoedaConvertida3.innerHTML = trocandoValores3;   
}

//convertendo euro para real
function ConvertidoEmEuro() {
let elementoValor4 = document.getElementById('valorEuro');
let valorEuro = elementoValor4.value;
let valorEmEuroNumerico = parseInt(valorEuro); 
        
let valorEmEuro = valorEmEuroNumerico.toFixed(2) * 6.22; /* Cotação do dia 3 de outubro 2021 */
console.log(valorEmEuro);
    
let elementoMoedaConvertida4 = document.getElementById('trocandoValores4');
let trocandoValores4 = 'The result in Real is R$' + valorEmEuro;
elementoMoedaConvertida4.innerHTML = trocandoValores4;   
}
