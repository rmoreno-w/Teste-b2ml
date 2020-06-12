import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlBase } from 'src/environments/environment';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'TesteB2';
  filmes: any;
  //personagens: any;
  //planetas: any;
  //naves: any;
  //veiculos: any;
  //especies: any;
  


  constructor(private http: HttpClient, public matDialog: MatDialog) {

    // Cria requisição HTTP-Get para listar os filmes
    this.http.get(urlBase + 'films').subscribe((res:any)=>{
      console.log('Response -> ', res.results);
      this.filmes = res.results; //Seta a lista de filmes com o retorno dos filmes
    });
  }

//  listarMais(nf){
//    this.http.get(urlBase + 'films/' + nf).subscribe((res:any))=>{
//      console.log('Response -> ', res.results);
//      this.personagens = res.results.characters; //Seta a lista de personagens de acordo com o retorno do filme n
//      this.planetas = res.results.planets; //Seta a lista de planetas de acordo com o retorno do filme n
//      this.naves = res.results.starships; //Seta a lista de naves de acordo com o retorno do filme n
//      this.veiculos = res.results.vehicles; //Seta a lista de veiculos de acordo com o retorno do filme n
//      this.especies = res.results.species; //Seta a lista de especies de acordo com o retorno do filme n
//    });
    
//  }


  openModal() {
    const dialogConfig = new MatDialogConfig();
    // Não fechar a janela clicando fora dela
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px"; 
    const modalDialog = this.matDialog.open(ModalComponent, dialogConfig);
  }
}