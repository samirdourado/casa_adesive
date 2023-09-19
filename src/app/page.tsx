'use client';
import React, { useEffect, useState } from 'react';
import Header from '@/components/header';
import Image from 'next/image';
import styles from './styles.module.scss';
import HintsHolder from '@/components/hintsHolder';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import About from '@/components/about';
import HamburguerMenu from '@/components/menuHamburguer';
import { useNavContext } from '@/contexts/navContext';


export default function Home() {
  const { menuActivate }: any = useNavContext();
  
    const [colorBg, setColorBg] = useState(false);    

    const changeBgHeader = () => {
        if (window.scrollY > 40) {
            setColorBg(true);            
        } else {
            setColorBg(false);            
        };
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBgHeader);      
    }, []);

  return (
    <>
    <section className={styles.container}>
      <Header headerBgActive={colorBg}/>
      <main>
        <Image
          className={styles.banner}
          src="/cozinha-preta-1100x580.jpeg"
          alt="Casa Adesive Logo"
          width={1920}
          height={1080}
          priority
          id='home'
        />
        <About/>
        <HintsHolder/>
        <Contact/>
        <Footer/>
      </main>
      { menuActivate && <HamburguerMenu/> }
    </section>
    </>
  )
};
