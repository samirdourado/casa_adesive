'use client'
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
    children: ReactNode;
};

interface navProviderData {
    aboutActive: boolean;
    setAboutActive: React.Dispatch<React.SetStateAction<boolean>>;
    hintActive: boolean;
    setHintActive: React.Dispatch<React.SetStateAction<boolean>>;
    contactActive: boolean;
    setContactActive: React.Dispatch<React.SetStateAction<boolean>>;
    menuActivate: boolean;
    setMenuActivate: React.Dispatch<React.SetStateAction<boolean>>;
    handleWhatsApp: () => void;
    instagramLink: string;
    handleFacebook: (pageUrl: string) => void
};

const NavContext = createContext<navProviderData>({} as navProviderData);

export const NavProvider = ({ children }: Props) => {
    const [aboutActive, setAboutActive] = useState(false);
    const [hintActive, setHintActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);
    const [menuActivate, setMenuActivate] = useState(false);

    const instagramLink = "https://www.instagram.com/casaadesive/";

    const handleWhatsApp = () => {
        const urlMessage = `Olá, quero saber mais sobre envelopamento`;
        const urlWhatsApp = `https://wa.me/5511993054964/?text=${urlMessage}`;
        window.open(urlWhatsApp, '_blank');
    };

    const handleFacebook = (pageUrl: string) => {
        const facebookUrl: string = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`        
        window.open(facebookUrl, '_blank')
    };

    return (
        <NavContext.Provider
            value={{
                aboutActive, setAboutActive,
                hintActive, setHintActive,
                contactActive, setContactActive,
                menuActivate, setMenuActivate,
                instagramLink, handleWhatsApp,
                handleFacebook,
            }}
        >
            { children }
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);