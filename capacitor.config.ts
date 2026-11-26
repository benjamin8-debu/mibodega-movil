// capacitor.config.ts · Configuración de Capacitor (el "puente" entre la web y el celular)
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'pe.edu.iestpgilda.mibodega',   // identificador único de la app (como un DNI). Formato: dominio al revés
  appName: 'MiBodega',                   // nombre que aparece debajo del ícono en el celular
  webDir: 'www',                         // carpeta donde Angular deja la app compilada (ng build)
};

export default config;
