React Weather App 🌦️

React Weather App es una aplicación web que muestra información meteorológica en tiempo real, utilizando datos proporcionados por la API de OpenWeather.

🔗 Ver la aplicación en Vercel
Características ✨

    Búsqueda de condiciones climáticas por ciudad.
    Información detallada sobre el clima actual:
        Temperatura actual, mínima, máxima.
        Sensación térmica.
        Humedad y presión.
        Velocidad del viento.
        Nivel del mar.
    Cambia entre unidades métricas (°C) e imperiales (°F).
    Interfaz moderna y responsiva gracias a MDB React UI Kit.

Instalación 🚀

Sigue estos pasos para ejecutar el proyecto localmente:

    Clonar el repositorio:

git clone https://github.com/Kenkyoo/react-app-weather.git
cd react-app-weather

Instalar dependencias: Asegúrate de tener npm instalado. Luego, ejecuta:

npm install

Agregar tu clave de API: Ve a OpenWeather y obtén una API Key. Luego, crea un archivo .env en la raíz del proyecto y agrega tu clave:

VITE_API_KEY=your_openweather_api_key

Iniciar la aplicación en modo desarrollo:

    npm run dev

    Abrir en tu navegador: Por defecto, estará disponible en http://localhost:5173.

Tecnologías 🛠️

    React 18: Biblioteca para construir interfaces de usuario.
    TypeScript: Tipado estático para JavaScript.
    Vite: Herramienta rápida para el desarrollo.
    Axios: Cliente HTTP para consumir la API.
    MDB React UI Kit: Componentes estilizados para React.
    Font Awesome: Íconos modernos y personalizables.

Scripts disponibles 📜

    npm run dev: Inicia el servidor en modo desarrollo.
    npm run build: Construye la aplicación para producción.
    npm run preview: Previsualiza la aplicación de producción localmente.
    npm run lint: Ejecuta ESLint para analizar el código.

Estructura del proyecto 📂

react-app-weather/
├── src/
│   ├── components/
│   │   ├── Card.tsx         # Componente que muestra los datos meteorológicos
│   │   ├── Search.tsx       # Componente de búsqueda
│   ├── App.tsx              # Punto de entrada principal
│   ├── index.tsx            # Renderizado inicial
│   ├── App.css              # Estilos personalizados
├── public/                  # Archivos estáticos
├── .env                     # Variables de entorno
├── package.json             # Configuración del proyecto
└── README.md                # Documentación

Despliegue 🚀

Esta aplicación está desplegada en Vercel, lo que permite tener una URL accesible de manera pública:
React Weather App en Vercel.
Contribuciones 🤝

¡Toda contribución es bienvenida!
Si encuentras un error o tienes ideas para mejorar la aplicación, por favor crea un issue o envía un pull request.
Licencia 📄

Este proyecto está licenciado bajo la MIT License.
