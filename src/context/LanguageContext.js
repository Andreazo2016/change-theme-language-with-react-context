import React, { createContext, useContext, useCallback, useState } from 'react';
import ptBr from '../translation/pt';
import en from '../translation/en';

const LanguageProvider = createContext({})

const languages = {
    'pt-BR': ptBr,
    'en': en
}

function LanguageContext({ children }) {
    const [languageKey, setLanguageKey] = useState('pt-BR')

    const setLanguage = useCallback((languageKey) => {
        setLanguageKey(languageKey)
    }, [])

    const translate = useCallback((key) => {
        return languages[languageKey][key]
    }, [languageKey])

    return (
        <LanguageProvider.Provider
            value={{ setLanguage, translate }}
        >
            {children}
        </LanguageProvider.Provider>
    );
}

function useTranslate() {
    const context = useContext(LanguageProvider);
    if (!context) {
        throw new Error('useTranslate must be used within an LanguageProvider');
    }

    return context;
}


export { LanguageContext, useTranslate };