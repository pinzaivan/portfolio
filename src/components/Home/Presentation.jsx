import React from 'react';

export const Presentation = () => {
  return (
    <main>
      <section className="absolute text-justify md:left-[32%]">
        <h2 className="text-yellow-500 font-semibold text-2xl">Acerca de mi</h2>
        <p className="font-light md:text-2xl max-w-4xl mr-10">
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
        <div className="grid md:grid-cols-2 pb-10 ">
          <ul>
            <h3 className="text-yellow-500 text-xl pb-2">Educación</h3>
            <li className="text-xl">
              Geografo<br></br>
              <span className="text-sm font-light">
                Universidad de Nariño, 2022
              </span>
            </li>
            <br></br>
            <li className="text-xl">
              Desarrollador web Full Stack<br></br>
              <span className="text-sm font-light">ACADEMLO, 2023</span>
            </li>
            <br></br>
            <li className="text-xl">
              Certificado eficiencia en ingles<br></br>
              <span className="text-sm font-light">
                Universidad de Nariño, 2019
              </span>
            </li>
          </ul>
          <div class="mt-10">
            <h3 class="text-yellow-500 text-xl pb-2">Conocimientos</h3>
            <ul class="grid grid-cols-3 gap-10">
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-javascript text-5xl"></i>
                JAVASCRIPT
              </li>
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-html5 text-5xl"></i>
                HTML
              </li>
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-css3 text-5xl"></i>
                CSS
              </li>
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-react text-5xl"></i>
                REACT
              </li>
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-tailwind-css text-5xl"></i>
                TAILWIND
              </li>
              <li className="flex flex-col justify-center text-center">
                <i class="bx bxl-nodejs text-5xl"></i>
                NODE.JS
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
