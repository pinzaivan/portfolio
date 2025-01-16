import React, { useState } from 'react';
import { Projects } from './Projects';
import { Presentation } from './Presentation';
import { Backend } from './Backend';
import { Contact } from './Contact';

export const AboutMe = () => {
  const [Visible, setVisible] = useState('');
  return (
    <main class="flex gap-10">
      <section class="text-xl grid left-6 w-[30%] h-[90%] pr-10 gap-6 fixed ">
        <h2 class='text-4xl font-bold font-["Oswald",_sans-serif;]'>
          Hola, soy
        </h2>
        <div class="w-[250px] h-[250px] overflow-hidden rounded-[50%] ">
          <img src="/images/foto.jpg" alt="" />
        </div>
        <h1 class='text-principal text-6xl font-bold font-["Oswald",_sans-serif;]'>
          Ivan Jojoa
        </h1>
        <h2 class="text-3xl font-bold">
          Desarrollador web <br></br>Front end - Back end
        </h2>

        <ul class="flex flex-col items-start font-extralight gap-2">
          <button
            class="hover:text-yellow-500"
            onClick={() => setVisible('Presentation')}
          >
            Acerca de mi
          </button>
          <button
            class="hover:text-yellow-500"
            onClick={() => setVisible('Projects')}
          >
            Proyectos Front-end
          </button>
          <button
            class="hover:text-yellow-500"
            onClick={() => setVisible('Backend')}
          >
            Repositorios Back-end
          </button>
          <button
            class="hover:text-yellow-500 w-50"
            onClick={() => setVisible('Contact')}
          >
            Contactame
          </button>
        </ul>

        <ul class="flex text-4xl gap-8">
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
      <section class="w-full ">
        {Visible === 'Presentation' && <Presentation />}
        {Visible === 'Projects' && <Projects />}
        {Visible === 'Backend' && <Backend />}
        {Visible === 'Contact' && <Contact />}
      </section>
    </main>
  );
};
