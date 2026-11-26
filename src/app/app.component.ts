/**
 * =====================================================================
 *  src/app/app.component.ts · COMPONENTE RAÍZ (el "marco" de toda la app)
 * ---------------------------------------------------------------------
 *  <ion-app>            → contenedor obligatorio de toda app Ionic
 *  <ion-router-outlet>  → "ventana" donde se dibuja la pantalla actual
 *                         según la ruta (/inicio, /productos, …)
 *  Analogía: es el marco de un cuadro; el router cambia la pintura de adentro.
 * =====================================================================
 */
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',                       // etiqueta que se usa en index.html: <app-root>
  template: `
    <ion-app>
      <ion-router-outlet></ion-router-outlet>
    </ion-app>
  `,
  imports: [IonApp, IonRouterOutlet],         // componentes Ionic que usa ESTA plantilla
})
export class AppComponent {}
