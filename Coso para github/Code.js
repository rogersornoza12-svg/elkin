/**
 * CONFIGURACIÓN
 * Define aquí el remitente y la acción a realizar.
 */
var CONFIG = {
    REMITENTE: 'ejemplo@boletin.com', // El correo que quieres limpiar
    ACCION: 'TRASH', // Opciones: 'TRASH' (Papelera) o 'ARCHIVE' (Archivar)
    MAX_HILOS: 100 // Número máximo de hilos a procesar por ejecución (para evitar límites de tiempo)
};

/**
 * Función principal para limpiar correos.
 * Ejecuta esta función para iniciar el proceso.
 */
function limpiarCorreos() {
    var query = 'from:' + CONFIG.REMITENTE;

    // Si solo queremos procesar los que no están en papelera ni archivados (opcional, ajusta según necesidad)
    // query += ' -in:trash -in:chats'; 

    Logger.log('Buscando correos de: ' + CONFIG.REMITENTE);

    try {
        var threads = GmailApp.search(query, 0, CONFIG.MAX_HILOS);

        if (threads.length === 0) {
            Logger.log('No se encontraron correos de este remitente.');
            return;
        }

        Logger.log('Se encontraron ' + threads.length + ' hilos. Procesando...');

        if (CONFIG.ACCION === 'TRASH') {
            GmailApp.moveThreadsToTrash(threads);
            Logger.log('Hilos movidos a la papelera.');
        } else if (CONFIG.ACCION === 'ARCHIVE') {
            GmailApp.moveThreadsToArchive(threads);
            Logger.log('Hilos archivados.');
        } else {
            Logger.log('Acción no reconocida. Usa "TRASH" o "ARCHIVE".');
        }

    } catch (e) {
        Logger.log('Ocurrió un error: ' + e.toString());
    }
}

/**
 * Crea un menú en la interfaz de Google Sheets (si usas este script vinculado a una hoja).
 */
function onOpen() {
    var ui = SpreadsheetApp.getUi();
    // Solo intenta crear el menú si estamos en un contexto que lo soporte (Sheets, Docs, Slides)
    try {
        ui.createMenu('Bot Limpieza')
            .addItem('Ejecutar Limpieza', 'limpiarCorreos')
            .addToUi();
    } catch (e) {
        // Si se ejecuta desde el editor de script directamente, esto no es crítico.
        Logger.log('Menú no creado (probablemente ejecutando desde editor): ' + e.toString());
    }
}
