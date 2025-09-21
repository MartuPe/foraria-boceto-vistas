import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

// Iconos
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LucideAngularModule,
  Mail,
} from 'lucide-angular';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ Eye, EyeOff, ArrowLeft, Mail }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
