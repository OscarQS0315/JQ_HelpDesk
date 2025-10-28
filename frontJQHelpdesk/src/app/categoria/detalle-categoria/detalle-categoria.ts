import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketCategoryModel } from "../../share/models/TicketCategoryModel";
import { ActivatedRoute, Router } from "@angular/router";
import { TicketCategoryService } from "../../share/services/api/ticketCategory.service";

interface PlanDetails {
  name: string;
  price: number;
  billingCycle: string;
  features: string[];
}

@Component({
  selector: "app-current-plan-details",
  templateUrl: "./detalle-categoria.html",
  styleUrls: ["./detalle-categoria.css"],
  standalone: false,
})
export class DetalleCategoria implements OnInit {

data = signal<TicketCategoryModel | null>(null);

constructor(
    private router: Router,
    private TCService: TicketCategoryService,
    private route: ActivatedRoute
  ) { }
  
ticketCategory(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('id'));
    const id = idParam ? Number(idParam) : null;
    if (id) {
      this.TCService.getById(id).subscribe((response: TicketCategoryModel) => {
        console.log('Categoría cargada:', response);
        console.log('Especialidades de la categoría:', response.specialities);
        this.data.set(response);
      });
    }
  }

  


  ngOnInit(): void {
    this.ticketCategory();
  }
}
