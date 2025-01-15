import React from 'react';

export const Contact = () => {
  return (
    <main className="mt-60 mb-20">
      <h1 className="className= text-yellow-500 font-semibold text-2xl mb-8">
        Contactame
      </h1>

      <section className="bg-black border-dotted border-white border-t border-b p-8 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // Lógica para manejar el envío de datos
          }}
          className="flex flex-col gap-4"
        >
          {/* Campo de Nombre */}
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
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>

          {/* Campo de Correo Electrónico */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-secondary"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            />
          </div>

          {/* Campo de Mensaje */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-secondary"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje"
              rows="5"
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full text-black"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <button
            type="submit"
            className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-principal mb-20"
          >
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
};
