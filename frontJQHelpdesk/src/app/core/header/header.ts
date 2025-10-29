import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";

interface MenuItem {
  label: string;
  link: string;
  active?: boolean;
}

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class Header implements OnInit {
  isMenuOpen = false;
  isDarkMode = false;
  menuItems: MenuItem[] = [
    { label: "Home", link: "/", active: true },
    { label: "Técnicos", link: "/Listado" },
    { label: "Categorías", link: "/ListadoCategoria" },
    { label: "Tickets", link: "/VisualizacionTicket" },
    { label: "Asignaciones", link: "/ListadoTicket" },
    
  ];

  ngOnInit(): void {
    this.checkPreferredTheme();
  }

  handleImageError(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    imgElement.src = "assets/placeholder-logo.png";
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleNavClick(event: Event, item: MenuItem): void {
    this.menuItems.forEach(menuItem => menuItem.active = false);
    item.active = true;
  }

  private checkPreferredTheme(): void {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      this.isDarkMode = savedTheme === "dark";
    } else {
      this.isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  }
}