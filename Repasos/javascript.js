/* 
OPERADORES

OPERADORES LOGICOS

primero para entender a que nos referimos con esto, debemos entender que esta logica
Se basa en el algebra de Bool.
Por ahora, pensemos que los datos o expresiones pueden tener 2 estados: VERDADERO(true) o FALSO(false)

101011101110110101
(1 es verdadero, 0 es falso)

AND OR y NOT

Si mañana no llueve y no hace frio jugamos al futbol
Mañana no llueve necesita ser VERDADERO y no hace frio tambien para jugar al futbol

el operador AND && devuelve verdadero cuando LOS DOS valores que opera, son verdaderos
true && true = true
false && true = false
true && false = false
false && false = false

el operador OR || devuelve verdadero cuando CUALQUIERA de los valores que opera, es verdadero
true || true = true
true || false = true
false || true = true
false || false = false

el operador NOT ! invierte el valor de veracidad de el valor que opera
!true = false
!false = true

*/

/* 
Operadores de comparacion (o comparativos)

== === > < >= <= !==

La igualdad devuelve true cuando el valor del dato es el mismo
"a" == "a" = true
2 == 2 = true
"2" == 2 = true
"a" == 13 = false

La igualdad estricta devuelve true cuando el valor y el tipo del dato es el mismo
"a" === "a" = true
2 === "2" = false
2 === 2 = true
"2" === "2" = true

El operador mayor que, devuelve true cuando el valor de la izquierda, es mayor que el de la derecha
4 > 3 = true
2 > 0 = true
190000 > 3200 = true
0 > 15 = false

El operador menor que, devuelve true cuando el valor de la izquierda es menor al de la derecha
2 < 3 = true
1 < 100 = true
0 < -1 = false
30 < 29 = false

el operador mayor igual que, devuelve true cuando el valor de la izquierda es mayor o igual al de la derecha
20 >= 19 = true
20 >= 30 = false
20 >= 20 = true

el operador menor igual que devuelve true cuando el valor de la izquierda es menor o igual al de la derecha
20 <= 19 = false
20 <= 30 = true
20 <= 20 = true

El operador desigual devuelve true cuando el valor de la izquierda no es el mismo que el de la derecha
20 !== 19 = true
20 !== 30 = true
20 !== 20 = false

*/

/* 
Operadores matematicos
+ - * / %

Operador de suma, suma un valor al otro
2 + 2 = 4
3 + 5 = 8
"3" + 3 = "33"
"a" + "hola" = "ahola"

Operador de resta, resta un valor al otro
2 - 2 = 0
3 - 1 = 2
20 - 1 = 19

Operador de modulo, devuelve el resto de la division de un valor por el otro
20 % 3 = 2
9 % 2 = 1
13 % 5 = 3

*/
//    
// false && true && false && true && false
// true || false || false || true || false


/* 
Tipos de dato:

tipo number ej: 3
tipo string ej: "hola"
tipo bool ej: true,

tipo array ej: [0, 1, 2, 3, 4, 5, 6]
tipo objeto ej: {hola: "Hola", chau: "Milanesa"}

tipo undefined
tipo null

tipo function

*/

/* 
FUNCIONES

Es un fragmento de codigo, el cual puede (o no) recibir propiedades, y devuelve un valor

Patron Entrada-Salida

Es como una flecha
propiedaes --------> retorno

*/

//Tenemos 2 formas de definir o declarar una funcion

//La forma "clasica"

function funcionClasica(numero1, numero2){
    return numero1 + numero2
}

//La forma mas "moderna"

const funcionFlecha = (numero1, numero2)=>{
    return numero1 + numero2
}


const funcionFlechaDos = (numero1, numero2) => numero1 + numero2

//Estructuras de control o Condicionales

if(2 + 2 === 4){
    console.log("hola")
}

if(2 < 1){
    console.log("NO")
} else {
    console.log("SI")
}

if(2 > 1){
    console.log("NO")
} else if(3 > 2){
    console.log("NO")
} else {
    console.log("SI")
}

/* 
Que es un array?

Un array es una cadena de datos, los cuales cada uno de estos datos, tienen su posicion absoluta en la cadena

INDICES

*/


let array1 = [0, 1, 2, 3, 4, 5, 6]

// Como accedo a un dato de este array?
//va el nombre del array, seguido de corchetes [] en cuyo interior va el numero de indice al cual queremos acceder
array1[3]

/* 
Que es un objeto?

Un objeto es una coleccion de datos, que se organizan en TUPLAS

Que es una tupla? Es un par de clave-valor

*/

let objeto1 = {
    nombre: "Santiago",
    apellido: "Riveros",
    edad: 31,
    blabla: "",
    arraySinValor: [],
    objetoSinValor: {}
}

//Como accedo a un valor del objeto?

//ponemos el nombre del objeto, seguido de un punto . (SIN ESPACIOS DE POR MEDIO, POR FAVOR) y seguido de la clave
objeto1.nombre