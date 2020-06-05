import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscolaComponent } from './escola/escola/escola.component';
import { TurmaComponent } from './turma/turma/turma.component';
import { TurmaAddComponent } from './turma/turma-add/turma-add.component';
import { EscolaAddComponent } from './escola/escola-add/escola-add.component';
import { EscolaServiceService } from './services/escola-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EscolaComponent,
    TurmaComponent,
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
