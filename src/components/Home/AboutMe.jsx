import React, { useState } from 'react';
import { Projects } from './Projects';
import { Presentation } from './Presentation';
import { Backend } from './Backend';

export const AboutMe = () => {
  const [Visible, setVisible] = useState('');
  return (
    <main className="flex">
      <section className="text-xl grid gap-6 fixed left-6 w-[30%] h-[80%] pr-10  ">
        <h2 className='text-4xl font-bold font-["Oswald",_sans-serif;]'>
          Hola, soy
        </h2>
        <div className="w-[250px] h-[250px] overflow-hidden rounded-[50%] ">
          <img src="/images/foto.jpg" alt="" />
        </div>
        <h1 className='text-principal text-6xl font-bold font-["Oswald",_sans-serif;]'>
          Ivan Jojoa
        </h1>
        <h2 className="text-3xl font-bold">
          Desarrollador web <br></br>Front end - Back end
        </h2>
        <h3 className="text-xl">
          Creo productos digitales efectivos, trabajando en el desarrollo del
          back-end y del front-end para ofrecer experiencias completas y de
          calidad.
        </h3>
        <ul className="flex flex-col items-start font-extralight gap-2">
          <button
            className="hover:text-yellow-500"
            onClick={() => setVisible('Presentation')}
          >
            Acerca de mi
          </button>
          <button
            className="hover:text-yellow-500"
            onClick={() => setVisible('Projects')}
          >
            Proyectos Front-end
          </button>
          <button
            className="hover:text-yellow-500"
            onClick={() => setVisible('Backend')}
          >
            Repositorios Back-end
          </button>
        </ul>

        <ul className="flex text-4xl gap-8">
          <a
            href="https://github.com/pinzaivan"
            class="bx bxl-github hover:text-principal"
          ></a>
          <a
            href="https://www.linkedin.com/in/ivan-dario-jojoa-pinza-542557244/?originalSubdomain=co"
            class="bx bxl-linkedin  hover:text-principal"
          ></a>
          <a
            href="mailto:ivandajopinza@gmail.com"
            class="bx bxl-gmail  hover:text-principal"
          ></a>
        </ul>
      </section>
      <section className="">
        {Visible === 'Presentation' && <Presentation />}
        {Visible === 'Projects' && <Projects />}
        {Visible === 'Backend' && <Backend />}
      </section>
    </main>
  );
};
