// Seleccionar elementos del DOM
const generateBtn = document.querySelector(".btn-generate");
const avatarBox = document.querySelector(".avatar-box");
const loading = document.querySelector(".loading");
const categorySelector = document.querySelector(".category-selector");

loading.style.display = "none";

generateBtn.addEventListener("click", async () => {

    // Sacar la categoría seleccionada
    const category = categorySelector.value;

    // Validación extra: categoría seleccionada
    if (!category) {
        alert("Por favor, selecciona una categoría.");
        return;
    }

    //  mostrar cargando
    loading.style.display = "block";

    //Peticion ajax al backend

try {
        let response = await fetch("/api/gen-img", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ category })
        });

        // Comprobar si la respuesta HTTP es correcta
        if (!response.ok) {
            let errorMsg = `Error del servidor: ${response.status} ${response.statusText}`;
            try {
                const errorData = await response.json();
                if (errorData && errorData.error) {
                    errorMsg += ` - ${errorData.error}`;
                }
            } catch (e) {
                // No es JSON, ignorar
            }
            throw new Error(errorMsg);
        }

        let data;
        try {
            // Intentar parsear la respuesta como JSON
            data = await response.json();
        } catch (e) {

            console.error("Error al parsear la respuesta JSON:", e);
            throw new Error("La respuesta del servidor no es un JSON válido.");
        }

        if (data && data.image_url) {
            // Si la respuesta contiene la URL de la imagen, mostrarla
            avatarBox.innerHTML = `<img src="${data.image_url}" alt="Avatar Generado">`;
        } else if (data && data.error) {
            // Si la respuesta contiene un error, mostrarlo
            alert("Error del backend: " + data.error);

        } else {
            // Si la respuesta no es lo esperado, mostrar un mensaje genérico
            alert("Hay un error al generar el avatar. Respuesta inesperada del servidor.");

        }
    } catch (error) {
        // Manejar errores de la petición o del servidor
        console.error("Error al generar el avatar:", error);
        alert("Error al generar el avatar: " + error.message);
    } finally {
        // Ocultar el indicador de carga
        loading.style.display = "none";
    }
});