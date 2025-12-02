import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianService } from '../../share/services/api/technician.service';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { E_Role } from '../../share/models/enums/role.enum';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.html',
  styleUrl: './listado.css',

})
export class Listado implements OnInit {

  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;

  readonly role = computed(() => {
  const user = this.currentUser();
  return user?.role as E_Role | undefined;
});

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);

  data = signal<TechnicianModel[]>([]);


  selectedItem: TechnicianModel | null = null;


  searchQuery: string = '';

  constructor(
    private router: Router,
    private TService: TechnicianService
  ) { }


  ngOnInit(): void {
    this.listTechnicians();
  }


  listTechnicians(): void {
    this.TService.get().subscribe((response: TechnicianModel[]) => {
      console.log('Técnicos cargados:', response);
      this.data.set(response);
    });
  }


  get filteredData(): TechnicianModel[] {
    const query = this.searchQuery.toLowerCase();
    return this.data().filter(item =>
      item.user.name.toLowerCase().includes(query) ||
      item.user.lastName.toLowerCase().includes(query) ||
      item.user.email.toLowerCase().includes(query) ||
      item.specialities.some(tag => tag.name.toLowerCase().includes(query))
    );
  }


  selectItem(item: TechnicianModel): void {
    this.selectedItem = item;
  }
}
