import React from 'react'
import Image from 'next/image'
import typescript from "@/app/resources/Logos/Vector.png"
import javascript from "@/app/resources/Logos/javascript-original.png"
import sequelize from "@/app/resources/Logos/sequelize-original.png"
import next from "@/app/resources/Logos/nextjs-background.png"
import tailwind from "@/app/resources/Logos/tailwindcss.png"
import postgres from "@/app/resources/Logos/postgresql-original-wordmark.png"
import html from "@/app/resources/Logos/html5-plain.png"
import git from "@/app/resources/Logos/git-plain.png"
import mongodb from "@/app/resources/Logos/mongodb-original-wordmark.png"
import slack from "@/app/resources/Logos/slack-original.png"
import npm from "@/app/resources/Logos/npm-original-wordmark.png"
import mysql from "@/app/resources/Logos/mysql-original-wordmark.png"

function Gallery() {
  return (
    <div>
      
  <div className="md:max-w-5xl md:mx-auto w-screen px-10 my-20">
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Tecnologias aprendidas</h2>
    <p className="mt-1 text-gray-600 dark:text-neutral-400">Una guia de las tecnologias que aprendi tanto en mis estudios particulares como dentro de cursos. Muchas de ellas fueron fruto de la practica constante y la busqueda de aprender siempre un poco mas acerca de la programación.</p>
  </div>

  <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
    <div className="space-y-4">
      <Image className="w-full sm:size-40 object-cover" src={typescript} alt="Image Description" />
      <Image className="w-full sm:size-40 object-cover" src={javascript} alt="Image Description" />
      <Image className="w-full sm:size-40 object-cover" src={html} alt="Image Description" />

    </div>
    <div className="space-y-4">
        <Image className="w-full sm:size-40 object-cover" src={next} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={tailwind} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={sequelize} alt="Image Description" />
    </div>
    <div className="space-y-4">
        <Image className="w-full sm:size-40 object-cover" src={mysql} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={git} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={mongodb} alt="Image Description" />
    </div>
    <div className="space-y-4">
        <Image className="w-full sm:size-40 object-cover" src={slack} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={npm} alt="Image Description" />
        <Image className="w-full sm:size-40 object-cover" src={postgres} alt="Image Description" />
    </div>

  </div>
</div>
    </div>
  )
}

export default Gallery
