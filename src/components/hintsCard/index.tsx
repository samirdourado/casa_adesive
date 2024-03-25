'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import dataCards from '@/database';
import CardPost from '@/interface/card.interface';
import { useRouter } from 'next/navigation'


const HintsCard = () => {
    const { push } = useRouter();

    return (
        <>
        {
            dataCards.length ? (
                dataCards.map((data: CardPost) =>(
                    <li className={styles.card} key={data.id}>
                    <figure className={styles.card__header}>
                        <Image
                            className={styles.card__header__image}
                            src={data.image}
                            alt={data.title}
                            width={270}
                            height={180}
                            priority
                        />
                    </figure>
                    <div className={styles.card__body}>
                        <p className={styles.card__body__date}>{data.date}</p>
                        <p className={styles.card__body__title}>{data.title}</p>
                        <p className={styles.card__body__description}>{data.text}</p>
                        <Link 
                            href={data.id+""}
                            className={styles.card__body__nav}                            
                        >
                        Ler
                        </Link>
                    </div>
                </li>
                ))
            ) : (<p>Carregando...</p>)
        }
        </>
    );
};

export default HintsCard;
