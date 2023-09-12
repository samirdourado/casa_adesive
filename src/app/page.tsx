import Button from '@/components/button';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { BsWhatsapp, BsFillArrowUpSquareFill } from 'react-icons/bs';

import styles from './styles.module.scss';
import HintsHolder from '@/components/hintsHolder';
import Contact from '@/components/contact';


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
        id='home'
      />
      <div className={styles.description} id='quemsomos'>
        <h1>Casa Adesive</h1>
        <p>Somos especialistas em adesivos decorativos de alta qualidade. Transformamos sua casa em um ambiente único e acolhedor com soluções personalizadas. Com uma equipe altamente capacitada, estamos prontos para atender suas necessidades.</p>        
        <Button
          className={styles.description__bt__whatsapp}
          icon={<BsWhatsapp/>}
          text={'Whatsapp'}
        />
      </div>

      <HintsHolder/>

      <Contact/>      

      <section>        
        <Link href={'#home'}><BsFillArrowUpSquareFill/></Link>
        <p>COPYRIGHT © 2023 CASAADESIVE – TODOS OS DIREITOS RESERVADOS.</p>
      </section>

      </main>      
    </section>
  )
}
