import React from 'react';
import { Contact } from './Contact';

export const Projects = () => {
  return (
    <main className="absolute left-[32%]">
      <h1 className="className= text-yellow-500 font-semibold text-2xl">
        Proyectos front end
      </h1>
      <br></br>
      <section className="h-full grid grid-cols-2 gap-20">
        <div className="h-[630px] w-[400px] border-t border-b border-dotted border-white p-3 hover:bg-black">
          <h2 className="pb-2 text-xl text-center">INFOGALAX</h2>
          <div className="w-[375px] h-[350px] overflow-hidden">
            <img src="/images/project_1.png" alt="" className="w-full h-full" />
          </div>
          <p className="pt-3 font-light">
            Esta plataforma web combina imágenes con datos seleccionados
            aleatoriamente. Cada resultado incluye detalles como la fuente
            original. Mediante un botón de actualización, se refrescan tanto la
            imagen como el dato y su fuente asociada, proporcionando una
            experiencia dinámica al usuario.
          </p>
          <br></br>
          <ul className="flex gap-10 justify-center">
            <li className="hover:text-yellow-500">
              <a href="https://infogalaxy.netlify.app/">
                {' '}
                INFOGALAX - Sitio web
              </a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable1-react">
                INFOGALAX - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[630px] w-[400px] border-t border-b border-dotted border-white p-3 hover:bg-black">
          <h2 className="pb-2 text-xl text-center">WHEATHER UBICATION</h2>
          <div className="w-[375px] h-[350px] overflow-hidden">
            <img src="/images/project_2.png" alt="" className="w-full h-full" />
          </div>
          <p className="pt-3 font-light">
            Una app que, permitiendole acceso a la ubicación, proporciona
            información climática local, incluyendo temperatura, precipitación,
            vientos y humedad. Además, integra un botón para alternar entre
            grados Celsius y Fahrenheit, adaptándose a las preferencias del
            usuario.
          </p>
          <br></br>
          <ul className="flex gap-10 justify-center">
            <li className="hover:text-yellow-500">
              <a href="https://weatherdependigubication.netlify.app/">
                {' '}
                WHEATHER - Sitio web
              </a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable-2">
                WHEATHER - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[630px] w-[400px] border-t border-b border-dotted border-white p-3 hover:bg-black">
          <h2 className="pb-2 text-xl text-center">RICK AND MORTY</h2>
          <div className="w-[375px] h-[350px] overflow-hidden">
            <img src="/images/project_3.png" alt="" className="w-full h-full" />
          </div>
          <p className="pt-3 font-light">
            Explora nuestra página interactiva que se conecta a un API de 'Rick
            y Morty'. Visualiza detalles universales como habitantes,
            dimensiones y tipo. Las tarjetas individuales muestran residentes
            con su estado vital. Con una función de mapeo, se presentan 20
            tarjetas por visualización, con opciones para paginar y descubrir
            más.
          </p>
          <br></br>
          <ul className="flex gap-10 justify-center">
            <li className="hover:text-yellow-500">
              <a href="https://rickandmortyuniverses.netlify.app/">
                {' '}
                Rick and Morty - Sitio web
              </a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable3">
                Rick and Morty - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[630px] w-[400px] border-t border-b border-dotted border-white p-3 hover:bg-black">
          <h2 className="pb-2 text-xl text-center">
            Create Read Update Delete "C.R.U.D."
          </h2>
          <div className="w-[375px] h-[350px] overflow-hidden">
            <img src="/images/project_4.png" alt="" className="w-full h-full" />
          </div>
          <p className="pt-3 font-light">
            Descubre nuestra página con funcionalidad CRUD, permitiendo crear,
            leer, actualizar y eliminar usuarios. La interfaz guía al usuario,
            solicitando datos que cumplen criterios esenciales, como asegurar un
            formato de correo válido y establecer contraseñas con requisitos
            específicos de caracteres.
          </p>
          <br></br>
          <ul className="flex gap-10 justify-center">
            <li className="hover:text-yellow-500">
              <a href="https://crudivanjojoa.netlify.app/">
                {' '}
                C.R.U.D - Sitio web
              </a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable4">
                C.R.U.D. - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div className="h-[630px] w-[400px] border-t border-b border-dotted border-white p-3 hover:bg-black">
          <h2 className="pb-2 text-xl text-center">E-COMERCE</h2>
          <div className="w-[375px] h-[350px] overflow-hidden">
            <img src="/images/project_5.png" alt="" className="w-full h-full" />
          </div>
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
              <a href="https://ecomerceivanjojoa.netlify.app/">
                {' '}
                E-COMERCE - Sitio web
              </a>
            </li>
            <li className="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/entregable6">
                E-COMERCE - Git-Hub
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </main>
  );
};
