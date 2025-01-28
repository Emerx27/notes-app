import { createContext, useState, useEffect } from 'react';

export const ScreenContext = createContext();

export const ScreenProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ScreenContext.Provider value={screenSize}>
            {children}
        </ScreenContext.Provider>
    );
};
