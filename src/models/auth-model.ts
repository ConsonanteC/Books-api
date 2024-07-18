// Las Interfaces son el formato que tendrá a lo que la apliquemos

export interface IBodyRequestLogin {
    email: string,
    password: string
}

export interface IResponseLogin {
    message: string,
    data: Record <string, string>
}