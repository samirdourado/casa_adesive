"use client"
import React from 'react';
import { BsInstagram, BsWhatsapp } from 'react-icons/bs';
import { MdPlace } from 'react-icons/md';
import styles from './styles.module.scss';
import Button from '../button';

const Contact = () => {
    const instagramLink = "https://www.instagram.com/casaadesive/";    

    return (
        <section className={styles.container} id='contato'>
        <h2>Conete-se Conosco</h2>        
        <Button
            className={styles.button__instagram} 
            icon={<BsInstagram size={32}/>}            
            onClick={() => window.open(instagramLink, "_blank")}            
        />
        <h2>Contato</h2>
        <p>Se você deseja deixar a sua casa ainda mais bonita e aconchegante, entre em contato conosco pelo WhatsApp e descubra todas as nossas opções! Estamos ansiosos para ajudá-lo a transformar o seu lar!</p>        
        <Button
          className={styles.buttons__contacts__area}
          icon={<BsWhatsapp size={20}/>}
          text={'Envie uma mensagem'}
        />
        <h2>Casa Adesive</h2>
        <p>Travessa Dona Paula 13, São Paulo - SP, 01239-050, Brazil</p>
        <p>11 99305-4964</p>        
        <Button
            className={styles.buttons__contacts__area}
            icon={<MdPlace size={20}/>}
            text={'Como Chegar'}
        />
      </section>
    );
};

export default Contact;
