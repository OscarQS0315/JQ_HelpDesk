import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: false,
})

export class Footer implements OnInit {
  currentYear: number = new Date().getFullYear();
  email: string = '';
  showScrollButton: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onSubscribe() {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      // Implement subscription logic here
      this.email = '';
    }
  }
}
