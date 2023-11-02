import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YuvrajComponent } from './yuvraj/yuvraj.component';
import { PrabhComponent } from './prabh/prabh.component';
import { ArinComponent } from './arin/arin.component';
import { KaranComponent } from './karan/karan.component';
import { UserAuthModule } from './user-auth/user-auth.module';


@NgModule({
  declarations: [AppComponent, YuvrajComponent, PrabhComponent, ArinComponent, KaranComponent],
  imports: [BrowserModule,
  UserAuthModule,

   ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

 