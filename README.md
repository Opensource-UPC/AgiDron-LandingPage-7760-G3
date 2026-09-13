# AgriDron Solutions

Landing page estática para una plataforma de planificación y monitoreo de operaciones de fumigación agrícola mediante drones.

El proyecto presenta la propuesta de valor de AgriDron Solutions, sus funcionalidades principales, el flujo de uso y un recorrido visual para solicitar una demo.

## Características

- Landing page responsive con navegación por secciones.
- Hero principal con imagen agrícola y llamados a la acción.
- Beneficios destacados:
  - Reduce costos.
  - Aumenta la productividad.
  - Protege al equipo.
- Sección de funcionalidades con iconos SVG personalizados:
  - Planificación de misiones.
  - Monitoreo en tiempo real.
  - IA predictiva.
- Sección "Cómo funciona" con cuatro pasos del flujo operativo.
- Sección "Para quién" con perfiles de usuarios objetivo.
- Sección "Nuestro equipo".
- Página independiente de inicio de sesión.
- Página independiente para solicitar una demo.
- Validación personalizada del correo electrónico.
- Popup de confirmación después de enviar una solicitud válida.
- Navegación desde la confirmación hacia el login o la página de inicio.

## Estructura del proyecto

```text
AgiDron-LandingPage-7760-G3/
├── index.html                 # Landing page principal
├── login.html                 # Página de inicio de sesión
├── registro.html              # Formulario para solicitar una demo
├── README.md                  # Documentación del proyecto
├── LICENSE
├── images/
│   └── hero-agricultura.jpg   # Imagen principal del hero
└── styles/
    └── styles.css             # Estilos compartidos de todo el proyecto
```

## Páginas

### `index.html`

Página principal de AgriDron Solutions. Incluye:

- Header con logo, navegación y botón "Solicitar Demo".
- Hero con la propuesta principal de la plataforma.
- Beneficios de la solución.
- Funcionalidades principales.
- Flujo de trabajo en cuatro pasos.
- Perfiles de usuarios objetivo.
- Información del equipo.
- Footer y enlaces complementarios.

El botón "Solicitar Demo" dirige a `login.html`.

### `login.html`

Página de acceso visual para usuarios existentes.

Incluye:

- Campo de correo electrónico.
- Campo de contraseña.
- Opción "Recordarme".
- Enlace de recuperación de contraseña como placeholder visual.
- Enlace "Solicita una demo" hacia `registro.html`.
- Validación personalizada del correo electrónico.

El formulario no tiene conexión con un backend y no inicia una sesión real.

### `registro.html`

Página para solicitar una demo.

Incluye los campos:

- Nombre completo.
- Empresa.
- Correo electrónico.
- Teléfono.

Cuando todos los campos están completos y el correo tiene un formato válido, se muestra un popup con el mensaje de confirmación. El popup ofrece:

- "Volver al login": dirige a `login.html`.
- "Ir al inicio": dirige a `index.html`.

El popup también puede cerrarse pulsando sobre el fondo atenuado.

## Navegación

La navegación principal utiliza anchors internos:

| Enlace | Destino |
| --- | --- |
| Inicio | `#inicio` |
| Funcionalidades | `#features` |
| Cómo Funciona | `#how-it-works` |
| Para Quién | `#audiences` |
| Nuestro Equipo | `#team-section` |
| Solicitar Demo | `login.html` |

## JavaScript

El JavaScript está incluido dentro de etiquetas `<script>` al final de `login.html` y `registro.html`. No existe actualmente un archivo JavaScript externo.

### Validación del login

`login.html` utiliza una expresión regular para comprobar que el correo tenga un formato válido. Se desactiva la validación nativa del navegador con `novalidate` y se muestra el mensaje personalizado:

> Introduce un correo electrónico válido.

También se actualizan los atributos `aria-invalid` y `aria-describedby` para mejorar la accesibilidad del mensaje de error.

### Solicitud de demo

`registro.html` comprueba que los campos de nombre, empresa y teléfono no estén vacíos. Después valida el formato del correo. Si todo es correcto:

1. Se evita el envío real del formulario.
2. Se abre el popup de confirmación.
3. Se actualiza `aria-hidden` para reflejar el estado del popup.

## Diseño y estilos

Todos los estilos están centralizados en `styles/styles.css`.

El diseño utiliza:

- Fuente Montserrat cargada desde Google Fonts.
- Paleta principal basada en verdes agrícolas.
- Variables CSS para colores reutilizables.
- Gradientes suaves.
- Cards con bordes redondeados y sombras.
- Iconos SVG dibujados directamente en el HTML.
- Estados hover para botones y enlaces.
- Diseño responsive mediante media queries.
- Fondo con imagen agrícola en el hero.
- Modal con backdrop, desenfoque y animación de entrada.

Las clases `.auth-shell`, `.auth-card`, `.auth-form` y `.auth-button` son compartidas por las páginas de autenticación. Las clases `.confirmation-modal`, `.confirmation-dialog` y `.confirmation-button` controlan el popup de registro.

## Cómo ejecutar el proyecto

No se requieren dependencias, instalación de paquetes ni proceso de compilación.

### Opción 1: abrir directamente

Abre `index.html` en un navegador web.

### Opción 2: entrar por medio del link en github

En el repositorio de Github puedes encontrar la pagina subida en la seccion de deployments

## Estado actual

Este proyecto es un prototipo frontend estático. Actualmente:

- Los formularios no envían datos a un servidor.
- El login no autentica usuarios.
- La recuperación de contraseña es un enlace visual.
- La solicitud de demo solo muestra una confirmación local.
- No existe persistencia de usuarios ni conexión con una base de datos.

Para convertirlo en una aplicación funcional sería necesario añadir un backend, endpoints de autenticación, almacenamiento seguro de datos y validación del lado del servidor.

## Accesibilidad y experiencia de usuario

- Se utilizan etiquetas `label` asociadas a los inputs.
- Los mensajes de error se anuncian mediante `aria-live`.
- El estado de error se refleja con `aria-invalid`.
- El popup utiliza `role="dialog"` y `aria-modal="true"`.
- Los iconos decorativos se marcan con `aria-hidden="true"` cuando corresponde.
- La navegación interna utiliza desplazamiento suave.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla
- SVG inline
- Google Fonts: Montserrat

## Mantenimiento

Para modificar el contenido de la landing page, edita `index.html`.

Para modificar el login o el formulario de demo, edita `login.html` o `registro.html` respectivamente.

Para modificar colores, espaciado, responsive, botones, cards o el modal, edita `styles/styles.css`.

Las imágenes nuevas deben colocarse en `images/` y utilizar rutas relativas desde los archivos HTML o CSS.
