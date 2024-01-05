//ACTIVIDAD MACONDO

// Caso 1 de macondo

/* Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día
viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo
día le pagan a Hildebrando, a Hildebrando le pagan 2.500.000.

día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de
comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la
mañana a Cartagena las opciones que tiene Hildebrando:

- si compra una almojábana con gaseosa son 15.000
  le caerá mal porque lleva mucho en el stand
- un subway con gaseosa 23.000
  estará llenito y bien
- no compra nada
- le tocara comprar algo en Medellín

Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las
vacaciones */

let presupuesto = 2500000;

const desayunoElDorado = prompt(
    "¿Qué desea comprar en el aeropuerto del Dorado?\n" +
    "1. Almojábana con gaseosa ($ 15,000)\n" +
    "2. Subway con gaseosa ($ 23,000)\n" +
    "3. No comprar nada\n"
);
switch (desayunoElDorado) {
    case "1":
        presupuesto -= 15000;
        alert(`Don Hildebrando se compró una almojabana con gaseosa.\nDinero disponible para las vacaciones: $${presupuesto}.\nRecuerde que esto le caerá mal porque lleva mucho en el stand`)
        break
    case "2":
        presupuesto -= 23000;
        alert(`Don Hildebrando se compró una Subway con gaseosa.\nDinero disponible para las vacaciones: $${presupuesto}.\nQuedara bien llenito como un cerdito.`)
        break
    case "3":
        alert(`Don Hildebrando no compró nada, decidio comprar en Medellin. Dinero disponible para las vacaciones: $${presupuesto}`)
}


// Caso 2 de macondo

/* llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de
mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40
cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm
(alto) x 40 cm (largo)x 20x cm.

Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la
maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y
que de las medidas correctas del tamaño que pide la aerolínea? Usar .math

La idea fundamental es que necesitamos reducir cada dimensión de la maleta
proporcionalmente para que todas las dimensiones cumplan con los límites establecidos
por la aerolínea.

Instrucciones matemáticas:

1. Factor de reducción para cada dimensión:

• Para el alto, calculamos el factor de reducción como 𝑎𝑙𝑡𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
                                                        𝑎𝑙𝑡𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el largo, calculamos el factor de reducción como 𝑙𝑎𝑟𝑔𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
                                                          𝑙𝑎𝑟𝑔𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .
• Para el ancho, calculamos el factor de reducción como 𝑎𝑛𝑐ℎ𝑜𝑃𝑒𝑟𝑚𝑖𝑡𝑖𝑑𝑜
                                                          𝑎𝑛𝑐ℎ𝑜𝑂𝑟𝑖𝑔𝑖𝑛𝑎𝑙 .

2. Factor de reducción mas pequeño:

Utilizamos la función Math.min para encontrar el factor de reducción mas
pequeño entre los tres, Esto asegura que todas las dimensiones se reducirán de manera
proporcional y ninguna excederá los límites permitidos.

3. Nuevas dimensiones:

• Multiplicamos cada dimensión original por el factor de reducción mas
pequeño para obtener las nuevas dimensiones ajustadas.
• Nuevas dimensiones:
nuevoAlto= altoOriginal * factorReduccion
nuevoLargo = largoOriginal * factorReduccion
nuevoAncho=anchoOriginal * factorReduccion */

alert ("Acontinuacion vas a ingresar las dimensiones de tu maleta");

let altoPermitido = 55
let largoPermitido = 40
let anchoPermitido = 20

let altoOriginal = prompt("Ingrese el alto de su maleta")
let largoOriginal = prompt("Ingrese el largo de su maleta")
let anchoOriginal = prompt("Ingrese el ancho de su maleta")

alert(`Las dimensiones de la maleta son ${altoOriginal}cm de alto, ${largoOriginal}cm de largo y ${anchoOriginal}cm de ancho.`)

let areaMaletaPermitido = Math.imul(altoPermitido, largoPermitido, anchoPermitido)
let areaMaletaOriginal = Math.imul(altoOriginal, largoOriginal, anchoOriginal)

let reduccionAlto = altoPermitido / altoOriginal;
let reduccionLargo = largoPermitido / largoOriginal;
let reduccionAncho = anchoPermitido / anchoOriginal;

let factorMinimo = Math.min(reduccionAlto, reduccionAncho, reduccionLargo);

let nuevoAlto = (altoOriginal * factorMinimo);
let nuevoLargo = (largoOriginal * factorMinimo);
let nuevoAncho = (anchoOriginal * factorMinimo);

