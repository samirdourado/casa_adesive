import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const HintsCard = () => {
    return (
        <li className={styles.card}>
            <figure className={styles.card__header}>
                <Image
                className={styles.card__header__image}
                src="/rs=w_1280.webp"
                alt="Casa Adesive Logo"
                width={270}
                height={180}
                priority
                />
            </figure>
            <div className={styles.card__body}>
                <p className={styles.card__body__date}>10 de junho de 2023</p>
                <p className={styles.card__body__title}>Cimento Queimado: Origem e características de uma estética brutalinha 3</p>
                <p className={styles.card__body__description}>A parede de cimento queimado vem conquistando cada vez mais espaço na decoração de interiores, trazendo consigo uma estética bruta e moderna. Neste artigo, vamos explorar a origem desse revestimento e suas características</p>
                <Link 
                    href={''}
                    className={styles.card__body__nav}
                >
                Ler
                </Link>
            </div>
        </li>
    )
}

export default HintsCard
