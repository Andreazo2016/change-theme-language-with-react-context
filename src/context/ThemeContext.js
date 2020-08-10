import React, { createContext, useContext, useCallback, useState } from 'react';
import light from '../themes/light';
import dark from '../themes/dark';

const ThemeProvider = createContext({});

function ThemeContext({ children }) {

    const [choosedTheme, setChoosedTheme] = useState(light);

    const changeTheme = useCallback(() => {
        const theme = choosedTheme.title === 'light' ? dark : light;
        setChoosedTheme(theme);
    }, [choosedTheme])

    return (
        <ThemeProvider.Provider
            value={{ theme: choosedTheme, changeTheme }}
        >
            {children}
        </ThemeProvider.Provider>
    );
}

function useTheme() {
    const context = useContext(ThemeProvider);
    if (!context) {
        throw new Error('useTheme must be used within an ThemeContext');
    }

    return context;
}

export { ThemeContext, useTheme };