import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage } from '../list/list';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }

  start = function(name,surname)
  {
    console.log(name);
    if( name == null || name == '' || surname == null || surname == '')
    {
      const toast = this.toastCtrl.create({
        message: 'You did not enter all the details!',
        showCloseButton: true,
        closeButtonText: 'Close',
        position: 'middle'

      });
      toast.present();
    }else {
      arr.push(name);
      arr.push(surname); 
      this.navCtrl.push(ListPage);
      console.log(arr);
    }
  
  }
 
} 

var arr = [];
export default arr;


