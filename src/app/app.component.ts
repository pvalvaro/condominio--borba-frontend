import { Component, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDrawerMode } from '@angular/material/sidenav'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'dashboard-gestao';
  sidenavMode: MatDrawerMode = 'side';

  @ViewChild('sidenav') sidenav!: MatSidenav; // Acessa diretamente o Sidenav

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustSidenavMode();
  }

  ngAfterViewInit() {
    this.adjustSidenavMode();
  }

  toggleSidebar() {
    this.sidenav.toggle(); // Agora manipulamos diretamente o Sidenav
  }

  private adjustSidenavMode() {
    if (window.innerWidth < 600) {
      this.sidenavMode = 'over';
      this.sidenav.close(); // Fecha corretamente em telas pequenas
    } else {
      this.sidenavMode = 'side';
      this.sidenav.open(); // Abre corretamente em telas grandes
    }
  }
}
