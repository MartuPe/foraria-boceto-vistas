import { Component, Input, Output, EventEmitter } from '@angular/core';

// Interfaces
interface User {
  username: string;
  name: string;
  department: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  
  // Inputs (equivalente a props en React)
  @Input() activeItem: string = '';
  @Input() isOpen: boolean = true;
  @Input() user: User | null = null;

  // Outputs (equivalente a callbacks en React)
  @Output() itemClick = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  // Estado del componente (equivalente a useState)
  forosExpanded: boolean = false;

  // Datos del menú
  menuItems = [
    { id: 'reclamos', label: 'Reclamos', icon: 'message-square' },
    { id: 'expensas', label: 'Expensas', icon: 'credit-card' },
    { id: 'calendario', label: 'Calendario', icon: 'calendar' },
    { id: 'votaciones', label: 'Votaciones', icon: 'vote' },
    { id: 'reuniones', label: 'Reuniones', icon: 'video' },
    { id: 'documentos', label: 'Documentos', icon: 'file-text' },
    { id: 'chatbot', label: 'Chatbot', icon: 'bot' }
  ];

  forosCategorias = [
    { id: 'foros-general', label: 'General', icon: 'message-circle' },
    { id: 'foros-administracion', label: 'Administración', icon: 'home' },
    { id: 'foros-seguridad', label: 'Seguridad', icon: 'shield' },
    { id: 'foros-mantenimiento', label: 'Mantenimiento', icon: 'wrench' },
    { id: 'foros-espacios-comunes', label: 'Espacios Comunes', icon: 'coffee' },
    { id: 'foros-garage', label: 'Garage y Parking', icon: 'car' }
  ];

  // Propiedades computadas
  get isMobile(): boolean {
    // Por ahora simplificamos, después crearemos el service
    return window.innerWidth < 768;
  }

  get customization(): any {
    // Por ahora un valor fijo, después crearemos el service
    return { logo: 'Foraria' };
  }

  // Métodos
  handleItemClick(item: string): void {
    if (item === 'foros') {
      this.forosExpanded = !this.forosExpanded;
      if (!this.forosExpanded) {
        this.itemClick.emit('foros-general'); // Default to general when opening
      }
    } else {
      this.itemClick.emit(item);
      if (this.isMobile) {
        this.close.emit();
      }
    }
  }

  handleForoCategoryClick(categoryId: string): void {
    this.itemClick.emit(categoryId);
    if (this.isMobile) {
      this.close.emit();
    }
  }

  onClose(): void {
    this.close.emit();
  }

  // Métodos auxiliares para el template
  isItemActive(itemId: string): boolean {
    return this.activeItem === itemId;
  }

  isForosActive(): boolean {
    return this.activeItem.startsWith('foros') || this.forosExpanded;
  }

  isCategoryActive(categoryId: string): boolean {
    return this.activeItem === categoryId;
  }

  getUserInitials(): string {
    if (this.user?.name) {
      return this.user.name.substring(0, 2).toUpperCase();
    }
    return 'AB';
  }

  getUserName(): string {
    return this.user?.name || 'Administrador';
  }

  getUserDepartment(): string {
    return this.user?.department || 'Depto. 4B';
  }
}