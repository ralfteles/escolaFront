import { Component, OnInit } from '@angular/core';
import { EscolaServiceService } from 'src/app/services/escola-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-escola',
  templateUrl: './escolaList.component.html',
  styleUrls: ['./escolaList.component.css']
})
export class EscolaListComponent implements OnInit {

  escolas: any;
  constructor(public escolaService: EscolaServiceService, private sanitizer: DomSanitizer) { }

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
