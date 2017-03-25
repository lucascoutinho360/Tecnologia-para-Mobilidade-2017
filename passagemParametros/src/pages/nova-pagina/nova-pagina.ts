import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NovaPagina page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-nova-pagina',
  templateUrl: 'nova-pagina.html'
})
export class NovaPaginaPage {
  //declaracao das variaveis
 primeiroParametro : number;
 segundoParametros : number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
        //recuperando os parametros enviados pelo botao
    this.primeiroParametro = navParams.get("primeiroParametro");
    this.segundoParametros = navParams.get("segundoParametros");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovaPaginaPage');
  }

}
