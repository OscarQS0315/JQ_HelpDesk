import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianService } from '../../share/services/api/technician.service';
import { BreadcrumbBackComponent } from '../../share/components/breadcrumb-back/breadcrumb-back.component';
import { AuthenticationService } from '../../share/services/app/authentication.service';
import { E_Role } from '../../share/models/enums/role.enum';
import { UserService } from '../../share/services/api/user.service';
import { UserModel } from '../../share/models/UserModel';
import { TranslocoModule } from '@jsverse/transloco';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado-usuarios.html',
  styleUrls: ['./listado-usuarios.css'],
  imports: [TranslocoModule, BreadcrumbBackComponent,RouterModule,FormsModule]

})
export class ListadoUsuarios implements OnInit {

  authService = inject(AuthenticationService);
  readonly currentUser = this.authService.user;

  readonly role = computed(() => {
  const user = this.currentUser();
  return user?.role as E_Role | undefined;
});

  readonly isAdmin = computed(() => this.role() === E_Role.ADMIN);
  readonly isUser = computed(() => this.role() === E_Role.USER);
  readonly isTechnician = computed(() => this.role() === E_Role.TECHNICIAN);

  data = signal<UserModel[]>([]);


  selectedItem: UserModel | null = null;

  searchQuery: string = '';

  constructor(
    private UserService: UserService
  ) { }


  ngOnInit(): void {
    this.listUsuarios();
  }


  listUsuarios(): void {
  this.UserService.get().subscribe((response: UserModel[]) => {
    console.log('Usuarios cargados:', response);

    const loggedUser = this.currentUser();

    if (!loggedUser) {
      this.data.set([]);
      return;
    }

    if (loggedUser.role === E_Role.ADMIN) {
      this.data.set(response);
      return;
    }
    const filtered = response.filter(u => u.id === loggedUser.id);

    this.data.set(filtered);
  });
}


  get filteredData(): UserModel[] {
    const query = this.searchQuery.toLowerCase();
    return this.data().filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.lastName.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query)
    );
  }


  selectItem(item: UserModel): void {
    this.selectedItem = item;
  }
}