if (areaMaletaOriginal > areaMaletaPermitido) {
    alert("La maleta es demasiado grade. El tamaño maximo permitido es 55 cm (alto) x 40 cm (largo) x 20 cm (ancho). Debes hacer lo siguiente:")
    alert(`Debes reducir el tamaño de tu maleta de la siguiente manera:
    ${Math.floor(altoOriginal - nuevoAlto)}cm de alto.
    ${Math.floor(largoOriginal - nuevoLargo)}cm de largo.
    ${Math.floor(anchoOriginal - nuevoAncho)}cm de ancho`)
} else if
    (areaMaletaOriginal <= areaMaletaPermitido) {
    alert("Don Hildebrando su maleta cumple con las dimesiones permitidas por la aerolinea DT\nque tengas buen viaje.")
} else {
    alert("El dato ingresa no es un numero. Por favor validar.")
}

// Caso 3 de macondo

/* ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar
a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto
está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando
por el aeropuerto encuentra wifi, la red se llama " ElPassEs:
01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números
binarios, además cobran 50.000 la hora.

Tienen que crear un código que convierta los números binarios, a decimales y luego a
caracteres  */

alert("Don Hildebrando,\nBienvenido a Medellin.\n")
alert("Tu proximo vuelo para Macondo es a las 3:00 am y son las 2:00 am. Debes confirmar tu reserva en el Hotel. ")

let wifi = prompt("¿Necesitas una internet?\n 1. Si. \n 2. No.")

switch (wifi) {
    case "1": let wifi1 = prompt("Existe esta red 'ELPassEs' pero la contraseña está cifrada en números binarios, además cobran $50.000 por hora o fracción. ¿Desear continuar? \n 1. Si. \n 2. No.")
        if (wifi1 == 1) {
            presupuesto -= 50000
            function clave(binario) {
                let decimal = parseInt(binario, 2)
                let caracter = String.fromCharCode(decimal)
                return caracter;
            }
            binario1 = "01110010"
            binario2 = "01101001"
            binario3 = "01110111"
            binario4 = "01101001"
            let claveCompleta = clave(binario1) + clave(binario2) + clave(binario3) + clave(binario4)
            alert(
                `La contraseña para ingresar a la red es '${claveCompleta}'.\nDinero disponible para las vacaciones: $ ${presupuesto}`)
            break
        }
    case "2": alert("La red sigue sin funcionar. Por favor trata de conectarte a otra red e intenta nuevamente")
}

// Caso 4 de macondo

/* al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i
así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al
hotel mariposas amarillas" */


alert("Don Hildebrando Has llegado a Macondo. Al parecer los habitantes solo hablan con la vocal i. Presiona 'Aceptar' para pedir el taxi en idiona Macondo.")

function macondoVocabulary(sentence) {
    const vocabulary = sentence.toLowerCase().split('');
    const newVocabulary = vocabulary.map(letter => {
        if (/[aeiou]/.test(letter)) {
            return 'i';
        }
        return letter;
    });
    return newVocabulary.join('');
}
console.log(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));
alert(macondoVocabulary("Taxi me puede llevar al hotel mariposas amarillas"));

alert("El taxista ha aceptado tu viaje. Presiona 'Aceptar' para iniciar tu recorrido.")

// Caso 5 de macondo

/* cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi
que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los
300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata,
no pasa nada.

si el taxista gana, se descontará del dinero disponible  */


alert("Don Hildebrando, Ha llegado al Hotel de la ciudad de Macondo. Su tarifa para el taxi es de $300.000 pesos.\nPara negociar la tarifa debe ganar en Piedra Papel O Tijera en una ronda.")

let ppt = prompt("¿Ganaste la ronda?\n 1. Si. \n 2. No.\n 3. Empate.")

if (ppt == "1") {
    alert("Felicidades Don Hildebrando. No tienes que pagar nada.")
} else if (ppt == "2" || ppt == "3") {
    presupuesto -= 300000
    alert(`Don Hildebrando, no logró ganar la ronda. Debe pagar la tarifa de $300.000 pesos. \nDinero disponible para las vacaciones: $${presupuesto} pesos.`)
} else {
    alert("Has ingresado in dato invalido. Por favor intenta nuevamente.")
}

// Caso 6 macondo

/* llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de
vestimenta para cada cosa, se quedara 4 días

- amarillo
  - ir a la piscina, el agua huele raro, pero no le pone importancia
  -si se mete, empieza a sentirse ahogado, demasiado cloro, muere
(terminan las vacaciones)
  -si no, no pasa nada

- verde
  - caminatas, y agüita para el camino,
  -si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos
  -si no, llegará a cierto punto, y se devolverá solo, y den noche se pierde

- roja
  - actividades en la playa
  - voleibol, juega y la pasa genial
  - nada en el mar, y monta moto
  - se pone a tomar cocteles mientras descansa, de pronto siente un fuerte
dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver
de emergencia. (terminan las vacaciones)

- azul
  - actividades dentro del hotel
  - bingo, se lo gana y aumenta su dinero
  - bailar, y la pasa muy bien
  - casino y apuesta, y solo se queda con pasaje de regreso (terminan las
vacaciones)

Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día
que va estar. */

let piscina = 0;
let caminata = 0;
let actividadHotel = 0;
let playa = 0;

