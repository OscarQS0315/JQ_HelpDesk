import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectPhase {
  name: string;
  icon: string;
  completionPercentage: number;
  description: string;
}

@Component({
  selector: 'app-status-card',
  standalone: false,
  templateUrl: './visualizacion-ticket.html',
  styleUrls: ['./visualizacion-ticket.css']
})


export class VisualizacionTicket implements OnInit {
  @Input() taskTitle: string = 'ROLES';

  statuses: string[] = ['TÉCNICO', 'ADMIN', 'CLIENTE'];
  currentStatus: string = 'Not Started';
  progressPercentage: number = 0;

  ngOnInit() {
    this.updateProgressPercentage();
  }

  updateStatus(status: string) {
    this.currentStatus = status;
    this.updateProgressPercentage();
  }

  updateProgressPercentage() {
    switch (this.currentStatus) {
      case 'TÉCNICO':
        this.progressPercentage = 0;
        break;
      case 'ADMIN':
        this.progressPercentage = 50;
        break;
      case 'CLIENTE':
        this.progressPercentage = 100;
        break;
      default:
        this.progressPercentage = 0;
    }
  }

  getIconClass(status: string): string {
    switch (status) {
      case 'Not Started':
        return 'fa-circle';
      case 'In Progress':
        return 'fa-spinner';
      case 'Completed':
        return 'fa-check';
      default:
        return 'fa-question';
    }
  }

  projectPhases: ProjectPhase[] = [
    {
      name: "Planning",
      icon: "fas fa-tasks",
      completionPercentage: 100,
      description: "Project planning and requirement gathering phase"
    },
    {
      name: "Development",
      icon: "fas fa-code",
      completionPercentage: 75,
      description: "Active development and implementation phase"
    },
    {
      name: "Testing",
      icon: "fas fa-vial",
      completionPercentage: 45,
      description: "Quality assurance and testing procedures"
    },
    {
      name: "Deployment",
      icon: "fas fa-rocket",
      completionPercentage: 20,
      description: "Production deployment and release management"
    }
  ];

  constructor() {}
}