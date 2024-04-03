// Función para enviar mensaje y recibir respuesta
function sendMessage() {
    var input = document.getElementById("userInput");
    var message = input.value.trim();
    if (message) {
        var chatbox = document.getElementById("chatbox");

        // Crear mensaje del usuario
        var userMessage = document.createElement("div");
        userMessage.classList.add("message", "sent");
        userMessage.innerHTML = `
            <p>${message}</p>
        `;
        chatbox.appendChild(userMessage);

        // Respuesta automática de la inteligencia artificial (simulada)
        var aiResponse = simulateAIResponse(message);
        var aiMessage = document.createElement("div");
        aiMessage.classList.add("message", "received");
        aiMessage.innerHTML = `
            <p>${aiResponse}</p>
        `;
        chatbox.appendChild(aiMessage);

        input.value = ""; // Limpiar el campo de entrada después de enviar
        // Desplazar automáticamente hacia abajo al último mensaje
        chatbox.scrollTop = chatbox.scrollHeight;
    }
}

// Función para simular respuesta de la IA
function simulateAIResponse(message) {
    // Aquí puedes integrar la lógica real para obtener respuestas de una IA como GPT-3
    // Por ahora, simularemos respuestas simples
    switch (message.toLowerCase()) {
        case "hola":
            return "¡Hola! ¿En qué puedo ayudarte?";
        case "adios":
            return "¡Hasta luego! Espero haberte sido útil.";
        default:
            return "Lo siento, no comprendo ese mensaje.";
    }
}

// Enviar mensaje al presionar la tecla "Enter"
document.getElementById("userInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el comportamiento por defecto del Enter en un input
        sendMessage();
    }
});
