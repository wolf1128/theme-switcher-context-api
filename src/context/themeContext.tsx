import React from 'react';

export const themeContext = React.createContext({
	currentTheme: '',
	switchThemeHandler: (theme: string) => {},
});

const ThemeContextProvider = ({ children }: any) => {
	const [currentTheme, setCurrentTheme] = React.useState<string>(
		window.localStorage.getItem('theme') === null
			? 'light'
			: window.localStorage.getItem('theme')!
	);

	const switchThemeHandler = (theme: string) => {
	    setCurrentTheme(theme);
	};

	return (
		<themeContext.Provider
			value={{ currentTheme: currentTheme, switchThemeHandler }}
		>
            {children}
        </themeContext.Provider>
	);
};

export default ThemeContextProvider;
