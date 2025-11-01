import { Component, Input, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TechnicianModel } from "../../share/models/TechnicianModel";
import { TechnicianService } from "../../share/services/api/technician.service";
import { Router, RouterLink } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { computed } from '@angular/core';
import { E_TechnicianStatus } from "../../share/models/enums/technicianStatus.enum";
import { E_Role } from "../../share/models/enums/role.enum";
import { BreadcrumbBackComponent } from "../../share/components/breadcrumb-back/breadcrumb-back.component";

@Component({
  selector: "app-contact-card",
  standalone: true,
  templateUrl: "./detalle.html",
  styleUrls: ["./detalle.css"],
  imports: [BreadcrumbBackComponent, RouterLink]
})
export class Detalle implements OnInit {

  data = signal<TechnicianModel | null>(null);

  constructor(
    private router: Router,
    private TService: TechnicianService,
    private route: ActivatedRoute
  ) { }


  ngOnInit(): void {
    this.technician();
  }

  technician(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    const id = idParam ? Number(idParam) : null;
    if (id) {
      this.TService.getById(id).subscribe((response: TechnicianModel) => {
        console.log('Técnico cargado:', response);
        this.data.set(response);
      });
    }
  }
  
formatDate(date: string | null): string {
  if (!date) return 'Sin registro';
  return new Date(date).toLocaleDateString('es-CR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

readonly ticketsOpen = computed(() => {
  const tickets = this.data()?.tickets ?? [];
  return tickets.filter(ticket =>
    ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED'
  );
});

readonly statusLabel = computed(() => {
  const status = this.data()?.status;
  return status === E_TechnicianStatus.AVAILABLE
    ? 'Disponible'
    : status === E_TechnicianStatus.BUSY
    ? 'Ocupado'
    : 'Sin estado';
});
  
readonly role = computed(() => {
  const role = this.data()?.user?.role;
  return role === E_Role.TECHNICIAN
    ? 'Técnico'
    : role === E_Role.ADMIN
    ? 'Administrador'
    : 'Usuario';
})

  //readonly specialitiesList = computed(() =>
    //this.data()?.specialities?.map(s => s.name).join(', ') || ''
  //);

  readonly specialitiesList = computed(() =>
  this.data()?.specialities ?? []
);

  activeTicketsCount(): number {
    const tickets = this.data()?.tickets || [];
    return tickets.filter(ticket =>
      ticket.status !== 'RESOLVED' && ticket.status !== 'CLOSED'
    ).length;
  }
  
  isFlipped: boolean = false;

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}