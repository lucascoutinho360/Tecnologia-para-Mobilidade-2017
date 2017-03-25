import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { NovaPaginaPage } from '../nova-pagina/nova-pagina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  navegar(){
    //passando parametros para a nova pagina
    this.navCtrl.push(NovaPaginaPage, {
      primeiroParametro : "1",
      segundoParametros : "2"
    });
  
  }
}
