"use client"
import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
import styles from './styles.module.scss';
import Button from '../button';
import { useNavContext } from '@/contexts/navContext';

const Contact = () => {
  const { handleWhatsApp, instagramLink  }: any = useNavContext();  

  return (
      <section className={styles.container} id='contato'>
      <h2>Conete-se Conosco</h2>        
      <Button
        className={styles.button__instagram} 
        icon={<BsInstagram size={32}/>}            
        onClick={ () => window.open(instagramLink, "_blank") }
      />
      <h2>Contato</h2>
      <p>Se você deseja deixar a sua casa ainda mais bonita e aconchegante, entre em contato conosco pelo WhatsApp e descubra todas as nossas opções! Estamos ansiosos para ajudá-lo a transformar o seu lar!</p>        
      <Button
        className={styles.buttons__contacts__area}
        icon={<BsWhatsapp size={20}/>}
        text={'Envie uma mensagem'}
        onClick={ () => handleWhatsApp() }
      />
      <h2>Casa Adesive</h2>
      <p>Travessa Dona Paula 13, São Paulo - SP, 01239-050, Brazil</p>
      <p>11 99305-4964</p>
      <iframe 
        className={styles.maps__container}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1537.7698695963406!2d-46.660656061175494!3d-23.552141979708296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce583221c9ac81%3A0xc1d422cb9f0870b9!2sTv.%20Dona%20Paula%2C%2013%20-%20Higien%C3%B3polis%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001239-050!5e0!3m2!1spt-BR!2sbr!4v1695158810116!5m2!1spt-BR!2sbr" 
        width="600" 
        height="450"
        allowFullScreen={true}
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        >            
      </iframe>
    </section>
  );
};

export default Contact;
