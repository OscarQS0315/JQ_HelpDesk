import { Component, OnInit, ChangeDetectionStrategy, inject, computed, effect, ChangeDetectorRef } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TranslocoService } from "@jsverse/transloco";
import { AvailableLanguages } from "../../transloco-config";
import { AuthenticationService } from "../../share/services/app/authentication.service";
import { E_Role } from "../../share/models/enums/role.enum";
import { Router } from '@angular/router';
import { UserNotificationAppService } from "../../share/services/app/user-notification.service";

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
  notiApp = inject(UserNotificationAppService);
  private router = inject(Router);

  isMenuOpen = false;
  isDarkMode = false;
  isOpen = false;
  selectedOption: Option | null = null;
  menuItems: MenuItem[] = [];

  options: Option[] = [];

  readonly unreadCount = computed(() => this.notiApp.unreadCount());
  constructor(private transloco: TranslocoService, private cdr: ChangeDetectorRef) { 
    this.notiApp.loadNotifications
    effect(() => {
    const isAuth = this.isAuthenticated();
    const role = this.role();

    this.buildMenu();  
    this.cdr.markForCheck();
  });
  }

  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;
  readonly isAuthenticated = computed(() => this.authService.authenticated());

  readonly role = computed(() => {
    const user = this.currentUser();
    return user?.role as E_Role | undefined;
  });

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);


  ngOnInit(): void {
    this.checkPreferredTheme();
    this.transloco.selectTranslate('menu.home').subscribe(() => {
      this.loadOptions();
      this.buildMenu();
    });

    this.router.events.subscribe(() => {
      this.buildMenu();
    });

    this.transloco.langChanges$.subscribe(() => {
      this.buildMenu();
      this.loadOptions();
    });
  }

  isLoginPage(): boolean {
    return this.router.url.includes('Login');
  }
  buildMenu(): void {

    
    if (this.isLoginPage()) {
      this.menuItems = [];
      return;
    }

    if (this.isAdmin()) {
      this.menuItems = [
        { label: this.transloco.translate('menu.home'), link: "/Inicio", active: true },
        { label: this.transloco.translate('menu.technicians'), link: "/Listado" },
        { label: this.transloco.translate('menu.categories'), link: "/ListadoCategoria" },
        { label: this.transloco.translate('menu.ticket'), link: "/VisualizacionTicket" },
        { label: this.transloco.translate('menu.assignments'), link: "/ListadoTicket" }
      ];
      return;
    }

    if (this.isTechnician()) {
      this.menuItems = [
        { label: this.transloco.translate('menu.home'), link: "/Inicio", active: true },
        { label: this.transloco.translate('menu.assignments'), link: "/ListadoTicket" },
        { label: this.transloco.translate('menu.ticket'), link: "/VisualizacionTicket" },
      ];
      return;
    }

    if (this.isUser()) {
      this.menuItems = [
        { label: this.transloco.translate('menu.home'), link: "/Inicio", active: true },
        { label: this.transloco.translate('menu.ticket'), link: "/VisualizacionTicket" },
      ];
      return;
    }
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

  login = () => this.router.navigate(['/Login']);
  logout = () => this.authService.logout();
}