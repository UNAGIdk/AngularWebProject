import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { JwtService } from '../service/jwt.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  myForm!: FormGroup
  error!: String

  constructor(
    private authService: AuthService,
    private router: Router,
    private token: JwtService
    ) { }

  ngOnInit(): void {
    if(this.token.getToken()){
      this.router.navigate(["specs"])
    }
    this._initForm();
  }

  private _initForm(){
    this.myForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  onSubmit(myForm: FormGroup){
    this.authService.login(myForm.value.email, myForm.value.password).subscribe({
      next: (user:any) => {
        this.token.setToken(user.token)
        this.router.navigate(['specs'])
      },
      error: (err) => {
        if(err.status === 401){
          this.error = "User does not exist or password is wrong!"
        }
      }
    })
  }
}
