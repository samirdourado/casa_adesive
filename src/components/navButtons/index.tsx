import React from 'react';
import styles from './styles.module.scss';
import { useNavContext } from '@/contexts/navContext';
import Link from 'next/link';
import Button from '../button';
import { AiOutlineMenu } from 'react-icons/ai';

const NavButtons = () => {
    const { setAboutActive, setHintActive, setContactActive, setMenuActivate }: any = useNavContext();

    return (
        <>
        <nav className={styles.nav__container}>
            <Link href={'#home'} onClick={() => {
                setAboutActive(false), 
                setHintActive(false), 
                setContactActive(false)
                }}
                >HOME
            </Link>
            <Link href={'#quemsomos'} onClick={() => {
                setAboutActive(true), 
                setHintActive(false), 
                setContactActive(false)
                }}>QUEM SOMOS
            </Link>
            <Link href={'#dicas'} onClick={() => {
                setAboutActive(false), 
                setHintActive(true), 
                setContactActive(false)                        
                }}>DICAS
            </Link>
            <Link href={'#contato'} onClick={() => {
                setAboutActive(false), 
                setHintActive(false), 
                setContactActive(true)
            }}>CONTATO
            </Link>
        </nav>
        <Button
            className={ styles.button__hamburguer }
            icon={ <AiOutlineMenu/> }
            onClick={ () => setMenuActivate(true) }
        /> 
        </>
    )
};

export default NavButtons;
