// Crear un Symbol para la propiedad provado idUsuario --> único
const idUsuario = Symbol('idUsuario');

class Usuario {
    constructor(nombre, edad, sueldo) {
        this[idUsuario] = this.generarId();
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = Number(sueldo);
    }
    generarId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
}

//let usuario1 = new Usuario('Gloria', 59, 3000);
//let usuario2 = new Usuario('Daniela', 60, 3000);
//console.log(usuario1);
//console.log(usuario2);

class AdministradorUsiario {
    constructor(){
        this.usuarios = [];
    }

    guardar(nombre, edad, sueldo){
        //crear usuario -. push ({})
        let usuario = new Usuario(nombre,edad,sueldo); 
        this.usuarios.push(usuario);  
        this.mostrar(`Usuario: ${nombre} fue registrado exitosamente...`);
    }
    listar(){
        this.mostrar('Listado de usuarios');
        //
        this.usuarios.forEach((usuario, index) =>{
            this.mostrar(`${index+1}.- ${usuario.nombre}`);
        })
     
    }
    detalles(){
        this.mostrar('Detalles de los usuarios');
        
        this.usuarios.forEach((usuario)=>{
            this.mostrar(`Nombre: ${usuario.nombre}, Edad: ${usuario.edad}, Sueldo: ${usuario.sueldo}`)
        })
        

    }
    totalSueldos(){
        this.mostrar('Total sueldo de los usuarios');
        this.mostrar('---------------------------');
        let totalSueldos = this.usuarios.reduce((total, usuario)=> {
            return total + usuario.sueldo;
        }, 0);
        this.mostrar(`Total de sueldo de los usuarios: ${totalSueldos}`);
    }
    mostrar(contenido){
        let resultado = document.querySelector('.resultado');
        resultado.innerHTML += `${contenido} <br>`;

    }

}

//Inicializar el 
let administrador = new AdministradorUsiario();

console.log(administrador);

//Controlar las acciones del usuario
//Capturar elementos del DOM
let agregar = document.getElementById('agregar').addEventListener('click', function(){
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let sueldo = document.getElementById('sueldo').value;

    //console.log(nombre, edad, sueldo);
    //Debemos invocar a la funcion responsable de guardar los datos del usuario
    administrador.guardar(nombre, edad, sueldo);
})

let listar = document.getElementById('listar').addEventListener('click', ()=>{
    administrador.listar();
});

//let detalles = document.getElementById('detalles').
let detalles = document.getElementById('detalles').addEventListener('click', ()=>{
    administrador.detalles();
});


let totalSueldos = document.getElementById('calcularSueldos').addEventListener('click', ()=>{
    administrador.totalSueldos();
});
