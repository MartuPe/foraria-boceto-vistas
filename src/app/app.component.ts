import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Foraria Boceto Vistas';
  
  // Estado de la aplicación para el sidebar
  currentActiveItem = 'reclamos';
  sidebarOpen = true;
  currentUser: any = null;

  onLogin(credentials: any): void {
    console.log('Login recibido:', credentials);
    
    // Crear objeto de usuario después del login exitoso
    this.currentUser = {
      username: credentials.username,
      name: credentials.isAdmin ? 'Admin Usuario' : 'Usuario Normal',
      department: credentials.isAdmin ? 'Administración' : 'Depto. 4B'
    };

    // Lógica adicional según el tipo de usuario
    if (credentials.isAdmin) {
      console.log('Login de administrador');
      this.currentActiveItem = 'reclamos'; // Página por defecto para admin
      // Redirigir a panel admin
    } else {
      console.log('Login normal');
      this.currentActiveItem = 'reclamos'; // Página por defecto para usuario normal
      // Redirigir a dashboard
    }
  }

  // Método para manejar clicks en el sidebar
  onSidebarItemClick(item: string): void {
    console.log('Sidebar item clicked:', item);
    this.currentActiveItem = item;
    
    // Aquí puedes agregar lógica adicional según el item seleccionado
    switch(item) {
      case 'reclamos':
        // Cargar vista de reclamos
        break;
      case 'expensas':
        // Cargar vista de expensas
        break;
      case 'calendario':
        // Cargar vista de calendario
        break;
      // ... etc para cada item del menú
    }
  }

  // Método para cerrar sidebar en mobile
  onSidebarClose(): void {
    this.sidebarOpen = false;
  }

  // Método para abrir sidebar (útil para un botón de hamburguesa en mobile)
  openSidebar(): void {
    this.sidebarOpen = true;
  }

  // Método para logout (opcional)
  onLogout(): void {
    this.currentUser = null;
    this.currentActiveItem = 'reclamos';
    console.log('Usuario deslogueado');
  }
}