import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  singIn() {
    this.authService.singIn(this.user)
      .subscribe(
        res => {
          let token = res
          localStorage.setItem('token', token.toString())
          this.router.navigate(['/eventos'])

        },
        err => { console.log(err) }
      )
  }

}
