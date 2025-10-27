import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianModel } from '../../share/models/TechnicianModel';
import { TechnicianService } from '../../share/services/api/technician.service';

@Component({
  selector: 'app-listado',
  standalone: false,
  templateUrl: './listado.html',
  styleUrl: './listado.css'
})
export class Listado implements OnInit {


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
