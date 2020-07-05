import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    event.preventDefault();
    if (this.username == "admin" && this.password == "admin123") {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }

  }
}
