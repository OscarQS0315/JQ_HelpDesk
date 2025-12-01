import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {
  isLoginView = true;
  loginEmail = '';
  loginPassword = '';
  fullName = '';
  registerEmail = '';
  registerPassword = '';
  confirmPassword = '';

  loginImage = '/Images/Background JQ.png';
  registerImage = "/Images/Background JQ.png";
  currentImage = this.loginImage;

  ngOnInit() {
    this.setCurrentImage();
  }

  toggleView() {
    this.isLoginView = !this.isLoginView;
    this.setCurrentImage();
  }

  setCurrentImage() {
    this.currentImage = this.isLoginView ? this.loginImage : this.registerImage;
  }

  onLogin() {
    // Implement login logic here
    console.log('Login attempted with:', this.loginEmail, this.loginPassword);
  }

  onRegister() {
    // Implement registration logic here
    console.log('Registration attempted with:', this.fullName, this.registerEmail, this.registerPassword);
  }
}
