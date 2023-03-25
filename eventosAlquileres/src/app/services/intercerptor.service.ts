import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class IntercerptorService implements HttpInterceptor {
  

  constructor(private authServices : AuthService) { }



  intercept(req:any, next:any) {
    
  
    const tokenizeReq = req.clone({
      
      setHeaders: {
        Authorization: `${this.authServices.getToken()}`
      }
    });
    return next.handle(tokenizeReq);
  }


}
