import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  // loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  baseURL = 'http://52.53.201.100:8000/api/v1';
  ngOnInit(): void {}

  loginSubmit(val) {
    // console.log('loginForm works', val.value);
    let rqData = val.value;
    try {
      this.http
        .post(this.baseURL + '/employee/user/login', rqData)
        .subscribe((res) => {
          // console.log('res', res);
          this.router.navigateByUrl('/dashboard');
        });
    } catch (error) {
      console.log(error);
      
    }
  }
}
