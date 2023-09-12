import Header from '@/components/header';
import Image from 'next/image';
import styles from './styles.module.scss';
import HintsHolder from '@/components/hintsHolder';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import About from '@/components/about';


export default function Home() {
  return (
    <section className={styles.container}>
      <Header/>
      <main>
        <Image
          className={styles.banner}
          src="/cozinha-preta-1100x580.jpeg"
          alt="Casa Adesive Logo"
          width={221}
          height={144}
          priority
          id='home'
        />
        <About/>
        <HintsHolder/>
        <Contact/>
        <Footer/>
      </main>      
    </section>
  )
};
