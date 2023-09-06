import Button from '@/components/button';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';

import styles from './styles.module.scss';
import HintsHolder from '@/components/hintsHolder';


export default function Home() {
  return (
    <section className={styles.container}>
      <Header/>

      <main>
      <Image
        className={styles.banner}
        src="/cozinha-preta-1100x580.jpeg"
        alt="Casa Adesive Logo"
        width={221}
        height={144}
        priority
      />
      <div className={styles.description}>
        <h1>Casa Adesive</h1>
        <p>Somos especialistas em adesivos decorativos de alta qualidade. Transformamos sua casa em um ambiente único e acolhedor com soluções personalizadas. Com uma equipe altamente capacitada, estamos prontos para atender suas necessidades.</p>        
        <Button 
         icon={<BsWhatsapp/>}
         text={'Whatsapp'}
        />
      </div>

      <HintsHolder/>

      <section>
        <h2>Conete-se Conosco</h2>
        <h3><BsInstagram/></h3>
        <h2>Contato</h2>
        <p>Se você deseja deixar a sua casa ainda mais bonita e aconchegante, entre em contato conosco pelo WhatsApp e descubra todas as nossas opções! Estamos ansiosos para ajudá-lo a transformar o seu lar!</p>
        <button><BsWhatsapp/> WhatsApp</button>
        <h2>Casa Adesive</h2>
        <p>Travessa Dona Paula 13, São Paulo - SP, 01239-050, Brazil</p>
        <p>11 99305-4964</p>
        <button><MdPlace/> Como Chegar</button>
      </section>

      <section>
        <button><BsFillArrowUpSquareFill/></button>
        <p>COPYRIGHT © 2023 CASAADESIVE – TODOS OS DIREITOS RESERVADOS.</p>
      </section>

      </main>      
    </section>
  )
}
