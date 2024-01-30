'use client'
import React, { useEffect} from 'react';
import dataCards from '@/database';
import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss';
import { FaSquareFacebook, FaSquareXTwitter } from 'react-icons/fa6';
import Footer from '@/components/footer';
import CardPost from '@/interface/card.interface';
import Button from '@/components/button';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { useNavContext } from '@/contexts/navContext';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { getURL } from 'next/dist/shared/lib/utils';


const PostHints = ({ params }: { params: { id: number } }) => {

    const { handleWhatsApp, instagramLink, handleFacebook  }: any = useNavContext();

    const dataPost = dataCards.filter((data: any) => data.id == params.id);
    const othersPost = dataCards.filter((data: any) => data.id != params.id);    
    
    // const currentUrl = window.location.href;
    // const currentUrl = getURL();
    // console.log(currentUrl);

    return (
        <div className={styles.body}>
        <main className={styles.main__container}>
            <h2 className={styles.hint__header}>Dicas</h2>            
            {
            dataPost ? (
                dataPost.map((data: any) => (
                    <main key={data.id} className={styles.post__container}>                        
                        <Link 
                          href={'/'} 
                          className={styles.post__text__small}
                        >
                            {'< Todas as postagens'}
                        </Link>
                        <h1 className={styles.post__text_margin}>{data.title}</h1>
                        <p className={styles.post__text__small}>{data.date}</p>
                        <Image 
                          className={styles.post__banner} 
                          src={data.image} 
                          alt={data.title} 
                          width={1200} 
                          height={400}
                          priority
                        />
                        {data.text.map((content: any, i: any) => (
                            <p className={styles.post__description} key={i}>{content}</p>
                        ))}
                        <section className={styles.actions__section}>
                            <span className={styles.share__span__container}>
                                <p className={styles.post__text__small}>Compartilhar esta publicação:</p>
                                <span className={styles.share__spanButons__container}>
                                    <FaSquareFacebook size={32} className={styles.share__butons} onClick={() => handleFacebook('https://casa-adesive.vercel.app/' + data.id)}/>                                    
                                    <FaSquareXTwitter size={32} className={styles.share__butons} onClick={() => console.log('compartilhar no twitter')}/>
                                </span>
                            </span>
                            <Link 
                          href={'/'} 
                          className={styles.post__text__small}
                        >
                            {'< Voltar'}
                        </Link>

                        </section>
                    </main>
                ))
            ) : (<p>Carregando...</p>)
        }
        </main>
        <section className={styles.footer__container}>
            <section className={styles.footer__subContainer }>
                <h2>Outras postagens</h2>
                {othersPost ? (
                othersPost.map((data: CardPost) => (
                    <Link href={data.id+""} key={data.id} className={styles.card__mini__container}>
                        <Image 
                          className={styles.card__mini__figure} 
                          src={data.image} 
                          alt={data.title} 
                          width={150} 
                          height={150}
                          priority
                        />
                        <div>
                            <h2 className={styles.card__mini__title}>{data.title}</h2>
                            <p className={styles.card__mini__date}>{data.date}</p>
                        </div>
                    </Link>
                ))
                ) : (
                <p>Carregando</p>
                )}


            </section>
            <section className={styles.footer__subContainer}>
                <h2>Entre em contato</h2>
                <Button
                    className={styles.buttons__contacts__area}
                    icon={<BsWhatsapp size={20}/>}
                    text={'Clique aqui e faça seu orçamento'}
                    onClick={ () => handleWhatsApp() }
                />

                <h2>Siga nas redes sociais</h2>
                <div>
                <Button
                    className={styles.button__instagram} 
                    icon={<BsInstagram size={48}/>}
                    onClick={ () => window.open(instagramLink, "_blank") }
                />
                </div>
            </section>
        </section>
        <Footer/>
        </div>
    );
};

export default PostHints;
