import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CondominioComponent } from './pages/condominio/condominio.component';
import { ApartamentoComponent } from './pages/apartamento/apartamento.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { DespesaComponent } from './pages/despesa/despesa.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { HomeComponent } from './pages/home/home.component';
import { MoradorComponent } from './pages/morador/morador.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CondominioComponent,
    ApartamentoComponent,
    PagamentoComponent,
    DespesaComponent,
    FuncionarioComponent,
    ServicoComponent,
    TecnicoComponent,
    RelatorioComponent,
    HomeComponent,
    MoradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
