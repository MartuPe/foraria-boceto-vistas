import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foraria Boceto Vistas';

  onLogin(credentials: any): void {
    console.log('Login recibido:', credentials);
    
    // Aquí manejarías el login real, por ejemplo:
    if (credentials.isAdmin) {
      console.log('Login de administrador');
      // Redirigir a panel admin
    } else {
      console.log('Login normal');
      // Redirigir a dashboard
    }
  }
}