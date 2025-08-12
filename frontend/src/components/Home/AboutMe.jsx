import React, { useEffect, useState } from 'react';
import { Projects } from './Projects';
import { Presentation } from './Presentation';
import { Backend } from './Backend';
import { Contact } from './Contact';
import { Maps } from './Maps';
import { CesiumViewer } from './CesiumViewer';
import { IaProjects } from './IaProjects';

export const AboutMe = () => {
  const [Visible, setVisible] = useState('Cesium');
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
          case 'Maps':
            setContent(<Maps />);
            break;
          case 'Cesium':
            setContent(<CesiumViewer />);
            break;
          case 'IaProjects':
            setContent(<IaProjects />);
            break;
          default:
        }
      },
      content ? 200 : 0,
    );

    return () => clearTimeout(timeout);
  }, [Visible]);

  return (
    <main className="flex flex-col w-full md:flex-row pt-10">
      <section className="grid grid-cols-1 gap-5 md:gap-0 text-xl w-full px-4 md:w-[30%] md:h-screen md:sticky md:top-0">
        <h2 className='text-4xl font-bold font-["Oswald",_sans-serif;]'>
          Hola, soy
        </h2>
        <div className="hidden lg:block lg:w-[250px] lg:h-[250px] overflow-hidden rounded-full">
          <img src="/images/base.PNG" alt="" />
        </div>
        <h1 className='text-principal text-6xl font-bold font-["Oswald",_sans-serif;]'>
          Ivan Jojoa
        </h1>
        <h2 className="text-3xl font-bold">
          Geografo <br />
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
            onClick={() => setVisible('Maps')}
          >
            Proyectos Mapas 3d
          </button>
          <button
            className="hover:text-yellow-500 w-50"
            onClick={() => setVisible('IaProjects')}
          >
            Proyectos Inteligencia Artificial
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
        className={`relative w-full pt-10 md:w-[70%] transition-opacity duration-200 ${animationClass}`}
      >
        {content}
      </section>
    </main>
  );
};
