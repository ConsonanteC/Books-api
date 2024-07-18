var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class UserControllers {
    // Cada que llamemos esta variable debemos usar la palabra "this."
    constructor(domain) {
        this.domain = domain; //El dominio es la IP (Los números de un enlace)
    }
    ;
    // Una promesa significa que RETIRNA algo
    login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            // Creo esta variable para almacenar la información del Login con los datos que me exige mi Interface
            const userdata = {
                email: email.value,
                password: password.value
            };
            const headers = {
                'accept': '*/*',
                'Content-Type': 'application/json'
            };
            const requestOptions = {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(userdata) // Transformamos la información del usuario a formato JSON
            };
            const response = yield fetch(`${this.domain}/api/v1/auth/login`, requestOptions);
            // Response ya tiene propiedades como "ok", "status", o "statusText" dentro de el, no necesito crear esa variable, y "ok" es un boolean
            if (!response.ok) {
                // Usamos "await" para esperar una respuesta
                console.log(`Response body: ${(yield response.json()).message}`);
                throw new Error(`Error de autenticación: ${response.status}: ${response.statusText}`);
                // "Throw es un tipo de alerta, lo solemos usar cuando usamos try catch"
                // Cuando vemos "new" significa que es un constructor
                // "Error" es una clase predefinidida de JS
            }
            const responseBodyLogin = yield response.json();
            return responseBodyLogin;
        });
    }
}
;
