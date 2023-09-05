import Button from '@/components/button';
import Header from '@/components/header';
import Image from 'next/image';
import Link from 'next/link';
import { BsInstagram, BsWhatsapp, BsFillArrowUpSquareFill } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';

import styles from './styles.module.scss';


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

      <section>
        <h2>Dicas</h2>
        <ul>
          <li>
            <figure>
            <Image
              // className={styles.logo}
              src="/rs=w_1280.webp"
              alt="Casa Adesive Logo"
              width={221}
              height={144}
              priority        
            />
            </figure>
            <div>
              <p>10 de junho de 2023</p>
              <p>Cimento Queimado: Origem e características de uma estética brutalinha 3</p>
              <p>A parede de cimento queimado vem conquistando cada vez mais espaço na decoração de interiores, trazendo consigo uma estética bruta e moderna. Neste artigo, vamos explorar a origem desse revestimento e suas características...</p>
              <Link href={''}>Ler</Link>
            </div>
          </li>
        </ul>
      </section>

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
