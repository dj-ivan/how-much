import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { fadeInAnimation } from '../../app/_animations/index';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CacheService } from '../../services/cache-service';
import { HowLong } from '../how-long/how-long';

@Component({
  selector: 'page-home',
  animations: [fadeInAnimation],
  templateUrl: 'how-much.html',
  host: { '[@fadeInAnimation]': '' }
})
export class HowMuch {
  public userForm: FormGroup;
  public textBoxVisible: boolean;

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder, private cache: CacheService) {
    this.textBoxVisible = false;
    setTimeout(() => {
      this.showTextBox();
    }, 2500);
    this.userForm = this.formBuilder.group({
      // firstName: ['', Validators.required],
      // lastName: [''],
      // userName: [''],
      // email: [''],
      // password: [''],
      budgetAmount: ['', Validators.required]
    });
  }

  public showTextBox() {
    this.textBoxVisible = true;
  }

  public submitForm() {
    this.cache.budgetAmount = this.userForm.value;
    this.navCtrl.push(HowLong);
  }
}
