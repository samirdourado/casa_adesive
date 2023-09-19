import React from 'react';
import Button from '../button';
import { BsWhatsapp } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useNavContext } from '@/contexts/navContext';

const About = () => {
  const { aboutActive }: any = useNavContext();
  
    return (      
      <section className={ aboutActive ? styles.description__active : styles.description } id='quemsomos'>
      <h1>Casa Adesive</h1>
      <p>Somos especialistas em adesivos decorativos de alta qualidade. Transformamos sua casa em um ambiente único e acolhedor com soluções personalizadas. Com uma equipe altamente capacitada, estamos prontos para atender suas necessidades.</p>        
      <Button
        className={styles.description__bt__whatsapp}
        icon={<BsWhatsapp/>}
        text={'Whatsapp'}
      />
    </section>
    );
};

export default About;
