import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Utilisateur } from 'src/app/monClass/client';
import { Project } from 'src/app/monClass/project';
import { Proposition } from 'src/app/monClass/proposition';
import { AdminAuthService } from 'src/app/monService/admin-auth.service';
import { AdminService } from 'src/app/monService/admin.service';
import { ProjetService } from 'src/app/monService/projet.service';
 import { UtilisateurService } from 'src/app/monService/utilisateur.service';
import { Chart } from 'chart.js/auto';
import { PropositionServie } from 'src/app/monService/proposition.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  admin: any;
  nomRoles: any;
  clients: Utilisateur[] = [];
  freelancer: Utilisateur[] = [];
  projets: Project[] = [];
  proplist: Proposition[] = [];
  nbrc = 0;
  nbrf = 0;
  nbrp = 0;
  nbrpj = 0;
  doughnutChart: any;

  constructor(
    private adminService: AdminService,
    private utilisateurService: UtilisateurService,
    private propService : PropositionServie,
    private authAdmin: AdminAuthService,
    private projetService: ProjetService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadClients();
    this.loadFreelancer();
    this.loadProp();
    this.loadprj();
  }

  loadClients() {
    this.utilisateurService.getClient().subscribe((data: Utilisateur[]) => {
      this.clients = data;
      this.nbrc = data.length;
      this.updateChart();
    });
  }

  loadFreelancer() {
    this.utilisateurService.getfreelancer().subscribe((data: Utilisateur[]) => {
      this.freelancer = data;
      this.nbrf = data.length;
      this.updateChart();
    });
  }

  loadprj() {
    this.projetService.getAllProjet().subscribe((data: Project[]) => {
      this.projets = data;
      this.nbrpj = data.length;
      this.updateChart();
    });
  }

  loadProp() {
    this.propService.getAllProposition().subscribe((data: Proposition[]) => {
      this.proplist = data;
      this.nbrp = data.length;
      this.updateChart();
    });
  }

  initializeChart() {
    const ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
    this.doughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Clients', 'Freelancer', 'Projet', 'Proposition'],
        datasets: [{
          label: 'Count',
          data: [this.nbrc, this.nbrf, this.nbrpj, this.nbrp], // Initial data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                let label = context.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed !== null) {
                  label += context.parsed;
                }
                return label;
              }
            }
          }
        }
      }
    });
  }

  updateChart() {
    if (this.doughnutChart) {
      this.doughnutChart.data.datasets[0].data = [
        this.nbrc,
        this.nbrf,
        this.nbrpj,
        this.nbrp
      ];
      this.doughnutChart.update();
    } else {
      this.initializeChart();
    }
  }
}
