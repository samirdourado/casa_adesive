import Image from 'next/image';
import styles from './styles.module.scss';
import NavButtons from '../navButtons';

const Header = ({ headerBgActive }: any) => {    
    return (
        <header className={ headerBgActive ? styles.container__bgActive : styles.container }>
            <section>
                <Image            
                src="/logo.webp"
                alt="Casa Adesive Logo"
                width={150}
                height={97}
                priority        
            />
            <NavButtons/>
            </section>
      </header>
    );
};

export default Header;