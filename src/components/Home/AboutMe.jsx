import React, { useEffect, useState } from 'react';
import { Projects } from './Projects';
import { Presentation } from './Presentation';
import { Backend } from './Backend';
import { Contact } from './Contact';

export const AboutMe = () => {
  const [Visible, setVisible] = useState('');
  const [animationClass, setAnimationClass] = useState('');
  const [content, setContent] = useState(null);
  useEffect(() => {
    if (!Visible) return;

    if (content) {
      setAnimationClass('opacity-0');
      setTimeout(() => {
        setContent(null);
      }, 200);
    }

    const timeout = setTimeout(
      () => {
        setAnimationClass('opacity-100 animate-slide-up');
        switch (Visible) {
          case 'Presentation':
            setContent(<Presentation />);
            break;
          case 'Projects':
            setContent(<Projects />);
            break;
          case 'Backend':
            setContent(<Backend />);
            break;
          case 'Contact':
            setContent(<Contact />);
            break;
          default:
            setContent(null);
        }
      },
      content ? 200 : 0,
    );

    return () => clearTimeout(timeout);
  }, [Visible]);

  return (
    <main className="flex gap-10">
      <section className="text-xl grid left-6 w-[30%] h-[90%] gap-6 fixed">
        <h2 className='text-4xl font-bold font-["Oswald",_sans-serif;]'>
          Hola, soy
        </h2>
        <div className="w-[250px] h-[250px] overflow-hidden rounded-[50%]">
          <img src="/images/foto.jpg" alt="" />
        </div>
        <h1 className='text-principal text-6xl font-bold font-["Oswald",_sans-serif;]'>
          Ivan Jojoa
        </h1>
        <h2 className="text-3xl font-bold">
          Desarrollador web <br /> Front end - Back end
        </h2>

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
          <button
            className="hover:text-yellow-500 w-50"
            onClick={() => setVisible('Contact')}
          >
            Contactame
          </button>
        </ul>

        <ul className="flex text-4xl gap-8">
          <a
            href="https://github.com/pinzaivan"
            className="bx bxl-github hover:text-principal"
          ></a>
          <a
            href="https://www.linkedin.com/in/ivan-dario-jojoa-pinza-542557244/?originalSubdomain=co"
            className="bx bxl-linkedin hover:text-principal"
          ></a>
          <a
            href="mailto:ivandajopinza@gmail.com"
            className="bx bxl-gmail hover:text-principal"
          ></a>
        </ul>
      </section>
      <section
        className={`w-full relative transition-opacity duration-200 ${animationClass}`}
      >
        {content}
      </section>
    </main>
  );
};
