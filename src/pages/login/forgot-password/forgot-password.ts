import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'forgot-password',
  templateUrl: 'forgot-password.html'
})
export class ForgotPasswordComponent {

  constructor(public navCtrl: NavController) {}

  @Output() viewSwap = new EventEmitter();
  @Input() _authService: any;
  @Input() TabsPage: any;
  @Input() Alerts: any;
  @Input() Loader: any;

  email: string;
  hasCode = false;

  newPassData = {
    code: '',
    newPass: '',
    newPassConfirm: ''
  };

  changeView(view){
    this.viewSwap.emit(view);
  }

  sendEmail(){
    let loader = this.Loader.create({
      content: "Please wait..."
    });
    loader.present();
    this._authService.forgotPasswordEmail(this.email).subscribe( res => {
      loader.dismiss();
      if(res.status == 200){
        this.hasCode = true;
        this.showAlert('', res.message)
      } else {
        this.showAlert('', res.error);
      }
    });
  }

  changePassword(){
    let loader = this.Loader.create({
      content: "Please wait..."
    });
    loader.present();
    this._authService.changePassword(this.newPassData).subscribe( res =>  {
      loader.dismiss();
      if(res.status == 200){
        this.showAlert('', res.message);
        this.viewSwap.emit('login');
      } else {
        this.showAlert('', res.error);
        if(res.status != 400){
          this.hasCode = false;
        }
        this.newPassData = {
          code: '',
          newPass: '',
          newPassConfirm: ''
        };
        this.email = ''
      }
    })
  }
  
  toggleCodeInput(){
    this.hasCode = !this.hasCode;
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