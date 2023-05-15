import React from 'react'

export const Header = () => {
  return (
<section className='m-3 grid'>
    <nav>
        <h2 className='text-xs text-yellow-500'><span className='text-[10px] text-gray-400'>Elaborado por:</span> Ivan Pinza</h2>

    </nav>
    <section className='grid gap-2 place-content-center sm:grid-cols-2 sm:mt-10'>
        <div className='h-[300px]'>
            <img className='p-3 h-full w-full object-contain' src="/images/foto.jpg" alt="" />
        </div>
                        
        <div className='text-xl text-center grid gap-6 justify-items-center'>
            <h1><b className='text-yellow-500 text-3xl'>Ivan Pinza</b> estudiante Desarrollador Full Stack ACADEMLO</h1>
            <h3 className='text-sm'>Creo sitios web responsivos donde la teconologia necesite creatividad y funcionalidad</h3>
            <a href='mailto:ivandajopinza@gmail.com' className='w-[70%] h-[30px] border-[1px] border-yellow-500  hover:bg-yellow-500 hover:text-black transition-colors rounded-md'>Contactame</a>
        
        </div>
    </section>
</section>
  )
}
