import React, { useState } from 'react';

export const IaProjects = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [lastRequestTime, setLastRequestTime] = useState(0);

  const handleAsk = async () => {
    if (!question.trim()) return;

    // Rate limiting: esperar al menos 3 segundos entre solicitudes
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;
    if (timeSinceLastRequest < 3000) {
      const waitTime = Math.ceil((3000 - timeSinceLastRequest) / 1000);
      setAnswer(
        `⏳ Espera ${waitTime} segundos antes de hacer otra pregunta para evitar límites de la API.`,
      );
      return;
    }

    // Para Vite, usar import.meta.env
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      setAnswer(
        '⚠️ Error: No se encontró VITE_OPENAI_API_KEY en las variables de entorno. Verifica tu archivo .env y reinicia el servidor.',
      );
      return;
    }

    setIsLoading(true);
    setAnswer('');
    setLastRequestTime(now);

    try {
      const response = await fetch(
        'https://api.openai.com/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo', // Más económico y con mejores límites
            messages: [
              {
                role: 'system',
                content:
                  'Eres un asistente especializado en el portafolio profesional. Responde preguntas sobre experiencia, proyectos y habilidades de manera útil y profesional.',
              },
              {
                role: 'user',
                content: question,
              },
            ],
            max_tokens: 500,
            temperature: 0.7,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setAnswer(data.choices[0].message.content);
    } catch (error) {
      console.error('Error:', error);

      // Manejo específico de errores
      if (error.message.includes('429')) {
        setAnswer(
          '⚠️ Límite de solicitudes excedido. OpenAI tiene límites de uso. Espera unos minutos antes de intentar de nuevo, o verifica tu plan en https://platform.openai.com/usage',
        );
      } else if (error.message.includes('401')) {
        setAnswer(
          '❌ Error de autenticación: Verifica que tu API key sea válida y tenga créditos disponibles.',
        );
      } else if (error.message.includes('403')) {
        setAnswer(
          '❌ Acceso denegado: Tu API key puede no tener permisos o tu cuenta puede estar suspendida.',
        );
      } else {
        setAnswer(
          `❌ Error de conexión: ${error.message}. Verifica tu conexión a internet y que tu API key sea válida.`,
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
      handleAsk();
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>🤖 Chatbot IA del Portafolio</h1>
      <p>
        Hazle preguntas al bot sobre tu experiencia, proyectos y habilidades.
      </p>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Escribe tu pregunta aquí... (Ctrl+Enter para enviar)"
        rows="3"
        style={{
          width: '100%',
          marginBottom: '1rem',
          padding: '0.5rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
        }}
        className="text-black"
        disabled={isLoading}
      />

      <button
        onClick={handleAsk}
        disabled={isLoading || !question.trim()}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: isLoading ? '#ccc' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isLoading ? 'not-allowed' : 'pointer',
        }}
      >
        {isLoading ? 'Pensando...' : 'Preguntar'}
      </button>

      {answer && (
        <div
          style={{
            marginTop: '2rem',
            background: '#f8f9fa',
            padding: '1rem',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
          }}
        >
          <strong className="text-black">Respuesta del bot:</strong>
          <p className="text-black" style={{ whiteSpace: 'pre-wrap' }}>
            {answer}
          </p>
        </div>
      )}

      <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: '#666' }}>
        💡 Tip: Puedes usar Ctrl+Enter para enviar tu pregunta
      </div>
    </div>
  );
};
