# Bot de Limpieza de Gmail

Este script de Google Apps Script te ayuda a limpiar tu bandeja de entrada eliminando o archivando automáticamente los correos de un remitente específico.

## Configuración

1. Abre el archivo `Code.js`.
2. Busca la sección `CONFIG` al principio del archivo.
3. Edita las variables según tus necesidades:

```javascript
var CONFIG = {
  REMITENTE: 'newsletter@molesto.com', // Poner aquí el email a filtrar
  ACCION: 'TRASH', // 'TRASH' para borrar, 'ARCHIVE' para archivar
  MAX_HILOS: 100 // Cantidad de correos a procesar por vez
};
```

## Instalación

### Opción 1: Copiar y Pegar (Recomendado para principiantes)
1. Ve a [script.google.com](https://script.google.com/).
2. Crea un nuevo proyecto.
3. Copia todo el código de `Code.js` de este repositorio.
4. Pégalo en el editor de Google Apps Script (reemplazando lo que haya).
5. Guarda el proyecto.

### Opción 2: Usar CLASP
Si eres desarrollador y prefieres la línea de comandos:
```bash
npm install @google/clasp -g
clasp login
clasp create --title "Gmail Cleaner"
clasp push
```

## Uso

1. En el editor de Apps Script, selecciona la función `limpiarCorreos` en la barra de herramientas superior.
2. Haz clic en **Ejecutar**.
3. La primera vez, Google te pedirá permisos para acceder a tu Gmail. Acepta los permisos.
4. Revisa el "Registro de ejecución" para ver los resultados.

## Automatización (Opcional)

Si quieres que esto se ejecute automáticamente cada día:
1. En el editor, ve al icono del reloj ("Activadores") a la izquierda.
2. Haz clic en "+ Añadir activador".
3. Configura:
   - Función: `limpiarCorreos`
   - Fuente del evento: `Según tiempo`
   - Tipo de activador: `Temporizador por días` (o lo que prefieras).

---
**Nota:** Ten cuidado al usar la acción 'TRASH', ya que enviará los correos a la papelera.
