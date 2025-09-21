import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';

// Iconos - Login y Sidebar
import {
  ArrowLeft,
  Eye,
  EyeOff,
  LucideAngularModule,
  Mail,
  // Iconos del Sidebar
  MessageSquare,
  CreditCard, 
  Calendar,
  Vote,
  Users,
  Bot,
  FileText,
  Settings,
  ChevronRight,
  ChevronDown,
  X,
  Home,
  Shield,
  Wrench,
  Coffee,
  Car,
  MessageCircle,
  Video
} from 'lucide-angular';

@NgModule({
  declarations: [AppComponent, LoginComponent, SidebarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LucideAngularModule.pick({ 
      // Iconos del Login
      Eye, EyeOff, ArrowLeft, Mail,
      // Iconos del Sidebar
      MessageSquare, CreditCard, Calendar, Vote, Users, Bot, FileText,
      Settings, ChevronRight, ChevronDown, X, Home, Shield, Wrench,
      Coffee, Car, MessageCircle, Video
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}