import React from 'react';

export const AboutMe = () => {
  return (
    <main>
      <section className="text-xl grid gap-8 fixed left-6 w-[30%] h-[90%]">
        <h2 className='text-4xl font-bold font-["Oswald",_sans-serif;]'>
          Hola, soy
        </h2>
        <h1 className='text-yellow-500 text-6xl font-bold font-["Oswald",_sans-serif;]'>
          Ivan Jojoa
        </h1>
        <h2 className="text-3xl font-bold">
          Desarrollador web <br></br>Front end - Back end
        </h2>
        <h3 className="text-xl">
          Construyo productos y experiencias digitales accesibles e inclusivos
          para la web.
        </h3>
        <ul className="grid font-extralight gap-2">
          <li>Acerca de mi</li>
          <li>Proyectos Front-end</li>
          <li>Repositorios Back-end</li>
        </ul>

        <ul className="flex text-2xl gap-4">
          <a href="https://github.com/pinzaivan" class="bx bxl-github"></a>
          <a
            href="https://www.linkedin.com/in/ivan-dario-jojoa-pinza-542557244/?originalSubdomain=co"
            class="bx bxl-linkedin"
          ></a>
          <a href="mailto:ivandajopinza@gmail.com" class="bx bxl-gmail"></a>
        </ul>
      </section>
    </main>
  );
};
