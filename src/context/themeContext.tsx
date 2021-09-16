import React from 'react';

export const themeContext = React.createContext({
	currentTheme: '',
	themeSwitchHandler: (theme: string) => {},
});

const ThemeContextProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = React.useState(
		window.localStorage.getItem('theme') === null
			? 'light'
			: window.localStorage.getItem('theme')
	);

	const themeSwitchHandler = (theme: string) => {
		setCurrentTheme(theme);
	};

	return (
		<themeContext.Provider
			value={{ currentTheme: currentTheme, themeSwitchHandler }}
		>
            {children}
        </themeContext.Provider>
	);
};

export default ThemeContextProvider;
