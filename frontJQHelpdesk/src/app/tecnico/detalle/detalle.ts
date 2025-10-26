import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-contact-card",
  standalone: false,
  templateUrl: "./detalle.html",
  styleUrls: ["./detalle.css"]
})
export class Detalle {
  @Input() name: string = "John Doe";
  @Input() jobTitle: string = "Full Stack Developer";
  @Input() profileImage: string = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e";
  @Input() linkedinUrl: string = "https://linkedin.com/in/johndoe";
  @Input() githubUrl: string = "https://github.com/johndoe";
  @Input() portfolioUrl: string = "https://johndoe.dev";
  @Input() email: string = "john.doe@example.com";
  @Input() phone: string = "+1 (555) 123-4567";
  @Input() location: string = "San Francisco, CA";

  isFlipped: boolean = false;

  flipCard(): void {
    this.isFlipped = !this.isFlipped;
  }
}