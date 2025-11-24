import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
    selector: 'app-breadcrumb-back',
    standalone: true,
    imports: [TranslocoModule],
    template: `<button class="breadcrumb-back" (click)="goBack()">{{'Return' | transloco}}</button>`,
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
