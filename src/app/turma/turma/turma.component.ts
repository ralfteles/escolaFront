import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TurmaServiceService } from 'src/app/services/turma-service.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  escolaId: any;
  turmas: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private turmaService: TurmaServiceService) { }

  ngOnInit() {

    this.activatedRoute.params.subscribe(params => {
      this.escolaId = params['id'];
      this.obterTurmasDaEscola();
    });
  }

  obterTurmasDaEscola() {
    this.turmaService.obterTurmasDaEscola(this.escolaId).subscribe(
      (res: any) => {
        this.turmas = res;
      },
      (error) => {

      }
    );
  }

}
