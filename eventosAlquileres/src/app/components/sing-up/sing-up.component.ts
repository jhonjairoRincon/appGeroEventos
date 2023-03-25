import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  user: User = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  singUp() {
    this.authService.singUp(this.user)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(["/singIn"])
        },
        err => { console.log(err) }
      )
  }
}
