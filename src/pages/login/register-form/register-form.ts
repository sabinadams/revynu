import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})

export class RegisterFormComponent {
  constructor(public navCtrl: NavController) {}
  @Output() viewSwap = new EventEmitter();
  @Input() _authService: any;
  @Input() TabsPage: any;
  @Input() Alerts: any;
  @Input() Loader: any;

  data = {
  	username: '',
  	email: '',
  	password: '',
  	password_confirm: ''
  };

  changeView(view){
  	this.viewSwap.emit(view);
  }

  register(){
    let loader = this.Loader.create({
      content: "Please wait..."
    });
    loader.present();
  	this._authService.register(this.data).subscribe( res => {
      if(res.status == 200){
        loader.dismiss()
        let user = {username: this.data.username, password: this.data.password};
        this._authService.login(user).subscribe( res => {
            if(res.status == 200){
              localStorage.setItem('user', JSON.stringify(res.user));
              this.navCtrl.push(this.TabsPage);
            }
        })
      } else {
        this.showAlert('', res.error);
      }
    })
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
