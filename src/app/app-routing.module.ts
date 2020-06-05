import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolaListComponent } from './pages/escola/escolaList/escolaList.component';
import { EscolaAddComponent } from './pages/escola/escola-add/escola-add.component';
import { TurmaListComponent } from './pages/turma/turmaList/turmaList.component';
import { TurmaAddComponent } from './pages/turma/turma-add/turma-add.component';


const routes: Routes = [
  { path: 'escola', component: EscolaListComponent },
  { path: '', redirectTo: '/escola', pathMatch: 'full' },
  { path: 'escolaAdd', component: EscolaAddComponent },
  { path: 'turma/:id', component: TurmaListComponent },
  { path: 'turmaAdd/:id', component: TurmaAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
