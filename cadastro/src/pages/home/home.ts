import { AboutPage } from '../about/about';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  email : any;
  constructor(public navCtrl: NavController) {

  }
    navegar(){
      //passando parametros para a nova pagina
      this.navCtrl.push(AboutPage, {
        email : this.email
      });
  }
}