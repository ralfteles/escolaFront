import { Component, OnInit } from '@angular/core';
import { EscolaServiceService } from 'src/app/services/escola-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-escola',
  templateUrl: './escola.component.html',
  styleUrls: ['./escola.component.css']
})
export class EscolaComponent implements OnInit {

  escolas: any;
  constructor(public escolaService: EscolaServiceService, private sanitizer: DomSanitizer) { }

  name = 'Angular 5';
  fileUrl;

  ngOnInit(){
    this.obterEscolas();
  }


  obterEscolas(){
    this.escolaService.ObterEscolas().subscribe(
      (res: any) => {
        this.escolas = res;
      },
      (error) => {

      }
    );
  }

}
