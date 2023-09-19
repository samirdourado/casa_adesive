import React from 'react';
import Link from 'next/link';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import { useNavContext } from '@/contexts/navContext';

const Footer = () => {
    const { setAboutActive, setHintActive, setContactActive }: any = useNavContext();

    return (
        <section className={styles.container}>
        <Link 
            href={'#home'} 
            className={styles.toTop__button}
            onClick={() => {
                setAboutActive(false), 
                setHintActive(false), 
                setContactActive(false)
            }}
        >
        <BsFillArrowUpSquareFill 
            size={32}
            className={styles.toTop__button__icon}
        />
        </Link>
        <p>COPYRIGHT © 2023 CASA ADESIVE – TODOS OS DIREITOS RESERVADOS.</p>
        <hr></hr>
      </section>
    )
};

export default Footer;
