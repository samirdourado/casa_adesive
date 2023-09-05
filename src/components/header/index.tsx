import React from 'react';
import Image from 'next/image';
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
      </header>
    )
}

export default Header