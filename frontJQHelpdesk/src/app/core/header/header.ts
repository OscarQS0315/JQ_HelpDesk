import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoService } from "@jsverse/transloco";
import { AvailableLanguages } from "../../transloco-config";

interface MenuItem {
  label: string;
  link: string;
  active?: boolean;
}

export interface Option {
  id: string;
  label: string;
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
  isOpen = false;
  selectedOption: Option | null = null;
  menuItems: MenuItem[] = [];

  options: Option[] = [];
  constructor(private transloco: TranslocoService) { }



  ngOnInit(): void {
  this.checkPreferredTheme();
  this.transloco.selectTranslate('menu.home').subscribe(() => {
    this.loadOptions();
    this.buildMenu();
  });


  
  this.transloco.langChanges$.subscribe(() => {
    this.buildMenu();
    this.loadOptions();
  });
}

  buildMenu(): void {
    this.menuItems = [
      { label: this.transloco.translate('menu.home'), link: "/Inicio", active: true },
      { label: this.transloco.translate('menu.technicians'), link: "/Listado" },
      { label: this.transloco.translate('menu.categories'), link: "/ListadoCategoria" },
      {
        label: this.transloco.translate('menu.ticket', {
          language: this.transloco.translate(`language.${this.transloco.getActiveLang()}`)
        }),
        link: "/VisualizacionTicket"
      },
      { label: this.transloco.translate('menu.assignments'), link: "/ListadoTicket" }
    ];
  }

  loadOptions(): void {
    this.options = AvailableLanguages.map(lang => ({
      id: lang,
      label: this.transloco.translate(`language.${lang}`)
    }));

    const active = this.transloco.getActiveLang();
    this.selectedOption = this.options.find(o => o.id === active) || null;
  }

  changeLang(lang: string): void {
    this.transloco.setActiveLang(lang);
    this.loadOptions();
    this.buildMenu();
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

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }
  selectOption(option: Option): void {
    this.selectedOption = option;
    this.changeLang(option.id);

    this.isOpen = false;
    this.highlightOption(option);
  }

  closeDropdown(event: MouseEvent): void {
    if (!(event.target as HTMLElement).closest('.select-menu')) {
      this.isOpen = false;
    }
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleDropdown();
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.navigateOptions(event.key === 'ArrowDown' ? 1 : -1);
    } else if (event.key === 'Escape') {
      this.isOpen = false;
    }
  }

  navigateOptions(direction: number): void {
    const currentIndex = this.selectedOption
      ? this.options.findIndex(option => option.id === this.selectedOption!.id)
      : -1;
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
      nextIndex = this.options.length - 1;
    } else if (nextIndex >= this.options.length) {
      nextIndex = 0;
    }

    this.selectOption(this.options[nextIndex]);
  }

  highlightOption(option: Option): void {
    const optionElement = document.getElementById(option.id);
    if (optionElement) {
      optionElement.classList.add('highlight');
      setTimeout(() => {
        optionElement.classList.remove('highlight');
      }, 500);
    }
  }
}