import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPageModule } from 'ionic-angular';
import { LogInPage } from './log-in';
import { LogInServiceProvider } from '../../providers/log-in-service/log-in-service';

@NgModule({
  declarations: [
    LogInPage,
  ],
  imports: [
    IonicPageModule.forChild(LogInPage),
  ],
  providers: [
    
  ],
})
export class LogInPageModule {}

