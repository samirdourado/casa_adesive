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
};

const NavContext = createContext<navProviderData>({} as navProviderData);

export const NavProvider = ({ children }: Props) => {
    const [aboutActive, setAboutActive] = useState(false);
    const [hintActive, setHintActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    return (
        <NavContext.Provider
            value={{
                aboutActive, setAboutActive,
                hintActive, setHintActive,
                contactActive, setContactActive,
            }}
        >
            { children }
        </NavContext.Provider>
    );
};

export const useNavContext = () => useContext(NavContext);