const Vacaciones = () => {
    let vestimenta = prompt("Este es el primer día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta1 = prompt("Este es el segundo día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta1 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta1 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta1 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta1 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta2 = prompt("Este es el tercer día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta2 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta2 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta2 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta2 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }

    let vestimenta3 = prompt("Este es el último día día de tus vacaciones. Ingresa 1 para vestimenta amarilla. Ingresa 2 para vestimenta verde. Ingresa 3 para vestimenta roja. Ingresa 4 para vestimenta azul")

    if (vestimenta3 == 1) {
        alert("Fuiste a la piscina, el agua olía raro pero no le diste importancia.");
        piscina = prompt("Ingresa el número 1 para meterte a la piscina. Ingresa el número 2 para no meterte")

        if (piscina == 1) {
            alert("Te metiste en la piscina y te sentiste ahogado, había demasiado cloro y te moriste. Se acabaron tus vacaciones");
        }
        else {
            alert("No te metiste, así que no pasó nada");
        }
    }

    else if (vestimenta3 == 2) {
        alert("Irás a unas caminatas con agua para el camino.");
        caminata = prompt("Ingresa el número 1 para ir a toda la caminata completa. Ingresa 2 para ir hasta cierto punto y volver.")

        if (caminata == 1) {
            alert("Encontraste una hermosa cascada y te tomaste muchas fotos")
        }

        else {
            alert("Llegaste hasta cierto punto y te devolviste solo, y en la noche te perdiste")
        }
    }

    else if (vestimenta3 == 3) {
        alert("Irás a la playa hacer actividades.");
        playa = prompt("Ingresa el número 1 para ponerte a jugar. Ingresa el número 2 para ir al mar. Ingresa el número 3 para ponerte a beber")

        if (playa == 1) {
            alert("Jugaste voleibol y la pasaste genial")
        }

        else if (playa == 2) {
            alert("Fuiste al mar a nadar y a montar en moto")
        }

        else {
            alert("Te pusiste a tomar cocteles mientras descansabas, de pronto sentiste un fuerte dolor de cabeza y empezaste a perder la visión. Tomaste chirrinchi adulterado y te tuviste que devolver rápidamente de emergencia. Se acabaron tus vacaciones.")
        }
    }

    else if (vestimenta3 == 4) {
        alert("Harás actividades dentro del hotel.")
        actividadHotel = prompt("Ingresa el número 1 para jugar bingo. Ingresa el número 2 para bailar. Ingresa el número 3 para ir al casino")

        if (actividadHotel == 1) {
            alert("Jugaste bingo, te lo ganaste y aumentaste tu dinero")
        }

        else if (actividadHotel == 2) {
            alert("Bailaste y la pasaste muy bien")
        }

        else {
            alert("Fuiste al casino y apostaste todo, solo te quedaste con el pasaje de regreso. Se acabaron tus vacaciones")
        }
    }
}

const DineroGastado = () => {
    sueldo = 2500000;
    almojábanaGaseosa = 15000;
    subwayGaseosa = 23000;
    sueldoRestanteCaso1 = sueldo - almojábanaGaseosa;
    sueldoRestanteCaso2 = sueldo - subwayGaseosa;
    wifi1 = 50000;
    taxi1 = 300000;
    sueldoRestanteWifi = sueldoRestanteCaso2 - wifi1;
    sueldoRestanteTaxista = sueldoRestanteWifi - taxi1;

    comida = prompt("Ingresa el número 1 si compraste una almojábana. Ingresa el número 2 para compraste un Subway. Ingresa el número 3 si no compraste nada");
    if (comida == 1) {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${almojábanaGaseosa + wifi1 + taxi1}`);
        }
        else if (ganador == 2) {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${almojábanaGaseosa + wifi1}`);
        }
        else {
            alert(`Compraste una almojábana que costó ${almojábanaGaseosa}, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${almojábanaGaseosa + wifi1}`);
        }
    }

    else if (comida == 2) {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${subwayGaseosa + wifi1 + taxi1}`);
        }
        else if (ganador == 2) {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${subwayGaseosa + wifi1}`);
        }
        else {
            alert(`Compraste un subway que costó ${subwayGaseosa}, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${subwayGaseosa + wifi1}`);
        }
    }

    else {
        ganador = prompt("Ingresa el número 1 si el ganador fue el taxista. Ingresa el número 2 si el ganador fue el pasajero. Ingresa otro numero si hubo un empate");

        if (ganador == 1) {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y el ganador fue el taxista entonces le pagaste ${taxi1}. Entonces en total gastaste ${wifi1 + taxi1}`);
        }
        else if (ganador == 2) {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y el ganador fue el pasajero entonces no le pagaste nada. Entonces en total gastaste ${wifi1}`);
        }
        else {
            alert(`No compraste nada para comer, pagaste el wifi que costó ${wifi1} y hubo un empate entonces no pasó nada. Entonces en total gastaste ${wifi1}`);
        }
    }
}