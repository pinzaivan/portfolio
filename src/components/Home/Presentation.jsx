import React from 'react';

export const Presentation = () => {
  return (
    <main>
      <section className="fixed w-[45%] h-screen left-[40%] text-justify">
        <h2 className="text-yellow-500 font-semibold text-xl">Acerca de mi</h2>
        <p className="font-light">
          {' '}
          Soy una persona organizada, responsable y con una gran motivación, soy
          capaz de adaptarme a cualquier circunstancia y dar siempre lo mejor de
          mí en cualquier proyecto, al mismo tiempo me esfuerzo por trabajar en
          equipo y fomentar valores como el compañerismo.<br></br>
          <br></br>
          Además me encantaría pertenecer a una empresa que permita mi
          desarrollo profesional, gracias a mi formación especializada,
          considero que puedo aportar valor y seguir desarrollándome
          profesionalmente en una compañía que coincida con mis valores y
          expectativas.<br></br>
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