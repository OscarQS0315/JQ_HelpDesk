import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  categories: Category[] = [
    {
      id: 1,
      name: "Lifestyle",
      description: "Everything for your lifestyle needs",
      icon: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=500&auto=format"
    },
    {
      id: 2,
      name: "Fashion",
      parentCategory: "Lifestyle",
      parentId: 1,
      description: "Trendy clothing and accessories for all seasons",
      icon: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&auto=format"
    },
    {
      id: 3,
      name: "Sports",
      parentCategory: "Lifestyle",
      parentId: 1,
      description: "Sports equipment and athletic gear",
      icon: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&auto=format"
    },
    {
      id: 4,
      name: "Electronics",
      description: "Explore the latest gadgets and electronic devices",
      icon: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&auto=format"
    },
    {
      id: 5,
      name: "Home & Garden",
      description: "Everything you need for your home and garden",
      icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&auto=format"
    },
    {
      id: 6,
      name: "Books",
      description: "Wide collection of books across all genres",
      icon: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&auto=format"
    }
  ];

  categoriesHierarchy: Category[][] = [];
  hoveredIndex: number = -1;

  constructor() {}

  ngOnInit(): void {
    this.buildHierarchy();
  }

  buildHierarchy(): void {
    // First level - categories without parents
    const rootCategories = this.categories.filter(c => !c.parentId);
    this.categoriesHierarchy.push(rootCategories);

    // Second level - categories with parents
    const childCategories = this.categories.filter(c => c.parentId);
    if (childCategories.length > 0) {
      this.categoriesHierarchy.push(childCategories);
    }
  }

  hasChildren(category: Category): boolean {
    return this.categories.some(c => c.parentId === category.id);
  }

  onHover(id: number): void {
    this.hoveredIndex = id;
  }

  onLeave(id: number): void {
    this.hoveredIndex = -1;
  }
}
