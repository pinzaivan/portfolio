import React from 'react'
import { Projects } from '../components/Home/Projects'
import { Contact } from '../components/Home/Contact'
import { Link } from 'react-router-dom'
import { Header } from '../components/Home/Header'

export const Home = () => {
  return (
    <main className='max-w-[1200px] mx-auto'>
        <Header/>

        <Projects/>


    </main>
  )
}
