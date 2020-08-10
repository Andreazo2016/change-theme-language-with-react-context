import React from 'react';

import { ThemeContext } from './ThemeContext';
import { LanguageContext } from './LanguageContext';

function ContextApplication({ children }) {
    return <ThemeContext>
        <LanguageContext>
            {children}
        </LanguageContext>
    </ThemeContext>;
}

export default ContextApplication;