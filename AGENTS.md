# Estructura del proyecto

- Proyecto JS vanilla moderno, ESM, legible, librerías pequeñas (a ser posible sin dependencias).
- Usamos WebComponents nativos en lugar de componentes de otros frameworks. Usaremos APIs modernas como CSSStyleSheet, setHTMLUnsafe() e imports attributes con "with".
- Utilizaremos "servor" como servidor local de desarrollo con "npm run dev".
- Los archivos fuentes, incluido el punto de entrada "index.html" deben estar dentro de "src/"
- Preferiremos un fichero ".test.js" en la misma ubicación de cada ".js". No usar carpeta global "tests/".
- La carpeta "src/components/" incluirá los componentes. Si son varios archivos, los guardaremos en subcarpetas relacionadas.
- Los estilos globales y clases de utilidad se guardarán en una carpeta "src/css" y un fichero "index.css". Se preferirá estilos locales al componente siempre que se pueda.
- Intentar evitar uso de carpeta "src/utils". Usar "src/modules" para módulos JS globales o de utilidad.
- La ruta de "assets" se llamará "public".
