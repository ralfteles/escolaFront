import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { EscolaServiceService } from 'src/app/services/escola-service.service';

@Component({
  selector: 'app-escola-add',
  templateUrl: './escola-add.component.html',
  styleUrls: ['./escola-add.component.css']
})
export class EscolaAddComponent implements OnInit {

  formEscola: FormGroup;
  constructor(
    public escolaService: EscolaServiceService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.montarForm();
  }


  montarForm() {
    this.formEscola = this.formBuilder.group({
      descricao: ["", Validators.required]
    });
  }

  adicionarEscola() {
    this.escolaService.AddEscola(this.formEscola.value).subscribe(
      (res: any) => {
        this.formEscola.reset(); 
        console.log(res.mensagem)
      }, 
      (error) => { }
    );
  }

}
