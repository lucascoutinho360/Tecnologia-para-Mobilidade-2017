import { ContactPage } from '../contact/contact';
import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
email :any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.email = navParams.get("email");

  }

    navegar2(){
    //passando parametros para a nova pagina
    this.navCtrl.push(ContactPage, {
      email : this.email
    });

}

}