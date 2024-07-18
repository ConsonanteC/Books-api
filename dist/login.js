// La carpeta "controllers" contiene las clases
// La carpeta "models" contiene las Interfaces
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UserControllers } from "./controllers/controllers-users.js";
// traemos la IP o dominio (números) y agrego /api/v1 porque no cambia en ninguna ruta, ára luego conectarlo con el endpoint de la clase
const URL_USER = "http://190.147.64.47:5155";
const form = document.querySelector("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    // Estoy accediendo poco a poco a datos mas precisos en el crud
    const crudUser = new UserControllers(URL_USER);
    const respuesta = yield crudUser.login(email, password);
    const token = respuesta.data.token;
    if (token) {
        console.log(`Login exitoso: ${token}`);
        localStorage.setItem("Token", token);
        // el primer vakor "Token" es el nombre que tendrá en el localStorage, y eñ segundo parámetro es lo que almacenará ahí
        window.location.href = "books.html";
    }
    else {
        console.log("Login Falló");
    }
    form.reset(); //Para limpiar el formulario
}));
