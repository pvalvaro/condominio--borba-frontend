import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//rotas das paginas
import { HomeComponent } from './pages/home/home.component';
import { CondominioComponent } from './pages/condominio/condominio.component';
import { ApartamentoComponent } from './pages/apartamento/apartamento.component';
import { MoradorComponent } from './pages/morador/morador.component';
import { PagamentoComponent } from './pages/pagamento/pagamento.component';
import { DespesaComponent } from './pages/despesa/despesa.component';
import { FuncionarioComponent } from './pages/funcionario/funcionario.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { TecnicoComponent } from './pages/tecnico/tecnico.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'condominio', component: CondominioComponent},
  {path: 'apartamento', component: ApartamentoComponent},
  {path: 'morador', component: MoradorComponent},
  {path: 'pagamento', component: PagamentoComponent},
  {path: 'despesa', component: DespesaComponent},
  {path: 'funcionario', component: FuncionarioComponent},
  {path: 'servico', component: ServicoComponent},
  {path: 'tecnico', component: TecnicoComponent},
  {path: 'relatorio', component: RelatorioComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
