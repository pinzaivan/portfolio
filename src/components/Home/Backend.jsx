import React from 'react';
import { Contact } from './Contact';

export const Backend = () => {
  return (
    <main class="ml-32">
      <h1 class="class= text-yellow-500 font-semibold text-2xl mb-8">
        Proyectos Back end
      </h1>
      <section class="grid grid-cols-3 gap-20 ">
        <div class="h-[450px] w-[300px] border-t border-b border-dotted border-white p-3 flex flex-col items-center gap-1 hover:bg-black text-justify">
          <h2 class="pb-2 text-xl text-center">BANK</h2>
          <p class="pt-3 font-light">
            Es una aplicación de backend desarrollada en Node.js con SQL, que
            implementa operaciones CRUD utilizando peticiones GET, POST, PUT
            DELETE. Permite la creación de usuarios con sus respectivas claves y
            la realización de transferencias de dinero entre cuenta
          </p>
          <br></br>
          <ul class="flex gap-10">
            <li class="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/Back_bank.git">
                BANK - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div class="h-[450px] w-[300px] border-t border-b border-dotted border-white p-3 hover:bg-black text-justify">
          <h2 class="pb-2 text-xl text-center">MEALS</h2>
          <p class="pt-3 font-light">
            Una aplicación de backend diseñada para gestionar restaurantes
            mediante operaciones CRUD completas (GET, POST, PUT y DELETE). Los
            usuarios pueden registrarse e iniciar sesión, y una vez
            autenticados, crear, actualizar y eliminar registros de
            restaurantes. La aplicación implementa un manejo robusto de errores
            para garantizar la estabilidad y la seguridad del sistema, además de
            utilizar middlewares para la validación de datos y protección de
            rutas. Las rutas están organizadas para facilitar la escalabilidad y
            el mantenimiento del proyecto
          </p>
          <br></br>
          <ul class="flex gap-10 justify-center">
            <li class="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/Back_meals.git">
                MEALS - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div class="h-[450px] w-[300px] border-t border-b border-dotted border-white p-3 hover:bg-black text-justify">
          <h2 class="pb-2 text-xl text-center">REPAIRS</h2>
          <p class="pt-3 font-light">
            Una aplicación de backend diseñada para gestionar un taller mediante
            operaciones CRUD completas (GET, POST, PUT y DELETE). Al crear un
            usuario, se asigna un rol de administrador o trabajador según las
            necesidades. Los administradores tienen la capacidad de cambiar el
            estado de las reparaciones (lista o pendiente). Permite actualizar
            datos de los usuarios, como el correo electrónico, con validaciones
            y manejo de errores robusto. La arquitectura del proyecto incorpora
            middlewares para la autenticación, autorización y validación de
            datos y con rutas organizadas.
          </p>
          <br></br>
          <ul class="flex gap-10 justify-center">
            <li class="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/Back_repairs.git">
                REPAIRS - Git-Hub
              </a>
            </li>
          </ul>
        </div>
        <div class="h-[450px] w-[300px] border-t border-b border-dotted border-white p-3 hover:bg-black text-justify">
          <h2 class="pb-2 text-xl text-center">VALIDADOR</h2>
          <p class="pt-3 font-light">
            Una herramienta desarrollada en Python 2.7 para realizar
            validaciones alfanuméricas en los datos almacenados dentro de una
            Geodatabase (GDB) en ArcGIS 10.8. Este validador examina cada
            registro y genera un archivo CSV como resultado, detallando los
            códigos prediales, la capa donde se realizó la verificación, el
            estado del registro (válido o inválido) y la razón específica en
            caso de ser inválido. La herramienta está diseñada para automatizar
            la revisión de datos, garantizando la calidad y consistencia de los
            mismos.
          </p>
          <br></br>
          <ul class="flex gap-10 justify-center">
            <li class="hover:text-yellow-500">
              <a href="https://github.com/pinzaivan/validador_castastro_python.git">
                VALIDADOR - Git-Hub
              </a>
            </li>
          </ul>
        </div>
      </section>
      <Contact />
    </main>
  );
};
