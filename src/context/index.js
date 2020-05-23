import React from 'react';

const ThemeContext = React.createContext({
    value: 'yellow',
    onChangeTheme: () => {}
});

export default ThemeContext;