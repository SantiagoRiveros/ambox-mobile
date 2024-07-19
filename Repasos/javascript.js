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

function funcionClasica(numero1, numero2) {
  return numero1 + numero2;
}

//La forma mas "moderna"

const funcionFlecha = (numero1, numero2) => {
  return numero1 + numero2;
};

const funcionFlechaDos = (numero1, numero2) => numero1 + numero2;

//Estructuras de control o Condicionales

if (2 + 2 === 4) {
  console.log("hola");
}

if (2 < 1) {
  console.log("NO");
} else {
  console.log("SI");
}

if (2 > 1) {
  console.log("NO");
} else if (3 > 2) {
  console.log("NO");
} else {
  console.log("SI");
}

/* 
Que es un array?

Un array es una cadena de datos, los cuales cada uno de estos datos, tienen su posicion absoluta en la cadena

INDICES

*/

let array1 = [0, 1, 2, 3, 4, 5, 6];

// Como accedo a un dato de este array?
//va el nombre del array, seguido de corchetes [] en cuyo interior va el numero de indice al cual queremos acceder
array1[3];

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
  objetoSinValor: {},
};

//Como accedo a un valor del objeto?

//ponemos el nombre del objeto, seguido de un punto . (SIN ESPACIOS DE POR MEDIO, POR FAVOR) y seguido de la clave
objeto1.nombre;

/* Arrays avanzados
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Metodos a ver: map() filter() reduce() forEach() find()

*/

/* Metodo Map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */
// el metodo map() crea un nuevo array poblado con los resultados de llamar una funcion en cada uno de los elementos
//de un array

const numbers = [1, 2, 3, 4, 5];
const numbersDouble = numbers.map((number) => number * 2);
console.log(numbersDouble); // [2, 4, 6, 8, 10]

// Metodo Filter https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// El metodo filter crea una copia de una porcion de un array, filtrando los elementos que pasen el filtro
// de la funcion provista

const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // [2, 4]

// Metodo Reduce https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// Basicamente sin entrar en lenguaje muy tecnico, el metodo reduce, recorre un array sumando los valores
// De todos sus indices, recibe como propiedad un acumulador, un valor actual y un valor inicial

const initialValue = 0;
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
console.log(sum); // 15

// Metodo forEach https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// El metodo forEach, ejecuta una funcion provista por cada elemento de un array

numbers.forEach((number, index) => {
  console.log("El numero en el indice " + index + " es el numero " + number);
});
// El metodo en el indice 0 es el numero 1
// El metodo en el indice 1 es el numero 2
// El metodo en el indice 2 es el numero 3
// El metodo en el indice 3 es el numero 4
// El metodo en el indice 4 es el numero 5

// Metodo find https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// El metodo find devuelve el primer elemento que satisface la condicion de la funcion provista

const foundNumberGreaterThanThree = numbers.find((number) => number > 3);
console.log(foundNumberGreaterThanThree); // 4

// MEtodos de objeto
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// keys() values() entries()

// metodo keys https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// El metodo keys devuelve un array con las claves de un objeto

let objetoA = {
  a: "hola",
  b: "fkdoakfad",
  c: 312,
};

console.log(Object.keys(objetoA)); // ["a", "b", "c"]

// metodo values https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
// El metodo values es similar al keys, pero este devuelve los valores

console.log(Object.values(objetoA)); // ["hola", "fkdoakfad", 312]

// metodo entries https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// El metodo Entries devuelve un array, en cuyo cada indice es otro array, cuyo indice 0 es la clave, y el 1, el valor

console.log(Object.entries(objetoA)); // [["a", "hola"], ["b", "fkdoakfad"], ["c", 312]]

let userDatabase = [
  {
    firstname: "John",
    lastname: "Smith",
    email: "john.smith1@example.com",
    country: "USA",
    age: 25,
  },
  {
    firstname: "Jane",
    lastname: "Johnson",
    email: "jane.johnson2@example.com",
    country: "Canada",
    age: 30,
  },
  {
    firstname: "Michael",
    lastname: "Williams",
    email: "michael.williams3@example.com",
    country: "UK",
    age: 35,
  },
  {
    firstname: "Sarah",
    lastname: "Brown",
    email: "sarah.brown4@example.com",
    country: "Australia",
    age: 40,
  },
  {
    firstname: "David",
    lastname: "Jones",
    email: "david.jones5@example.com",
    country: "Germany",
    age: 45,
  },
  {
    firstname: "Emma",
    lastname: "Garcia",
    email: "emma.garcia6@example.com",
    country: "France",
    age: 50,
  },
  {
    firstname: "Daniel",
    lastname: "Miller",
    email: "daniel.miller7@example.com",
    country: "Spain",
    age: 55,
  },
  {
    firstname: "Olivia",
    lastname: "Davis",
    email: "olivia.davis8@example.com",
    country: "Italy",
    age: 60,
  },
  {
    firstname: "James",
    lastname: "Martinez",
    email: "james.martinez9@example.com",
    country: "Brazil",
    age: 65,
  },
  {
    firstname: "Sophia",
    lastname: "Hernandez",
    email: "sophia.hernandez10@example.com",
    country: "Argentina",
    age: 70,
  },
];

//Imaginemos que queremos crear una funcion, a la cual yo le paso un email, y me borra al usuario.

// Ingresa un email como prop
const deleteUser = (email) => {
  //en newUserDatabase se van a guardar TODOS los usuarios cuyo email sea desigual al email que entra como prop
  let newUserDataBase = userDatabase.filter((user) => user.email !== email);
  //devuelve el nuevo array
  return newUserDataBase;
};

console.log(deleteUser("james.martinez9@example.com"));

// Esto, recibe como primer parametro un email, como segundo parametro
// un objeto con claves firstname, lastname, age y country
const updateUser = (email, { firstname, lastname, age, country }) => {
  //En esta linea usamos el metodo findIndex, que lo que hace es devolver el indice
  // Del primer elemento que encuentra el cual satisface la condicion de la funcion provista
  let userIndex = userDatabase.findIndex((user) => user.email === email);
  let newUserDatabase = userDatabase;
  newUserDatabase[userIndex] = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    country: country,
    age: age,
  };
  return newUserDatabase;
};

console.log(
  updateUser("james.martinez9@example.com", {
    firstname: "Pepe",
    lastname: "Pompin",
    age: "Eterno",
    country: "Argentina",
  })
);
