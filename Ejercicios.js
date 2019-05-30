// Imprime la fecha actual

var f= new Date ();
console.log(f.toString());
console.log(f.getDate());

// Obten el área...perimetro? de un triángulo. Pidele los 3 lados al usuario
let number1 = Number(window.prompt('Dame el primer número'));
let number2 = Number(window.prompt('Dame el segeundo número'));
let number3 = Number(window.prompt('Dame el tercer número'));

let PerimetroT = (number1 + number2 + number3);

alert(PerimetroT);

// Voltea una string dada por el usuario

var palabra = String(window.prompt('Inserte aquí una palabra'));
var str= palabra.split("")
alert(str.reverse(palabra).join(""));

// Voltea una string dada por el usuario sin usar el método de reverse

function invertir(cadena) {
	var cadena = String(window.prompt('ingresa cadena invertida'));
	var x = cadena.length;
	var cadenaInvertida = "";
	while (x>=0) {
		cadenaInvertida = cadenaInvertida + cadena.charAt(x);
		x--;
	}
	
    alert(cadenaInvertida);
    
    
}

// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
  C -> F: (C x 9/5) + 32
  F -> C: (F - 32) x 5/9
  Ejemplos:
  60C: 140F
  45C: 7.222222222222222C
*/

function convertir(){
    let celsval = document.getElementById ('celsius').value
    let fahrval = document.getElementById ('fahr').value
    if (!celsval) {
        console.log((fahrval - 32) * 5/9);
    } else {
        console.log(celsval*9./5. + 32);
    }
}

// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
  si prop es el nombre,
  a  = {};
  a.prop = true
*/

var objeto = {};
var valUsuario = String(window.prompt('Inserte aquí una palabra'));
Object.defineProperty(objeto, valUsuario, {
    value: true
    });

//ooooo tambien:

var objeto2 = {};
objeto2[String(window.prompt('Inserte aquí una palabra'))] = true


// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

function sumNegativo() {
    let num= Document.getElementById("negat") 
    if (Math.sign = -0 || -1)
}




// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
// Revisa si un número dado es múltiplo de 3 o de 7
// Revisa cuantas veces se repite un caracter dado en una cadena dada
// Revisa cuantas veces se repite un valor dado en un arreglo
// Divide un número de 3 dígitos en sus centenas, decenas y unidades
  // 103 -> 1 centena, 0 decenas, 3 unidades
// Regresa todos los caracteres que no sean letras de una cadena
// Haz una función que lanza un error con el mensaje dado por el usuario
// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack
// Suma los contenidos de un arreglo de números
// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original
// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/
// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
// Convierte un número binario dado por el usuario a decimal
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)
// Regresa la cantidad de valores que comparten dos arreglos diferentes
// Valida que una cadena dada no tenga espacios en blanco
// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
// Determina si una cadena dada por el usuario es un acrónimo
// Implementa una lista ligada
// Implementa una lista doblemente ligada
// Obten el Máximo común divisor de dos números dados