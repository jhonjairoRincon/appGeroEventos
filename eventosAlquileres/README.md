autenticar 

1. se crea en el servicio una funcion que retorne la url del singIN y SingUp
    singUp(user:User){
     return this.http.post<User>(this.url+'/singup',user)
 }
2. en en componente.ts 
 se importa el servio auth 
 se importa Router from @angular/router

se intancian en el constructor 

   private router : Router
   private authService : AuthServices

3. se crea la funcion con la logica de singIn y singUp 

4. el html del componente se crea un formulario con 
     form (submit)="singIn()

en los input se agrea 
[(ngModel)]="user.email"
para que funcione el ngModel, en el archivo app.module.ts se importa:

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

y se agregan en los import. 

en el button se agrega el type: Submit para que se ejecute la funcion. 

