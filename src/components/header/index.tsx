import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useNavContext } from '@/contexts/navContext';


const Header = ({headerBgActive}: any) => {
    const { setAboutActive, setHintActive, setContactActive }: any = useNavContext();
    
    return (
        <header className={headerBgActive ? styles.container__bgActive : styles.container}>
            <section>
                <Image            
                src="/logo.webp"
                alt="Casa Adesive Logo"
                width={150}
                height={97}
                priority        
                />
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
            </section>
      </header>
    )
};

export default Header;