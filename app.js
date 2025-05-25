// Importar dependencias
import express from "express";
import dotenv from "dotenv";
//import OpenAI from "openai";
import axios from "axios";



//cargar configuracion (de api key)
dotenv.config();

//Cargar express
const app = express();
const PORT = process.env.PORT || 3005;


//Servir frontend
app.use("/", express.static("public"));

//Middleware para procesar json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para generar imagenes con IA
app.post("/api/gen-img", async (req, res) => {

    // Verificar si la clave de API está configurada
    if (!process.env.OPENAI_API_KEY) {
        return res.status(500).json({ error: "API key no configurada" });
    }

    // Verificar si la categoría está presente en el cuerpo de la solicitud
    if (!req.body.category) {
        return res.status(400).json({ error: "Categoría no proporcionada" });
    }

    // Verificar si la categoría es válida
    const validCategories = ["hombre", "mujer", "animal", "objeto"];
    if (!validCategories.includes(req.body.category)) {
        return res.status(400).json({ error: "Categoría no válida" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    const { category } = req.body;

    let myPrompt = `
        Eres un diseñador gráfico experto.
        Tu objetivo final es crear un avatar para un ${category}.
        Especificaciones del avatar:
        - Estilo: Cartoon (tipo dibujos animados)
        - Dimensiones: 256x256
        - Fondo de la imagen: Color Sólido
        - Protagonista del avatar debe ser: ${category}
        - Formato de la imagen siempre será cuadrado o retangular

    Para hacer bien el trabajo, debes cumplir con todas las especificaciones.
    Si lo haces bien te pagare 700 dolares.
    Si no lo haces bien, no te pagare nada.
    `;	

    try {
        // Realizar la solicitud a la API de OpenAI
        const response = await axios.post("https://api.openai.com/v1/images/generations",
             {
                model: "dall-e-2",
                prompt: myPrompt,
                n: 1,
                size: "256x256",
             },
            {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            }

            }
        );
        // Verificar si la respuesta contiene la URL de la imagen
        if (!response.data || !response.data.data || response.data.data.length === 0) {
            return res.status(500).json({ error: "No se pudo generar la imagen" });
        }
        // Obtener la URL de la imagen generada
        const imageUrl = response.data.data[0].url;
        console.log("URL de la imagen generada:", imageUrl);

        return res.json({image_url: imageUrl});
    }
    catch (error) {
        console.error("Error al generar la imagen:", error);
        return res.status(500).json({ error: "Error al generar avatar" });
    }
    
});


//Servir el backend
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });