/**
 * =====================================================================
 *  pages/inicio/inicio.page.ts · Primera pantalla de MiBodega (Semana 01)
 * ---------------------------------------------------------------------
 *  Un COMPONENTE de Angular tiene 3 partes:
 *    1. La clase TypeScript (este archivo): datos y acciones.
 *    2. La plantilla HTML (inicio.page.html): lo que se ve.
 *    3. Los estilos SCSS (inicio.page.scss): cómo se ve.
 *  Analogía: un muñeco de títere → la clase es quien lo mueve,
 *  el HTML es el muñeco y el SCSS es su ropa.
 * =====================================================================
 */
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';             // necesario para [(ngModel)] (enlace de doble vía)
import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
  IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonItem, IonInput, IonList, IonLabel, IonBadge,
} from '@ionic/angular/standalone';                        // cada componente Ionic se importa por separado
import { addIcons } from 'ionicons';                       // registra los íconos que vamos a usar
import { addCircle, removeCircle, storefront, logoAndroid, logoApple, globeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle,
    IonCardSubtitle, IonCardContent, IonButton, IonIcon, IonItem, IonInput, IonList, IonLabel, IonBadge,
  ],
})
export class InicioPage {
  /** Nombre que escribe el usuario. Está "enlazado" al <ion-input> con [(ngModel)] */
  nombre = '';

  /** Contador de clientes atendidos (un dato que cambia con los botones) */
  clientes = 0;

  /** Lista que se dibuja con @for en la plantilla */
  plataformas = [
    { icono: 'logo-android', nombre: 'Android', detalle: 'APK / App Bundle con Android Studio' },
    { icono: 'logo-apple', nombre: 'iOS', detalle: 'IPA con Xcode (requiere Mac)' },
    { icono: 'globe-outline', nombre: 'Web (PWA)', detalle: 'Se abre en cualquier navegador' },
  ];

  constructor() {
    // Registramos los íconos: así el SVG se incluye en la app y funciona sin internet
    addIcons({ addCircle, removeCircle, storefront, logoAndroid, logoApple, globeOutline });
  }

  /** Se ejecuta al tocar el botón "+" → (click)="sumar()" en el HTML */
  sumar(): void {
    this.clientes++;               // al cambiar el dato, Angular actualiza la pantalla solo
  }

  /** Botón "−": nunca baja de 0 */
  restar(): void {
    if (this.clientes > 0) {
      this.clientes--;
    }
  }

  /** Texto calculado: se recalcula cada vez que cambia "nombre" */
  get saludo(): string {
    return this.nombre.trim() ? `¡Hola, ${this.nombre.trim()}! 👋` : 'Escribe tu nombre';
  }
}
