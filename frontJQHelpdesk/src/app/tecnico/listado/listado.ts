import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Router } from '@angular/router';

interface ListItem {
  id: number;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  icon: string;
}

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado {
    items: ListItem[] = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A cutting-edge development project focusing on AI integration",
      date: new Date(),
      tags: ["AI", "Development"],
      icon: "https://images.unsplash.com/photo-1534723452862-4c874018d66d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8dGVjaHx8fHx8fDE3MDcxMjg5NDY&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=48"
    },
    {
      id: 2,
      title: "Marketing Campaign",
      description: "Q1 2024 digital marketing strategy and implementation",
      date: new Date(),
      tags: ["Marketing", "Digital"],
      icon: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8bWFya2V0aW5nfHx8fHx8MTcwNzEyODk0Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=48"
    },
    {
      id: 3,
      title: "Product Launch",
      description: "New product launch preparation and coordination",
      date: new Date(),
      tags: ["Product", "Launch"],
      icon: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=48&ixid=MnwxfDB8MXxyYW5kb218MHx8cHJvZHVjdHx8fHx8fDE3MDcxMjg5NDg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=48"
    }
  ];

  selectedItem: ListItem | null = null;
  searchQuery: string = "";

  get filteredItems(): ListItem[] {
    return this.items.filter(item =>
      item.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectItem(item: ListItem): void {
    this.selectedItem = item;
  }
}
