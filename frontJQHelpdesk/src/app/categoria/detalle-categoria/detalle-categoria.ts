import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

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
  planDetails: PlanDetails = {
    name: "Premium Pro",
    price: 19.99,
    billingCycle: "month",
    features: [
      "Unlimited Storage",
      "Priority Support",
      "Custom Domain",
      "Analytics Dashboard",
      "API Access",
      "Team Collaboration"
    ]
  };

  constructor() {}

  ngOnInit(): void {}
}
