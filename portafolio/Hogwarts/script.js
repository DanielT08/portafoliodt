// Actividad Hogwarts/*

/*
Paso 1
Eres estudiante de Hogwarts, tienes la edad suficiente para entrar a estudiar,
tienes padres, y un linaje de sangre, aun no sabes tu casa, ni tu animal patronus,
también tienes cualidades, que son muy importantes para que el sombrero
seleccionador te asigne una casa.
Crear un objeto, con Nombre, edad, familia, linaje, casa, animal patronus,
cualidades, debes tener en tus cualidades solo los 3 de alguna de las casas:
“Valor, fuerza, audacia"
"Justicia, Lealtad, Paciencia"
“Creatividad, Erudición, Inteligencia"
"Ambición, Determinación, Astucia"
Linajes: Mestizo, muggle, Sangre pura */

const hogwarts = {
    nombre: "Daniel",
    edad: 30,
    familia: "Toro",
    linaje: "muggle",   
    casa: "",
    animalPatronus: "",
    cualidades: ["Creatividad","Erudicion", "Inteligencia" ]
};


/* 
Paso 2
Es una año difícil en Hogwarts, ya que corren rumores que el innombrable ha vuelto,
y el y el famoso Harry Potter también ha ingresado contigo ¡¡¡
Crear Objeto de clases:
tus clases y tus profesores:
transformaciones: "Profesor Kevin Slughorn",
herbologia: "Profesor Maria Umbridge",
pociones: "Profesor Liliana McGonagall",
encantamientos: "Profesora Jackie",
defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
animalesMagicos: "Profesor David Filch",
historiaDeMagia: "Profesor Ronald Sprout" */

const profesores = {
    transformaciones: "Profesor Kevin Slughorn",
    herbologia: "Profesor Maria Umbridge",
    pociones: "Profesor Liliana McGonagall",
    encantamientos: "Profesora Jackie",
    defensaContraLasArtesOscuras: "Profesor Robinson Snape ",
    animalesMagicos: "Profesor David Filch",
    historiaDeMagia: "Profesor Ronald Sprout"
};


/* Paso 3
Inicia un nuevo día, es el día del sombrero seleccionador¡¡
hay una gran cena de bienvenida, estas tu con todos tus compas, según tu linaje y
cualidades, el sombrero seleccionador te asignara una casa.
Actividades Modulo 3
crear un objeto que sirva para escoger la casa al que pertenece el estudiante, será
condicional según tus cualidades y linaje.
Gryffindor ("Valor, fuerza, audacia"
Linaje: Mestizo, muggle, Sangre pura )
Hufflepuff("Justicia, Lealtad, Paciencia"
Linaje: Mestizo, muggle)
Ravenclaw(“Creatividad, Erudición, Inteligencia"
Linaje: Mestizo, muggle, Sangre pura)
Slytherin ("Ambición, Determinación, Astucia"
Linaje: "Sangre Pura")
 */

    
if (hogwarts.cualidades.includes("Creatividad") &&  hogwarts.cualidades.includes,("Erudicion") && hogwarts.cualidades.includes ("Inteligencia") &&hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura" | hogwarts.linaje == "mestizo") {
    hogwarts.casa = "Ravenclaw"
}
else if (hogwarts.cualidades.includes("Valor") &&  hogwarts.cualidades.includes,("Fuerza") && hogwarts.cualidades.includes ("Audacia") && hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura" | hogwarts.linaje == "mestizo") {
    hogwarts.casa = "Gryffindor"
}
else if (hogwarts.cualidades.includes("Junticia") &&  hogwarts.cualidades.includes,("Lealtad") && hogwarts.cualidades.includes ("Paciencia") && hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura" | hogwarts.linaje == "mestizo")  {
    hogwarts.casa = "Hufflepuff"
}
else if (hogwarts.cualidades.includes("Amabician") &&  hogwarts.cualidades.includes,("Determinacion") && hogwarts.cualidades.includes ("Astucia") && hogwarts.linaje == "muggle" | hogwarts.linaje == "sangre pura" | hogwarts.linaje == "mestizo")  {
    hogwarts.casa = "Slytherin"
} 
console.log("Tu casa es",hogwarts.casa)

