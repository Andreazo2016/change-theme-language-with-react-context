import React, { useCallback } from 'react';
import Switch from "react-switch";
import { Container } from './styles';
import { useTheme } from '../../context/ThemeContext';
import { useTranslate } from '../../context/LanguageContext';


function Header() {
    const { theme, changeTheme } = useTheme();
    const {translate} = useTranslate();

    const handleChangeTheme = useCallback(() => {
        changeTheme();
    }, [changeTheme])

    return (
        <Container
            theme={theme}
        >
            <h1>{translate('HEADER_TEXT')}</h1>
            <Switch
                onChange={handleChangeTheme}
                checked={theme.title === 'light'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                handleDiameter={35}
                width={50}
            />
        </Container>
    );
}

export default Header;