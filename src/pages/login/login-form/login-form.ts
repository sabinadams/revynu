import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent implements OnInit{

  constructor(public navCtrl: NavController) {}

  @Output() viewSwap = new EventEmitter();
  @Input() _authService: any;
  @Input() TabsPage: any;
  @Input() Alerts: any;
  @Input() Loader: any;
  
  credentials = {
    username: '',
    password: ''
  };

  ngOnInit(){
    if(localStorage.getItem('user')){
      this.navCtrl.push(this.TabsPage)
    }
  }

  changeView(view){
    this.viewSwap.emit(view);
  }

  login(){
    let loader = this.Loader.create({
      content: "Please wait..."
    });
    loader.present();
    this._authService.login(this.credentials).subscribe( res => {
      loader.dismiss();
      if(res.status == 200){
        localStorage.setItem('user', JSON.stringify(res.user));
        this.navCtrl.push(this.TabsPage);
      } else {
        this.showAlert('', res.error)
      }
    });
  }


  showAlert(title, body) {
    let alert = this.Alerts.create({
      title: title,
      subTitle: body,
      buttons: ['OK']
    });
    alert.present();
  }

}
