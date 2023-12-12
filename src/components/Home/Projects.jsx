import React from 'react';

export const Projects = () => {
  return (
    <main>
      <section className="text-xl flex flex-col gap-5 fixed left-6 w-[30%]">
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

        <ul className="flex text-2xl gap-4 mt-16">
          <a href="https://github.com/pinzaivan" class="bx bxl-github"></a>
          <a
            href="https://www.linkedin.com/in/ivan-dario-jojoa-pinza-542557244/?originalSubdomain=co"
            class="bx bxl-linkedin"
          ></a>
          <a href="mailto:ivandajopinza@gmail.com" class="bx bxl-gmail"></a>
        </ul>
      </section>

      <section className="fixed w-[45%] h-screen left-[40%] text-justify">
        <h2 className="text-yellow-500 font-semibold text-xl">Acerca de mi</h2>
        <p className="font-light">
          {' '}
          Soy una persona organizada, responsable y con una gran motivación, soy
          capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de
          mí en cualquier proyecto, al mismo tiempo me esfuerzo por trabajar en
          equipo y fomentar valores como el compañerismo.<br></br>
          <br></br>
          Además me encantaría pertenecer a una empresa me permita desarrollarme
          profesionalmente, gracias a mi formación especializada, considero que
          puedo aportar valor y seguir desarrollándome profesionalmente en una
          compañía que coincida con mis valores y expectativas.<br></br>
          <br></br>
        </p>
        <div className="flex gap-20">
          <ul>
            <h3 className="text-yellow-500">Educación</h3>
            <li>
              Geografo<br></br>
              <span className="text-sm">Universidad de Nariño, 2022</span>
            </li>
          </ul>
          <ul>
            <h3 className="text-yellow-500">Habilidades</h3>
            <li>
              Certificado eficiencia en ingles<br></br>
              <span className="text-sm">Universidad de Nariño, 2019</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
