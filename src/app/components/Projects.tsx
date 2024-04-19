import ryobi from "@/app/resources/Ryobi.jpg"
import inemo from "@/app/resources/Inemo.jpg"
import barbershop from "@/app/resources/BarberShop.jpg"
import microhard from "@/app/resources/MicroHard.jpg"
import ted from "@/app/resources/TED.jpg"
import Image from 'next/image'


import React from 'react'

function Projects() {
  return (
    <div id='projects' className="mb-32">
<div className="max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Mis proyectos</h2>
    <p className="mt-1 text-gray-600 dark:text-neutral-400">Estos son algunos de los trabajos que  he realizado tanto de forma independiente como en empresas nacionales/internacionales.</p>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <a className="group" href="https://ryobi.vercel.app" target="_blank" rel="noopener noreferrer">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={ryobi} alt="Ryobi image"/>
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          Ryobi ONE+
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          Pagina web deployada para un trabajo de la Universidad de Buenos Aires.  El objetivo era crear una pagina que promocione a la marca Ryobi.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Visitar
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>

    <a className="group" href="https://www.inemo-research.com" target="_blank" rel="noopener noreferrer">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={inemo} alt="Image Description" />
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          INEMO-RESEARCH
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          Landing Page para una empresa de coaching  en el ámbito laboral. Desarrollo propio basado en un diseño de Figma.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Visitar
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    <a className="group" href="https://www.trabajoendigital.com" target="_blank" rel="noopener noreferrer">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={ted} alt="Image Description" />
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          Trabajo en Digital
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          Desarrollo de una pagina web para una bolsa de trabajo de Mexico. Desarrollo backend asociado a la conexion de bases de datos con Codigo TypeScript.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Visitar
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    <a className="group" href="https://barbershop-front-deploy.vercel.app" target="_blank" rel="noopener noreferrer">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={barbershop} alt="Image Description" />
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          Henry BarberShop
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          E-commerce entregado como prueba final en el BootCamp de Henry. Tienda online vinculada a pasarela de pagos y sistema de entrega de turnos.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Visitar
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>
    <a className="group" href="https://micro-hard.vercel.app" target="_blank" rel="noopener noreferrer">
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <Image className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={microhard} alt="Image Description" />
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
          MicroHard
        </h3>
        <p className="mt-3 text-gray-800 dark:text-neutral-200">
          Pagina web diseñada para una empresa con la necesitad de tener sus clientes, presupuestos y ventas organizados y a la vista.
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Visitar
          <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </a>



  </div>
</div>
    </div>
  )
}

export default Projects
