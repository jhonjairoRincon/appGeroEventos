export class User{
    id?: String;
    email: String;
    password: String;
    token?: any;

    constructor(email: String, password:string){
        this.email = email,
        this.password = password
    }

}