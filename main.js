console.log('Imprimir los números del 21 al 34 en la consola');

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,34]
for (let index = 0; index < numbers.length; index++) {
 if (index >= 21 && index <= 34) {
    console.log(index);
 }
}
console.log('Otra forma');
for (let index = 21; index <= 34 ; index++) {
    console.log(index)
    
}


console.log('Imprimir los números del 1 al 10 en la consola, pero solo los pares.');

for (const number in numbers) {
    if (number%2 == 0 && number <= 10) {
       console.log(number)

    }
}


console.log('Imprimir los números del 1 al 10 en la consola, pero solo los impares.');

for (const number in numbers) {
    if (number%2 == 1 && number <= 10) {
       console.log(number)

    }
}


console.log("Dado un array de números, imprimir en la consola solo los números pares.");

const arrayNum = [23, 45, 211, 90, 3, 14]
for (let index = 0; index < arrayNum.length; index++) {
    if (arrayNum[index]%2 == 0) {
        console.log(arrayNum[index]);
    }
}



console.log("Dado un array de números, imprimir en la consola solo los números mayores a 5.");

for (const number in arrayNum) {
    if (arrayNum[number]>5) {
        console.log(arrayNum[number]);;

    }
}


console.log("Dada un array de nombres, imprimir solo los nombres que empiezan con la letra 'A'")

const nombres = ["Alexa", "Mapi", "Aitana", "Irene",]

for (const nombresA in nombres) {
if (nombres[nombresA][0] == 'A') {
    console.log (nombres[nombresA])
}
}



console.log('Dada un array de números, encontrar el número más grande y el número más pequeño.');
const arrNum = [23, 45, 211, 90, 3, 14]
let numMayor = arrayNum[0]
let numMenor = arrayNum[0]

for (let index = 0; index < arrNum.length; index++) {
    if (arrNum[index] < numMenor) {
        numMenor = arrNum[index]};
        if (arrNum[index] > numMayor) {
            numMayor = arrNum[index];
        }
}
console.log(numMenor)
console.log(numMayor)




console.log('Haz un bucle que muestre por consola los números del 4 al 9 inclusive. Utilizad el bucle for.');

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] >= 4 && numbers[index] <= 9){
        console.log(numbers[index]);
    }
    
}

console.log('Haz un bucle que muestre por consola los impares del 3 al 17 inclusive. Utilizad el bucle for.');

for (let index = 0; index < numbers.length; index++) {
if(numbers[index]%2 == 1) {
    if (numbers[index]>=3 && numbers[index]<=17) {
        console.log(numbers[index]);
    }
}
}

console.log('Crear variable contarHasta10 con valor 0 e incrementar su valor con un bucle hasta que se verifique que contarHasta10 === 10');

let contarHasta10 = 0

while (contarHasta10 !== 10) {
    console.log(contarHasta10)
    contarHasta10++;  
}
console.log(contarHasta10);



console.log('Crea una variable arrayBucle tipo array vacía, rellénala con números del 4 al 18 utilizando un bucle');

const arrayBucle = []

for (let index = 4; index < 18; index++) {
    arrayBucle.push(index)
}
console.log(arrayBucle)



console.log('Recorre la variable creada anteriormente arrayBucle ,suma todos sus elementos y guárdalos en una variable de nombre resultado');
let resultado = 0
for (let index = 0; index < arrayBucle.length; index++) {
  resultado = resultado + arrayBucle[index];

}
console.log(resultado)

console.log("Dado el siguiente array, recorrelo utilizando el bucle 'for of' y muestra por consola todos sus elementos, después recórrelo utilizando el bucle 'for in' mostrando también por consola todos sus elementos");
const sofia = ['Con', 'sofia', 'aprendiendo', 'bucles']


console.log('"For of"');

for (const valores of sofia) {
    console.log(valores)
}
console.log('"For in"');
for (const valores in sofia) {
    console.log(sofia[valores])
    }

    console.log('Crea un bucle utilizando “while” que itere 20 veces y muestre por consola “Patata” cada vez que el número de la iteración sea múltiplo de 3');

let num = 1
while ( num <=20) {
    if (num % 3 === 0) {
        console.log('Patata')
    }
    num++
}
console.log('Sumar los números del 1 al 10 y mostrar el resultado en la consola.');
let iteracion = 0 
let numIteracion = 0
while (iteracion <=10){
    numIteracion = numIteracion + iteracion;
    console.log(numIteracion)
    iteracion++ 
}

console.log('Dado un array de números, imprimir en la consola la suma de todos los números.');
let sumaArr = 0;
for (let index = 0; index < arrNum.length; index++) {
    sumaArr = sumaArr + arrNum[index];
    console.log(sumaArr);
    
}

console.log('Imprimir los números del 1 al 20 en la consola, pero para los múltiplos de 3 imprimir "Fizz", para los múltiplos de 5 imprimir "Buzz" y para los múltiplos de ambos imprimir "FizzBuzz".');


for (let index = 1; index <= 20; index++){
    if (index%3 === 0 && index%5 === 0){
    console.log('FizzBuzz');}
else if (index%3 === 0){
    console.log('Fizz');}
else if (index%5 === 0){
    console.log('Buzz');
}
else {
    console.log(index)
}
}

console.log('Otro modo de bucle, con el switch');

for (let index = 1; index <= 20; index++) {
    switch (true) {
      case (index % 3 === 0 && index % 5 === 0):
        console.log('FizzBuzz');
        break;
      case (index % 3 === 0):
        console.log('Fizz');
        break;
      case (index % 5 === 0):
        console.log('Buzz');
        break;
      default:
        console.log(index);
    }
  }

  // Utiliza la siguiente array para resolver los próximos ejercicios: 

  let gente = [
    {
      nombre: "Jamiro",
      edad: 45,
    },
    {
      nombre: "Juan",
      edad: 35,
    },
    {
      nombre: "Paco",
      edad: 34,
    },
    {
      nombre: "Pepe",
      edad: 14,
    },
    {
      nombre: "Pilar",
      edad: 24,
    },
    {
      nombre: "Laura",
      edad: 24,
    },
    {
      nombre: "Jenny",
      edad: 10,
    },
  ];

  console.log('Crea una array con la gente que su nombre tiene 4 letras, sin utilizar el método filter de los arrays y muéstralo por consola.');

  let nameFourLetters = []

  for (let index = 0; index < gente.length; index++) { if (gente[index].nombre.length === 4) {
    nameFourLetters.push(gente[index].nombre);}
  }
    console.log(nameFourLetters)

   console.log('Crea una array con la gente que su nombre empieza por J y sean menores de 40 años, sin utilizar el método filter de los arrays y muéstralo por consola. '); 

   let nameJFourty = []

   for (let index = 0; index < gente.length; index++) { if (gente[index].nombre[0] === 'J' && gente[index].edad < 40) {
    nameJFourty.push(gente[index])
 }
   }
console.log(nameJFourty)