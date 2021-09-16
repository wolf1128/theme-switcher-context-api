import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { themeContext } from '../context/themeContext';

const Header = () => {
	const { currentTheme, switchThemeHandler } = React.useContext(themeContext);

	React.useEffect(() => {
		window.localStorage.setItem('theme', currentTheme);
	});

	return (        
		<Navbar bg={currentTheme === 'light' ? 'info' : 'dark'} variant='dark'>
			<Container>
				<Navbar.Brand href='' style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}>Theme Switcher</Navbar.Brand>
				<Nav className='me-auto'></Nav>
				<Nav>
					<Form>
						<Form.Check
							type='radio'
							checked={currentTheme === 'dark'}
							name='theme'
							id='theme-checkbox-1'
							label='dark'
							className='mx-1'
							inline
							onChange={() => switchThemeHandler('dark')}
                            style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}
						/>
						<Form.Check
							type='radio'
							checked={currentTheme === 'light'}
							name='theme'
							id='theme-checkbox-2'
							label='light'
							className='mx-1'
							inline
							onChange={() => switchThemeHandler('light')}
                            style={{ color: currentTheme === 'light' ? '#000' : '#fff' }}
						/>
					</Form>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
