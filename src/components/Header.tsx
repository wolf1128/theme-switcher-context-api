import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar bg="info" variant="dark">
            <Container>
                <Navbar.Brand href="">Theme Switcher</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Nav>
                    <Form>
                        <Form.Check 
                            type='radio'
                            name='theme'
                            id='theme-checkbox-1'
                            label='dark'
                            className='mx-1'
                            inline
                        />
                        <Form.Check 
                            type='radio'
                            name='theme'
                            id='theme-checkbox-2'
                            label='light'
                            className='mx-1'
                            inline
                        />                        
                    </Form>
                </Nav>
            </Container>
        </Navbar> 
    )
}

export default Header
