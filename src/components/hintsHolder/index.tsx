import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import HintsCard from '../hintsCard';

const HintsHolder = () => {
    return (
        <section className={styles.container__hints}>
            <h2 className={styles.title__hint}>Dicas</h2>
            <ul className={styles.holder__hints}>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
            </ul>
        </section>
    )
};

export default HintsHolder
