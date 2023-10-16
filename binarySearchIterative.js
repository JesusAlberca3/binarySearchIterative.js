/**

 * 1. Crear una funcion para recibir un arreglo A[] y un objetivo a buscar (target)
 * 2. Definir dos variables inicio igual a 0 y fin igual a la longitud del arreglo menos uno
 * 3. Definir un ciclo while con la condicion de inicio sea menor o igual a fin
 * 4. Definir una variable 'mitad' con el valor de la funcion "Math.flor" de la división entre 2 de la suma de inicio y fin 
 * 5. Definir un condicional de el arreglo en la posicion mitad igual en valor y tipo a el target, se retorna mitad si es verdadero
 * 6. Se anida un condicional  de el arreglo en la posicion mitad mayor al target se asigna a fin el valor de mitad menos uno
 * 7. Se anida un condicional donde se asigna a inicio el valor de mitad mas uno
 * 8. Se sale del ciclo y se retorna el valor de -1
 * 
 * busquedaBinariaIterativa(array, target)
 * // input: an ordered array , target
 * // output: the number of the target in the array (If it is on it)
 * inicio <- 0
 * fin <- array.length -1 
 * While inicio <= fin DO:
 *  mitad <- Math.floor ((inicio + fin) / 2)
 * IF array[mitad] = target then:
 *   RETURN mitad
 * ELSE IF array[mitad] > target THEN
 *      fin <- mitad - 1
 * ELSE THEN:
 *      inicio = mitad + 1
 * EXIT WHILE
 * 
 * RETURN -1
 */


function busquedaBinariaIterativa(array, target){
    let inicio = 0;
    let fin = array.length - 1;

    while (inicio <= fin) {
        const mitad = Math.floor((inicio +  fin ) / 2); // This function returns the largest integer smaller or equal to X  reference from ecmaScript 21.3.2.16

        if (array[mitad] === target) {
            return mitad;

        }else if (array[mitad] > target) {
            fin = mitad - 1;
        }else {
            inicio = mitad + 1;
        }
    }
    return -1; // The target isn't in  the array
}

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,16];
const t = 9;

if (busquedaBinariaIterativa(numeros,t) !== 1){
    console.log(`El elemento ${t} se encuentra en la posición ${ busquedaBinariaIterativa(numeros, t)}.`);
} else {
    console.log(`El elemento ${t} no se encuentra en el arreglo.`);
}
