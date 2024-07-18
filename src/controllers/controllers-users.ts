import { IBodyRequestLogin, IResponseLogin} from "../models/auth-model";

export class UserControllers {
    public domain: string;

    // Cada que llamemos esta variable debemos usar la palabra "this."
    constructor(domain: string)  {
        this.domain = domain; //El dominio es la IP (Los números de un enlace)
    };

    // Una promesa significa que RETIRNA algo
    async login(email:HTMLInputElement, password: HTMLInputElement): Promise<IResponseLogin>{

        // Creo esta variable para almacenar la información del Login con los datos que me exige mi Interface
        const userdata: IBodyRequestLogin = {
            email: email.value,
            password: password.value
        };
        const headers: Record<string,string> = {
            'accept': '*/*',
            'Content-Type': 'application/json' 
        };
        const requestOptions: RequestInit = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(userdata) // Transformamos la información del usuario a formato JSON
        };
        const response: Response = await fetch(`${this.domain}/api/v1/auth/login`, requestOptions);

        // Response ya tiene propiedades como "ok", "status", o "statusText" dentro de el, no necesito crear esa variable, y "ok" es un boolean
        if (!response.ok) {
            // Usamos "await" para esperar una respuesta
            console.log(`Response body: ${(await response.json()).message}`);
            throw new Error (`Error de autenticación: ${response.status}: ${response.statusText}`);
            // "Throw es un tipo de alerta, lo solemos usar cuando usamos try catch"
            // Cuando vemos "new" significa que es un constructor
            // "Error" es una clase predefinidida de JS
        }
        const responseBodyLogin: IResponseLogin = await response.json();
        return responseBodyLogin;
        
        
        
    }
};

