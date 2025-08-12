import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSending(true);
    setError('');
    setSent(false);

    emailjs
      .send(
        'service_0ib8wib',
        'template_b4iwp2y',
        formData,
        'xIfaeYjGzbnzNvOI7',
      )
      .then(
        (result) => {
          console.log(result.text);
          setSending(false);
          setSent(true);
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.log(error.text);
          setSending(false);
          setError('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
        },
      );
  };

  return (
    <main className="mt-40 mb-20 z-10 hover:bg-black">
      <section className="border-dotted border-white border-t border-b p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
        <h1 className="text-yellow-500 font-semibold text-2xl mb-8">
          Contactame
        </h1>

        {sent && (
          <div className="text-green-500 mb-4">¡Mensaje enviado con éxito!</div>
        )}

        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`bg-gray-500 text-white py-2 px-4 rounded hover:bg-principal mb-20 ${
              sending ? 'cursor-not-allowed opacity-50' : ''
            }`}
            disabled={sending}
          >
            {sending ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
        </form>
      </section>
    </main>
  );
};
