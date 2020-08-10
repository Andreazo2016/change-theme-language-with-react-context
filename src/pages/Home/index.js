import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useTranslate } from '../../context/LanguageContext';

import { Container } from './styles';

function Home() {
    const { theme } = useTheme();
    const { translate } = useTranslate();
    return (
        <Container
            theme={theme}
        >
            <h1>{String(translate('BODY_TEXT')).toUpperCase()}</h1>
        </Container>
    );

}

export default Home;