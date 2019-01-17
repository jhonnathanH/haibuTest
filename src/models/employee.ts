export class Employee {
    id: number;
    nombre: string;
    apellido: string;
    telefono: number;
    rut: string;
    fechaNacimiento: string;
    direccion: Address;
    activo: number;

}

class Address {
    calle: string;
    numero: number;
    comuna: string;
}   
    //------------------------------------------- example
    // "id": 1,
    // "nombre": "Omar",
    // "apellido": "Trapaga",
    // "telefono": 56221984968,
    // "rut": "21984968-0",
    // "fechaNacimiento": "12/05/1982",
    // "direccion": {
    //   "calle": "Av. Matta",
    //   "numero": 143,
    //   "comuna": "Santiago"
    // },
    // "activo": 1
    //------------------------------------------- example
