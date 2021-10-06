// Ejercicios lógica.

//*********************************************
// 1. Se necesitan sumar los números del 1 a n, donde n es un número que le pedimos al usuario.
// let suma = 0

// for(let i = 1; i <= number; i++) {
//     suma = i; 
//     let total = suma + i
//     console.log (`la operacion  ${i} + ${suma} = ${total}`)
// }

// *********************************************
//2. Se necesita validar si un número ingresado por el usuario es par o impar.
// let number2 = prompt("Ingrese un numero: ")
// if((number2 % 2) == 0)
// {
    //     console.log("El numero es par")
    // }
    // else
    // {
        //     console.log("El numero es impar")
        // }
        
        // *********************************************
        //3.La pizzería Pepitos requiere un algoritmo que permita informarle a los usuarios si reciben o no un premio por parte del negocio, se tienen las siguientes validaciones:
        // Si es un niño menor a 10 años, debe ir a reclamar un jugo.
        // Si es una persona mayor de edad (18 años) debe ir a reclamar una cerveza. 
        // Y si es una mujer, debe reclamar adicionalmente una porción de pizza Hawaiana.
        // O si es un hombre debe reclamar adicionalmente una porción de pizza tres carnes.
        // Si no cumple ninguna de las condiciones, se le debe informar que desafortunadamente, no recibe ningún premio.
        
        let edad = prompt("Gracias por tu compra, me regalas por favor tu edad para la facturacion (indica en numeros porfavor): ")
        let sexo = prompt("y por ultimo, ¿con que genero? (ingresa m para hombre o f para mujer): ")
        
        let premios_recibidos = 0
        var premio1_bool = false
        var premio3_bool = false
        var premio2_bool = false
        var premio4_bool = false
        var premio1;
        var premio2;
        var premio3;
        var premio4;
        
        if (edad <= 10) {
            premio1 = "Felicitaciones! has ganado un jugo"
            premio1_bool = true
        }
        if (edad >= 18) {
            premio2 = "Felicitaciones! has ganado una cerveza"
            premio2_bool = true
        }
        if (sexo == 'f') {
            premio3 = " y como sorpresa adcional, te has ganado una pizza Hawaiana!"
            premio3_bool = true
        }
        if (sexo == 'm') {
            premio4 = " y como sorpresa adcional, te has ganado una pizza tres carnes!"
            premio4_bool = true
        }
        
        if (premio1_bool) {
            console.log(premio1);
        }
        else if (premio2_bool) {
            if (premio3_bool) {
                console.log (`${premio2} ${premio3}`)
            }
            else if (premio4_bool) {
                console.log (`${premio2} ${premio4}`)
            }
        }
        else {
            console.log("Lastimosamente no has ganado un premio adicional a tu compra")
        }
        
        
        //Se le debe pedir al usuario un número y mostrar la tabla de multiplicar de ese número, adicionalmente, se bebe mostrar el total de las multiplicaciones.

// let multip = prompt("Escribe un numero: ")

// for (let i = 0; i <= multip; i++)
// {
//     total = i * multip;
//     console.log(`la operacion  ${i} * ${multip} = ${total}`)
// }
