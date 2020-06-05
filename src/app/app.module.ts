import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaServiceService } from './services/escola-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EscolaListComponent } from './pages/escola/escolaList/escolaList.component';
import { TurmaListComponent } from './pages/turma/turmaList/turmaList.component';
import { TurmaAddComponent } from './pages/turma/turma-add/turma-add.component';
import { EscolaAddComponent } from './pages/escola/escola-add/escola-add.component';

@NgModule({
  declarations: [
    AppComponent,
    EscolaListComponent,
    TurmaListComponent,
    TurmaAddComponent,
    EscolaAddComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule   
  ],
  providers: [EscolaServiceService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
