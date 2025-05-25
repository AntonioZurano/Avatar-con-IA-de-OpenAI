# Avatar con IA - Preferencias de Usuario

Este proyecto es una aplicación web que permite a los usuarios generar un avatar personalizado utilizando inteligencia artificial. El usuario puede seleccionar una categoría (hombre, mujer, animal u objeto) y el sistema generará un avatar estilo cartoon usando la API de OpenAI (DALL-E).

## Características

- Generación de avatares únicos mediante IA.
- Selección de categoría para personalizar el tipo de avatar.
- Interfaz sencilla y amigable.
- Indicador de carga mientras se genera el avatar.
- Manejo avanzado de errores para una mejor experiencia de usuario.

## Tecnologías utilizadas

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express
- **API:** OpenAI (DALL-E)
- **Dependencias:** express, axios, dotenv, nodemon

## Instalación

1. **Clona este repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Avatar-con-IA-de-OpenAI
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API de OpenAI:**

   ```plaintext
   OPENAI_API_KEY=tu_clave_de_api
   ```

4. **Inicia el servidor:**

   ```bash
   npm start
   ```

5. **Abre tu navegador y ve a `http://localhost:3005` para ver la aplicación en acción.**
6. **Para detener el servidor, presiona `Ctrl + C` en la terminal.**

## Uso

La aplicación es fácil de usar. Simplemente sigue estos pasos:

1. Abre la aplicación en tu navegador.
2. Selecciona la categoría de avatar que deseas generar.
3. Haz clic en el botón "Generar Avatar".
4. Espera mientras se crea tu avatar.
5. Descarga o comparte tu avatar generado.

04-avatares-openai/
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   ├── img/
│   │   │   └── icon-avatar.png
│   │   └── js/
│   │       └── [main.js]
│   └── index.html
├── app.js (<http://localhost:3005>)
├── package.json
├── .env
└── README.md

## Scripts disponibles

npm start: Inicia el servidor con nodemon.
npm run serve: Inicia el servidor con node.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

## Autor

Creado por Antonio Zurano como parte del curso "Desarrollo Web con IA" de Victor Robles profesor de Udemy.

## Contacto

Si tienes alguna pregunta o sugerencia, no dudes en contactarme a través de mi perfil de GitHub o LinkedIn.
