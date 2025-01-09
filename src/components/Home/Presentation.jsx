import React from 'react';
import { Projects } from './Projects';
import { Backend } from './Backend';

export const Presentation = () => {
  return (
    <main>
      <section className="absolute w-[60%] h-screen left-[32%] text-justify">
        <h2 className="text-yellow-500 font-semibold text-2xl">Acerca de mi</h2>
        <p className="font-light text-2xl">
          <br></br>
          Soy una persona organizada y responsable, con una fuerte motivación
          para enfrentar nuevos desafíos. Mi capacidad para adaptarme
          rápidamente a diversas circunstancias me permite brindar siempre un
          desempeño excepcional en cualquier proyecto en el que me involucre.
          Valorizo enormemente el trabajo en equipo y creo firmemente en la
          importancia del compañerismo y la colaboración.<br></br>
          <br></br>
          Estoy buscando una oportunidad en una empresa que no solo valore mis
          habilidades y experiencia, sino que también me brinde la oportunidad
          de crecimiento profesional. Con una formación especializada y una
          pasión por la excelencia, estoy seguro de que puedo aportar un valor
          significativo y contribuir al éxito de la empresa, al tiempo que
          continúo mi desarrollo y aprendizaje en un entorno que resuene con mis
          valores personales y aspiraciones profesionales.<br></br>
          <br></br>
        </p>
        <div className="flex gap-20">
          <ul>
            <h3 className="text-yellow-500 text-xl pb-2">Educación</h3>
            <li>
              Geografo<br></br>
              <span className="text-sm font-light">
                Universidad de Nariño, 2022
              </span>
            </li>
            <br></br>
            <li>
              Desarrollador web Full Stack<br></br>
              <span className="text-sm font-light">ACADEMLO, 2023</span>
            </li>
            <br></br>
            <li>
              Certificado eficiencia en ingles<br></br>
              <span className="text-sm font-light">
                Universidad de Nariño, 2019
              </span>
            </li>
          </ul>
       
        </div>
        <br></br>
        <br></br>
        <Projects />
        <br></br>
        <br></br>
        <Backend />
      </section>
    </main>
  );
};
