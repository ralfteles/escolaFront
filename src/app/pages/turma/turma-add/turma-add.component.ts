import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EscolaServiceService } from 'src/app/services/escola-service.service';
import { TurmaServiceService } from 'src/app/services/turma-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-turma-add',
  templateUrl: './turma-add.component.html',
  styleUrls: ['./turma-add.component.css']
})
export class TurmaAddComponent implements OnInit {

  escolaId: any;
  formTurma: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    public escolaService: EscolaServiceService,
    public formBuilder: FormBuilder,
    private turmaService: TurmaServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.escolaId = params['id'];
      this.montarForm();
    });
  }

  montarForm() {
    this.formTurma = this.formBuilder.group({
      nome: ["", Validators.required],
      vagas: ["", Validators.required],
      escolaId: [this.escolaId]
    });
  }

  adicionarTurma() {
    this.formTurma.value.escolaId = this.escolaId;
    this.turmaService.addTurma(this.formTurma.value).subscribe(
      (res: any) => {
        this.msgSucesso(res.mensagem);
        this.formTurma.reset(); 
        console.log(res.mensagem)
      }, 
      (error) => {
        this.msgErro(error.error);
       }
    );
  }

  
  msgSucesso(msg: string){
    Swal.fire({
      icon: 'success',
      title: msg
    })
  }

  msgErro(msg: string){
    Swal.fire({
      icon: 'error',
      title: msg
    })
  }

}
