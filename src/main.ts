/**
 * =====================================================================
 *  src/main.ts · PUNTO DE ARRANQUE de la aplicación
 * ---------------------------------------------------------------------
 *  Es lo primero que se ejecuta. Como la llave de contacto del auto:
 *  enciende Angular, le dice qué componente mostrar primero (AppComponent)
 *  y qué "servicios de fábrica" usar (rutas, Ionic).
 * =====================================================================
 */
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    // Estrategia de Ionic: conserva las páginas visitadas en memoria para que "Atrás" sea instantáneo
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // Activa Ionic (estilos según la plataforma: Material en Android, iOS en iPhone)
    provideIonicAngular(),
    // Activa el sistema de rutas (pantallas). PreloadAllModules: precarga las páginas en segundo plano
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
}).catch((err) => console.error(err));   // si algo falla al arrancar, lo vemos en la consola (F12)
