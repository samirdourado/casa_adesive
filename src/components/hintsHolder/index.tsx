import React from 'react';
import styles from './styles.module.scss';
import HintsCard from '../hintsCard';
import { useNavContext } from '@/contexts/navContext';

const HintsHolder = () => {
    const { hintActive }: any = useNavContext();

    return (
        <section className={hintActive ? styles.container__hints__active : styles.container__hints} id='dicas'>
            <h2 className={styles.title__hint}>Dicas</h2>
            <ul className={styles.holder__hints}>
                <HintsCard/>
                <HintsCard/>
                <HintsCard/>
            </ul>
        </section>
    );
};

export default HintsHolder;
