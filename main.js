//EJERCICIO 1//

let persona = [1, 2, 3]
console.log(persona[0]);

//EJERCICIO 2//

console.log(persona[2])

//EJERCICIO 3//

persona.unshift(`manzana`);
console.log(persona);

//EJERCICIO 4//

let primero = persona.shift();
console.log(primero);
console.log(persona);

//EJERCICIO 5//

persona.push("plátano");
console.log(persona);

//EJERCICIO 6//

let ultimo = persona.pop();
console.log(ultimo);
console.log(persona);

//EJERCICIO 7//

let perro = ["Uno", "Dos", "Tres"]


let mezcla = persona.concat(perro);
console.log(mezcla);

//EJERCICIO 8//

console.log(perro.includes("Uno"));
console.log(perro.includes("kiwi"));

//EJERCICIO 9//

let encontrado = perro.find(function (indice) {
  return indice });

console.log(encontrado);

//EJERCICIO 10//

let coches = ["rojo", "verde", "azul"];

coches.splice(1, 1, "amarillo");
console.log(coches);

//EJERCICIO 11//

let suma = persona.reduce(function (acumulador, num) {
  return acumulador + num;
}, 0);
console.log(suma);


//EJERCICIO 12//

let multi = persona.map(function(num){
    return num * 2
});
console.log(multi);

//EJERCICIO 13//

let mayor = persona.filter(function (num) {
  return num >2;
});

console.log(mayor);

//EJERCICIO 14//

let persona1 = [16, 22, 33];


let catorce = (numeros) => numeros > 15;


console.log(persona1.every(catorce));

//EJERCICIO 15//

let EjerQuince = [10, 15, 20]

let encontrado1 = EjerQuince.find(function (num) {
  return num > 10;
});
console.log(encontrado1);


//EJERCICIO 16//

console.log(EjerQuince);

//EJERCICIO 17//

let Diecisiete = [1, 2, 3, 4, 5];

let duplicados = Diecisiete.map(function (num) {
  return num * 2;
});
console.log(duplicados);

