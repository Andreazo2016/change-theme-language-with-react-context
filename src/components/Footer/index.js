import React from 'react';
import { Container, BtnContainer, Button } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { useTranslate } from '../../context/LanguageContext';


function Footer() {
    const { theme } = useTheme();
    const { translate, setLanguage } = useTranslate();

    return (
        <Container
            theme={theme}
        >
            <h1>{translate('FOOTER_TEXT')}</h1>
            <BtnContainer
                theme={theme}
            >
                <button
                    onClick={() => setLanguage('pt-BR')}
                >
                    Português
                </button>
                <button
                    
                    onClick={() => setLanguage('en')}
                >
                    Inglês
                </button>
            </BtnContainer>
        </Container>
    );
}

export default Footer;