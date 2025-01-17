import React from 'react';
import { Header } from '../components/Home/Header';
import { AboutMe } from '../components/Home/AboutMe';

export const Home = () => {
  return (
    <main className="max-w-[1200px] mx-auto">
      <Header />
      <AboutMe />
    </main>
  );
};
