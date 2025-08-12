import React, { useState } from 'react';

export const IaProjects = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    if (!question.trim()) return;

    const res = await fetch('http://localhost:3001/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });

    const data = await res.json();
    setAnswer(data.answer);
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
        placeholder="Escribe tu pregunta aquí..."
        rows="3"
        style={{ width: '100%', marginBottom: '1rem' }}
        className="text-black"
      />

      <button onClick={handleAsk}>Preguntar</button>

      {answer && (
        <div
          style={{ marginTop: '2rem', background: '#f1f1f1', padding: '1rem' }}
        >
          <strong className="text-black">Respuesta del bot:</strong>
          <p className="text-black">{answer}</p>
        </div>
      )}
    </div>
  );
};
