import React from 'react';
import Link from 'next/link';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import styles from './styles.module.scss';

const Footer = () => {
    return (
        <section className={styles.container}>
        <Link 
            href={'#home'} 
            className={styles.toTop__button}
        >
        <BsFillArrowUpSquareFill 
            size={32}
            className={styles.toTop__button__icon}
        />
        </Link>
        <p>COPYRIGHT © 2023 CASAADESIVE – TODOS OS DIREITOS RESERVADOS.</p>
        <hr></hr>
      </section>
    )
};

export default Footer;