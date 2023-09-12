import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss'

const Header = () => {
    return (
        <header className={styles.container}>
            <Image            
            src="/logo.webp"
            alt="Casa Adesive Logo"
            width={150}
            height={97}
            priority        
            />
            <nav className={styles.nav__container}>
                <Link href={'#home'}>HOME</Link>
                <Link href={'#quemsomos'}>QUEM SOMOS</Link>
                <Link href={'#dicas'}>DICAS</Link>
                <Link href={'#contato'}>CONTATO</Link>
                
            </nav>
      </header>
    )
}

export default Header