import React from 'react';

export const Backend = () => {
  return (
    <main>
      <h1 className="className= text-yellow-500 font-semibold text-2xl mb-8">
        Proyectos Back end
      </h1>
      <section>
        <div className="h-[250px] w-[400px] border-t border-b border-dotted border-white p-3">
          <h2 className="pb-2 text-xl text-center">BANK</h2>
          <p className="pt-3 font-light">
            Un e-commerce robusto con funcionalidades CRUD para usuarios
            verificados. Desde explorar y modificar productos hasta finalizar
            compras, la plataforma asegura una experiencia de compra
            personalizada y segura, adaptada para satisfacer las demandas de los
            usuarios.
          </p>
          <br></br>
          <ul className="flex gap-10 justify-center">
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable6">
                BANK - Git-Hub
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
