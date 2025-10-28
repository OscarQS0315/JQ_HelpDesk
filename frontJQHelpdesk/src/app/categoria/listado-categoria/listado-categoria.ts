import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketCategoryModel } from '../../share/models/TicketCategoryModel';
import { Router } from '@angular/router';
import { TicketCategoryService } from '../../share/services/api/ticketCategory.service';


interface Category {
  id: number;
  name: string;
  parentCategory?: string;
  parentId?: number;
  description: string;
  icon: string;
}

@Component({
  selector: "app-categories",
  templateUrl: "./listado-categoria.html",
  styleUrls: ["./listado-categoria.css"],
  standalone: false,

})
export class ListadoCategoria implements OnInit {

  data = signal<TicketCategoryModel[]>([]);
  constructor(
    private router: Router,
    private TCService: TicketCategoryService
  ) { }

  listCategories(): void {
    this.TCService.get().subscribe((response: TicketCategoryModel[]) => {
      console.log('Categorías cargadas:', response);
      this.data.set(response);
      this.buildHierarchy();
    });
  }




  categoriesHierarchy: TicketCategoryModel[][] = [];
  hoveredIndex: number = -1;

  ngOnInit(): void {
    this.listCategories();
    

  }

  buildHierarchy(): void {
    this.categoriesHierarchy = [this.data()];
  }


  hasChildren(category: Category): boolean {
    return this.data().some(c => c.id === category.id);
  }

  onHover(id: number): void {
    this.hoveredIndex = id;
  }

  onLeave(id: number): void {
    this.hoveredIndex = -1;
  }
}
