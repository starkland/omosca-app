import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { UserPage } from './user';
import { LocalStorage } from '../../services/LocalStorage';

@NgModule({
  declarations: [
    UserPage,
  ],
  imports: [
    IonicPageModule.forChild(UserPage),
  ],
  providers: [
    LocalStorage,
  ],
  exports: [
    UserPage
  ]
})
export class UserPageModule {}
