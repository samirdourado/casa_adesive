import React from 'react';
import styles from './styles.module.scss';
import Button from '../button';
import { AiOutlineClose } from 'react-icons/ai';
import { useNavContext } from '@/contexts/navContext';
import Link from 'next/link';

const HamburguerMenu = () => {

    const { setAboutActive, setHintActive, setContactActive, setMenuActivate }: any = useNavContext();

    return (
        <div className={styles.backdrop}>
            <div className={styles.menu__container}>
                <Button
                    className={styles.button__close}
                    icon={ <AiOutlineClose/> }
                    onClick={ () => setMenuActivate(false) }            
                />

                <nav className={styles.nav__container__mobile}>
                    <Link href={'#home'} onClick={() => {
                        setAboutActive(false), 
                        setHintActive(false), 
                        setContactActive(false),
                        setMenuActivate(false)
                        }}
                        >HOME
                    </Link>
                    <Link href={'#quemsomos'} onClick={() => {
                        setAboutActive(true), 
                        setHintActive(false), 
                        setContactActive(false),
                        setMenuActivate(false)
                        }}>QUEM SOMOS
                    </Link>
                    <Link href={'#dicas'} onClick={() => {
                        setAboutActive(false), 
                        setHintActive(true), 
                        setContactActive(false),
                        setMenuActivate(false)                        
                        }}>DICAS
                    </Link>
                    <Link href={'#contato'} onClick={() => {
                        setAboutActive(false), 
                        setHintActive(false), 
                        setContactActive(true),
                        setMenuActivate(false)
                    }}>CONTATO
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default HamburguerMenu;
