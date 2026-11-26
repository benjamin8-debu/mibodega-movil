/**
 * =====================================================================
 *  src/app/app.routes.ts · MAPA DE PANTALLAS (rutas)
 * ---------------------------------------------------------------------
 *  Cada objeto dice: "cuando la dirección sea X, muestra la página Y".
 *  loadComponent + import(): la página se descarga recién cuando se
 *  necesita (carga perezosa / lazy loading) → la app abre más rápido.
 * =====================================================================
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: '',                 // dirección vacía (al abrir la app)…
    redirectTo: 'inicio',     // …redirige a /inicio
    pathMatch: 'full',
  },
];
