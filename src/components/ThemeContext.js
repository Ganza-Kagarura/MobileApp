import React, { createContext, useContext, useEffect, useState } from "react";
import { Appearance, useColorScheme } from "react-native";


const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const colorScheme = useColorScheme();
    const [theme, setTheme] = useState(colorScheme || 'light');

    useEffect(() => {
        const subscription = Appearance.addChangeListener(({colorScheme}) => {
            setTheme(colorScheme);
        });

        return () => {
            subscription.remove();
        };
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

    export const useTheme = () => {
        const context = useContext(ThemeContext);
        if(!context) {
            throw new Error('useTheme must be used within a ThemeProvider');
        }
        return context;
    }