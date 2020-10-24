// EJERCICIO RESUELTO (test)
const coche = { 
    marca: "",
    modelo: "",
    matricula: "",
    acelerar() {
      return "A todo gas🔥"
    },
    frenar() {
      return "Cuidado con la abuelita en el paso de cebra!!🧓"
    }
  } 
  
  console.log(coche.acelerar())
  console.log(coche.frenar())
  
  class Turismo {
    constructor(marca, modelo, matricula) {
      this.marca = marca
      this.modelo = modelo
      this.matricula = matricula
    }
    acelerar() {
      return "A todo gas🔥"
    }
    frenar() {
      return "Cuidado con la abuelita en el paso de cebra!!🧓"
    }
  }
  
  console.log(coche.acelerar())
  console.log(coche.frenar())
  
  const miTurismo = new Turismo ("Asiento", "Leon", "1234AAA")
  
  console.log(miTurismo)
  
  const miSegundoTurismo = new Turismo ("Vuelve", "XC90", "1540GAB")
  
  console.log(miSegundoTurismo)
  
  
  class Persona {
    constructor(nombre, apellidos, edad, gustosMusicales) {
      this.nombre = nombre
      this.apellidos = apellidos
      this.edad = edad
      this.gustosMusicales = gustosMusicales
    }
    envejecer() {
      this.edad = this.edad + 1
      return this.edad
    }
    nuevoGusto(str) {
      this.gustosMusicales.push(str)
    }
  } 
  
  // const nuevoGusto1 = new Persona ("Juan", "Palomo", 61, ["rock"])
  // nuevoGusto1.nuevoGusto("reggeton")
  // nuevoGusto1.envejecer()
  
  // console.log(nuevoGusto1)
  
  const rockero = new Persona ("Freddie", "Mercury", 45, ["Queen", "AC/DC"])
  rockero.nuevoGusto("My Chemical Romance")
  
  console.log(rockero)
  
  const perro = ["nombre", "raza",
    function popo() {
      return "Ha hecho => " + Math.random() * 3 + " caquitas"
    }
  ]
  
  console.log(perro[2]())
  // invocamos a una funcion dentro de un array con parentesis fuera de los corchetes
  
  const perrito = {
    nombre: "",
    raza: "",
    popo() {
      return "Ha hecho => " + Math.random() * 3 + " caquitas"
    }
  }
  
  console.log(perrito.popo())
  
  class Perrazo {
    constructor(nombre, raza) {
      this.nombre = nombre
      this.raza = raza
    }
    popo() {
      return "Ha hecho => " + Math.random() * 3 + " caquitas"
    }
  }
  
  const myDoggie = new Perrazo ("Solovino", "Mestizo")
  myDoggie.popo()
  
  console.log(myDoggie.popo())
  
  const lebrelazo = new Perrazo ("Gus", "lebrel")
  
  console.log(lebrelazo)