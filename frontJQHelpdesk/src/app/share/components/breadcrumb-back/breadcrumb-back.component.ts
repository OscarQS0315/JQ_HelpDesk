import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-breadcrumb-back',
    standalone: true,
    template: `<button class="breadcrumb-back" (click)="goBack()">← Volver</button>`,
    styles: [`
    .breadcrumb-back {
      background: transparent;
      border: none;
      color: #ebe825;
      font-weight: 500;
      cursor: pointer;
      font-size: 13px;
    }
    .breadcrumb-back:hover {
      text-decoration: underline;
    }
  `]
})
export class BreadcrumbBackComponent {
    constructor(private location: Location) { }
    goBack() {
        this.location.back();
    }
}
