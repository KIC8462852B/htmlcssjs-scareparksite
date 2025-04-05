# 🏆 Terrifier Terror Park Website M04-UF1

![Terrifier Terror Park Banner](https://via.placeholder.com/1200x400?text=Terrifier+Terror+Park)

## Description

Terrifier Terror Park es un parque de atracciones de terror ficticio basado en la saga de películas *Terrifier*. El objetivo del sitio es mostrar todo lo que ofrece el parque y animar a los visitantes a vivir experiencias extremas y únicas en un entorno que se aleja de lo convencional.

## Descripción del Proyecto

Este proyecto fue desarrollado utilizando **HTML**, **CSS** y **JavaScript** en una sola página. La estructura principal del sitio incluye:

- **Header:** Con logo y menú de navegación.
- **4 Secciones:** Cada una con contenido interactivo.
- **Footer:** Con atribuciones, enlaces a redes sociales, y datos del año y colegio.

## Secciones

### Inicio
- **Video de Fondo:** Se reproduce automáticamente un video (trailer de la película) para ambientar al usuario desde el primer instante.
- **Figcaption:** Incluye una breve descripción sobre el video.

### Información y Entradas
- **Opciones de Entradas:**  
  - **Entrada General:** Ideal para los amantes de la emoción.
  - **Terrifier Express:** Entrada con acceso prioritario y beneficios adicionales.
  - **Experiencia VIP:** Acceso exclusivo con contenido y zonas especiales.
- **Interactividad:**  
  - En la versión de escritorio, se activa una animación al pasar el cursor.
  - En la versión móvil, las animaciones se mantienen fijas.

### Atracciones
- **Descripción:**  
  Se muestran diversas atracciones interactivas como:
  - Asilo
  - Bosque Canibal
  - Laberinfier
  - Circoloco
  - Espejismos
- **Overlay Interactivo:**  
  Al hacer clic en cualquier tarjeta (en mobile, tablet o desktop), se despliega un overlay que ocupa toda la pantalla. Para cerrarlo, basta con hacer clic en cualquier punto fuera del overlay.

### Contacto
- **Formulario de Contacto:**  
  El formulario incluye campos para:
  - Nombre
  - Email
  - Motivo del contacto
  - Mensaje
- **Lógica en JavaScript:**  
  - Validación de campos.
  - Almacenamiento de datos en localStorage.
  - Mensaje de confirmación en caso de envío exitoso.

### Footer
- **Contenido:**  
  Incluye atribuciones de recursos (iconos y fondos), enlaces a redes sociales (sin linkear), el año del proyecto y datos del colegio.

## Responsive Design

El sitio se ha diseñado para ser completamente responsive, adaptándose a diferentes dispositivos:
- **Mobile:** Diseño en columnas que se adapta a pantallas pequeñas.
- **Tablet:** Ajuste de columnas y elementos interactivos.
- **Desktop:** Diseño amplio con animaciones al pasar el cursor.

## Tecnologías Utilizadas

- **HTML:** Estructura del contenido.
- **CSS:** Estilización, animaciones y diseño responsivo.
- **JavaScript:** Interactividad y validaciones del formulario.
- **Google Fonts:** Para importar las tipografías temáticas.
- **LocalStorage:** Para el almacenamiento temporal de datos del formulario.

## Atribuciones

- **Iconos y Fondos:** Se han utilizado recursos gráficos con las debidas atribuciones, incluidas en el footer del sitio.
- **Recursos Multimedia:** Videos e imágenes de fuentes libres o con atribución.

## Instalación y Uso

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu_usuario/terrifier-terror-park.git
