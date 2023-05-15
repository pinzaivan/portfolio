import React from 'react'

export const Contact = () => {
  return (
    <main className='m-4'>
        <h1 className='font-bold text-yellow-500 text-xl mb-2'>Contacto</h1>
        <section className='grid grid-flow-col gap-5 mx-auto max-w-[300px] sm:max-w-[700px] xl:max-w-[1000px]'>
            <article className='w-[70%]sm:max-w-[1000px]'>
                <p className='text-xs text-justify sm:text-lg sm:p-2'>Estoy interesado en oportunidades independientes, sin embargo, si tienes otra solicitud o pregunta, no dudes en ponerte en contacto conmigo.</p>
            </article>


            <article className='w-[100px] sm:w-[210px] border-x-[1px] '>
            
                <ul className='grid p-1 gap-2 text-2xl text-center sm:text-5xl sm:flex sm:gap-7 xl:grid xl:gap-2'>
                    <a href='https://github.com/pinzaivan' class='bx bxl-github'></a>
                    <a href='https://www.linkedin.com/in/ivan-dario-jojoa-pinza-542557244/?originalSubdomain=co' class='bx bxl-linkedin' ></a>
                    <a className='relative' href="mailto:ivandajopinza@gmail.com"><i class='bx bxl-gmail'></i>
                    <span className='hidden xl:flex text-white text-[10px] absolute -bottom-3 left-9'>ivandajopinza@gmail.com</span></a>
                </ul>
            </article>
        </section>
    </main>
  )
}