/* 
Paso 4
primer día de clases: vas temprano a clase de transformaciones, en clase de
transformaciones que es un objeto, con transformaciones con boggarts, «Altera
la habilidad de un boggart para cambiar de forma y provoca risa para derrotarlo.»
esto se logra con el encantamiento "Riddikulus".
- Definir la clase de Transformaciones
En este paso, estás creando un objeto llamado claseTransformaciones que
representa la clase de Transformaciones. Estableces el nombre del profesor,
el horario y una propiedad para rastrear la transformación de los boggarts.
- Paso 2: Crear una función para realizar la transformación con "Riddikulus"
Aquí defines una función realizarTransformacionRiddikulus dentro de
claseTransformaciones. Esta función verifica si hay un boggart presente y, si
es así, realiza la transformación con el encantamiento "Riddikulus".
- Paso 3: Crear una función para enfrentar un boggart
Aquí defines otra función enfrentarBoggart dentro de
claseTransformaciones. Esta función toma un boggart como argumento,
muestra un mensaje con la forma original del boggart, realiza la
transformación y muestra el resultado.
- Paso 4: Uso y llamada a las funciones
En este paso, creas un objeto boggartEjemplo y luego llamas a la función
enfrentarBoggart de claseTransformaciones para enfrentar el boggart.
 */


const claseTransformaciones1 = {
nombreProfesor: profesores.transformaciones,
horario :"16:15 - 21:45",
riddiculus: function(){
let preguntaBogg = prompt("Hay un boggart en el sitio?")
if(preguntaBogg == "si"){
function enfrentarBogg(cualidadesBogg, risa){
console.log(`El boggart con forma ${cualidadesBogg}, se le ha aplicado el hechizo y quedo ${risa}`)
}
}else if (preguntaBogg == "no"){
alert ('No hay boggarts por aquí')
} else{
console.log ("Respuesta incorrecta")
}
},
}

let preguntaBogg = prompt("Hay un boggart peligroso y malevolo en el sitio?")
let cualidadesBogg = prompt("Como se llama: ")
let risa = prompt("Que te produce risa: ")
alert (`El boggart es: ${cualidadesBogg}`)


    // Paso 1: Definir la clase de Transformaciones
class ClaseTransformaciones {
    constructor(nombreProfesor, horario) {
    this.nombreProfesor = "Profesor Kevin Slughorn";
    this.horario = "16:15 - 21:45";
    this.boggartTransformado = false;
    }

    // Paso 2: Crear una función para realizar la transformación con "Riddikulus"
    realizarTransformacionRiddikulus() {
    if (this.boggartTransformado) {
        console.log("Ya has transformado al boggart con 'Riddikulus'.");
    } else {
        alert ("Realizando la transformación con 'Riddikulus'...");
        this.boggartTransformado = true;
        alert ("¡Has derrotado al boggart asqueroso con exito!");
    }   
    }
    // Paso 3: Crear una función para enfrentar un boggart
    enfrentarBoggart(boggart) {
        alert (`Te enfrentas a un boggart con: ${boggart.formaOriginal}.`);
    this.realizarTransformacionRiddikulus();
        alert (`El boggart se ha transformado: ${boggart.formaTransformada}.`);
    }
}
    // Paso 4: Uso y llamada a las funciones
const boggartEjemplo = {
    formaOriginal: "Aspecto aterrador, mas malo que tahnos, mas peligroso que ex rencorosa",
    formaTransformada: "En el osito ted"
};
const claseTransformaciones = new ClaseTransformaciones("Profesor Kevin Slughor", "8:00 AM");

claseTransformaciones.enfrentarBoggart(boggartEjemplo);


/* Paso 5
puedes ir agregando las demás clases, pero es importante que vayas a la clase de
defensa contra las artes oscuras, para puedas defenderte de los dementores que
han escapado de Azkaban.
crear un objeto con nombre defensaContraLasArtesOscuras con la función de
generar un animal de patronus, lo genere random y llenar la variable, de la
propiedad animalPatronus. */


const defensaContraLasArtesOscuras = {
  
    animalPatronus: "",
      generarAnimalPatronus: function() {
      const animalesPatronus = ["leon", "aguila", "delfin", "zorro", "fenix", "dragon", "tigre", "lobo"];
      const indiceAleatorio = animalesPatronus[Math.floor(Math.random() * animalesPatronus.length)];
      hogwarts.animalPatronus = indiceAleatorio;
    }
  };
  
  defensaContraLasArtesOscuras.generarAnimalPatronus();
  
  alert ("El animal de Patronus es: " + defensaContraLasArtesOscuras.animalPatronus);


/* Paso 6
Mostrar información del estudiante con los cambios realizador a su objeto */

Object.entries(hogwarts).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
    alert(`${key}: ${value}`);
})