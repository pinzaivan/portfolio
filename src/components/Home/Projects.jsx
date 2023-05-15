import React from 'react'

export const Projects = () => {
  return (
    <main className='m-4'>
       
        <h1 className='font-bold text-yellow-500 text-xl'>PROYECTOS</h1>
        
        <section className='grid gap-7 m-4 mt-8 md:grid-cols-2 xl:grid-cols-3' >
            
        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full' src="/images/project_0.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>E-COMMERCE CON JS, CSS Y HTML</h1>    
            <hr />
            <h2>Carrito de compras. </h2>
            <p className='text-xs text-gray-400'>Es un carrito de compras realizado unicamente con HTML, CSS Y JS</p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://ecomerce-academlo-ivan-jojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/ECOMERCE' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' >Ir a GitHub</a>
            </div>
            </section>              
        </article>
        
        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full w-full object-contain' src="/images/project_1.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>INFOGALAXY</h1>    
            <hr />
            <h2>Componentes, Props y el hook UseState</h2>
            <p className='text-xs text-gray-400'>En esta pagina se puede observar como al cargar la pagina inicia en una imagen y texto random, cuando pulzas el botón se carga se cambia el estado y se carga otra imagen y otro texto aleatorio igual</p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://entregable1-react-ivan-jojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/entregable1-react/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' > Ir a GitHub</a>
            </div>
            </section>            
        </article>

        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full' src="/images/project_2.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>APLICACIÓN DEL TIEMPO</h1>    
            <hr />
            <h2>UseEffecft y consuemo de API´s </h2>
            <p className='text-xs text-gray-400'>En esta app se realiza una petición a una Api para conocer la temperatura, la velocidad del viento, la humedad relativa y la presion atmosferica, unicamente hay que otorgar permiso al navegador. </p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://entregable2-react-ivanjojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/entregable-2/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' > Ir a GitHub</a>
            </div>
            </section>            
        </article>

        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full' src="/images/project_3.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>Buscador de dimesiones de Rick y Morty</h1>    
            <hr />
            <h2>Listas y key´s, inputs controlados, renderizado condicional.</h2>
            <p className='text-xs text-gray-400'>Incialmente se hace la petición a la API y se renderiza un universo aleatorio, en el input se puede buscar cualquier universo con el numeral, este renderiza una tarjeta donde se observa los habitantes de ese universo, si estan vivos o muertos o undefined y los datos del personaje.</p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://entregable3ivanjojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/entregable3/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' > Ir a GitHub</a>
            </div>
            </section>              
        </article>


        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full' src="/images/project_4.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>App para registro</h1>    
            <hr />
            <h2>CRUD´s y metodos de HTTP.</h2>
            <p className='text-xs text-gray-400'>En esta App se puede hacer el registro por medio de react-hook-form, se realiza el registro en una API funcional donde se puede observar los datos del usuario renderizados</p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://entregable4ivanjojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/entregable4/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' >Ir a GitHub</a>
            </div>
            </section>              
        </article>


        <article className='border-[1px] border-gray-200 w-[350px] v-[600] p-4 grid place-content-center'>
            <div>
                <img className='h-full' src="/images/project_5.png" alt="" />
            </div>
            <section className='grid gap-2 text-center py-2'>
            <h1>E-COMMERCE REACT</h1>    
            <hr />
            <h2>Uso de rutas libre y protegidas, login funcional. </h2>
            <p className='text-xs text-gray-400'>En este proyecto se realiza la aplicacion de todos los elementos que se mencionaron, genrando un carrito de compras funcional que cuenta con un login, y rutas protegidas y libres</p>
            <div className='mt-4 flex justify-center gap-8'>
            <a href='https://entregable6ivanjojoa.netlify.app/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Ir a pagina</a>
            <a href='https://github.com/pinzaivan/entregable6/' className=' w-[30%] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md' >Ir a GitHub</a>
            </div>
            </section>              
        </article>

        </section>

    </main>
  )
}
