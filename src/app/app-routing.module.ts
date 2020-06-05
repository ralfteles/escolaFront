import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscolaComponent } from './escola/escola/escola.component';
import { TurmaComponent } from './turma/turma/turma.component';
import { EscolaAddComponent } from './escola/escola-add/escola-add.component';
import { TurmaAddComponent } from './turma/turma-add/turma-add.component';


const routes: Routes = [
  { path: 'escola', component: EscolaComponent },
  { path: '', redirectTo: '/escola', pathMatch: 'full' },
  { path: 'escolaAdd', component: EscolaAddComponent },
  { path: 'turma/:id', component: TurmaComponent },
  { path: 'turmaAdd/:id', component: TurmaAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
