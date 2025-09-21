import { Component, EventEmitter, Output } from '@angular/core';

// Interface para las credenciales (equivalente a TypeScript en React)
interface LoginCredentials {
  username: string;
  password: string;
  rememberMe: boolean;
  isAdmin?: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Output (equivalente a la prop onLogin de React)
  @Output() loginEvent = new EventEmitter<LoginCredentials>();

  // Estado del componente (equivalente a useState en React)
  username: string = '';
  password: string = '';
  rememberMe: boolean = false;
  showPassword: boolean = false;
  isLoading: boolean = false;
  isRecoveryMode: boolean = false;
  recoveryEmail: string = '';
  recoverySuccess: boolean = false;

  // Errores (equivalente a useState para errores)
  errors: {
    username?: string;
    password?: string;
    recoveryEmail?: string;
  } = {};

  // Método para validar formulario
  validateForm(): boolean {
    const newErrors: { username?: string; password?: string } = {};

    if (!this.username.trim()) {
      newErrors.username = 'El usuario es requerido';
    }

    if (!this.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (this.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    this.errors = newErrors;
    return Object.keys(newErrors).length === 0;
  }

  // Método para manejar submit del formulario
  handleSubmit(event: Event): void {
    event.preventDefault();

    if (!this.validateForm()) return;

    this.isLoading = true;

    // Simular llamada a API (setTimeout equivale al setTimeout de React)
    setTimeout(() => {
      this.loginEvent.emit({
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe,
        isAdmin: false,
      });
      this.isLoading = false;
    }, 1500);
  }

  // Login de demostración
  handleDemoLogin(): void {
    this.username = 'admin@foraria.com';
    this.password = 'demo123';
    this.rememberMe = true;
  }

  // Login de administrador
  handleAdminLogin(): void {
    this.isLoading = true;

    setTimeout(() => {
      this.loginEvent.emit({
        username: 'admin@foraria.com',
        password: 'admin123',
        rememberMe: true,
        isAdmin: true,
      });
      this.isLoading = false;
    }, 1500);
  }

  // Cambiar a modo recuperación
  handleRecovery(): void {
    this.isRecoveryMode = true;
  }

  // Volver al login desde recuperación
  backToLogin(): void {
    this.isRecoveryMode = false;
    this.recoveryEmail = '';
    this.recoverySuccess = false;
    this.errors = {};
  }

  // Submit de recuperación
  handleRecoverySubmit(event: Event): void {
    event.preventDefault();

    if (!this.recoveryEmail.trim()) {
      this.errors = { recoveryEmail: 'El email es requerido' };
      return;
    }

    this.isLoading = true;

    setTimeout(() => {
      this.recoverySuccess = true;
      this.isLoading = false;
    }, 1500);
  }

  // Toggle mostrar/ocultar contraseña
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  // Limpiar errores cuando el usuario empieza a escribir
  clearUsernameError(): void {
    if (this.errors.username) {
      this.errors = { ...this.errors, username: undefined };
    }
  }

  clearPasswordError(): void {
    if (this.errors.password) {
      this.errors = { ...this.errors, password: undefined };
    }
  }

  clearRecoveryEmailError(): void {
    if (this.errors.recoveryEmail) {
      this.errors = { ...this.errors, recoveryEmail: undefined };
    }
  }
}
