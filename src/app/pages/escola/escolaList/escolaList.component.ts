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

  saveFile(url, filename) {
    debugger
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(e) {
      if (this.status == 200) {
        const blob = this.response;
        const a = document.createElement("a");
        document.body.appendChild(a);
        const blobUrl = window.URL.createObjectURL(blob);
        a.href = blobUrl;
        a.download = filename;
        a.click();
        setTimeout(() => {
          window.URL.revokeObjectURL(blobUrl);
          document.body.removeChild(a);
        }, 0);
      }
    };
    xhr.send();
  }



 

}
