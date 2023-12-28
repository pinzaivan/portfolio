import React from 'react';

export const Projects = () => {
  return (
    <main>
      <h1 className="className= text-yellow-500 font-semibold text-2xl">
        Proyectos
      </h1>
      <br></br>
      <section className="h-full grid grid-cols-2 gap-20">
        <div className="h-[610px] w-[400px] bg-orange-400 p-3">
          <h2 className="pb-2 text-lg">Titulo</h2>
          <img src="/public/images/project_0.png" alt="" />
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            deserunt odio quaerat. Sequi explicabo quidem corporis officia
            sapiente. Quos omnis ipsam voluptatibus, debitis ex voluptatem!
            Reiciendis consequatur blanditiis quia voluptatem.
          </p>
          <br></br>
          <ul>
            <li>
              Link de sitio: <span></span>
            </li>
            <li>
              Link de GitHub: <span></span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
