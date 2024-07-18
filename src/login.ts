// La carpeta "controllers" contiene las clases
// La carpeta "models" contiene las Interfaces

import { UserControllers } from "./controllers/controllers-users.js";

// traemos la IP o dominio (números) y agrego /api/v1 porque no cambia en ninguna ruta, ára luego conectarlo con el endpoint de la clase
const URL_USER: string = "http://190.147.64.47:5155";
const form = document.querySelector("form") as HTMLFormElement;
const email = document.querySelector("#email") as HTMLInputElement;
const password = document.querySelector("#password") as HTMLInputElement;

form.addEventListener("submit", async(e: Event) => {
    e.preventDefault();

    // Estoy accediendo poco a poco a datos mas precisos en el crud
    const crudUser = new UserControllers(URL_USER);
    const respuesta = await crudUser.login(email, password);  
    const token: string | null = respuesta.data.token;

    if (token) {
        console.log(`Login exitoso: ${token}`);
        localStorage.setItem("Token", token);
        // el primer vakor "Token" es el nombre que tendrá en el localStorage, y eñ segundo parámetro es lo que almacenará ahí
        window.location.href = "books.html";
    } else {
        console.log("Login Falló")
    }
    form.reset(); //Para limpiar el formulario
})
