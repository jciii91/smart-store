import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

import Auth from '../../utils/auth';

const AppNavbar = () => {
    const MenuItems = [
        {
            title: 'Smart Speakers & Displays',
            path: '/SmartSpeakers&Displays',
            cName: 'dropdown-link'
        },
        {
            title: 'Smart Lighting',
            path: '/SmartLighting',
            cName: 'dropdown-link'
        },
        {
            title: 'Smart Plugs & Outlets',
            path: '/SmartPlugs&Outlets',
            cName: 'dropdown-link'
        },
        {
            title: 'Smart & Wi-Fi Thermostats',
            path: '/Smart&Wi-FiThermostats',
            cName: 'dropdown-link'
        },
        {
            title: 'Sprinkler & Irrigation Controls',
            path: '/Sprinkler&Irrigation',
            cName: 'dropdown-link'
        },
        {
            title: 'Pet Supplies & Technology',
            path: '/PetSupplies',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Security & Surveillance',
            path: '/HomeSecurity&Surveillance',
            cName: 'dropdown-link'
        },
        {
            title: 'Security Cameras & Surveillance',
            path: '/SecurityCameras&Surveillance',
            cName: 'dropdown-link'
        },
        {
            title: 'Smart Door Locks',
            path: '/SmartDoorLocks',
            cName: 'dropdown-link'
        },
        {
            title: 'Door & Window Security',
            path: '/Door&WindowSecurity',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Security Systems',
            path: '/HomeSecuritySystems',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Alarms & Sensors',
            path: '/HomeAlarms&Sensors',
            cName: 'dropdown-link'
        },
        {
            title: 'Smoke & Carbon Monoxide Detectors',
            path: '/Smoke&CarbonMonoxideDetectors',
            cName: 'dropdown-link'
        },
        {
            title: 'Home Security Accessories',
            path: '/HomeSecurityAccessories',
            cName: 'dropdown-link'
        },
        {
            title: 'All Home Security & Monitoring',
            path: '/AllHomeSecurity&Monitoring',
            cName: 'dropdown-link'
        }
    ]; 
  return (
    <>
    <Navbar bg="dark"  variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="/"><i className="fas fa-store"/> Store </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
                {MenuItems.map((item, index) => {
                    return(
                        <NavDropdown.Item href={item.path}>{item.title}</NavDropdown.Item>
                    )
                })}
            </NavDropdown>
            {Auth.loggedIn() ? (
                <>
                <Nav.Link href="cart">Cart</Nav.Link>
                <Nav.Link href="/">Logout</Nav.Link>
                </>
            ) : (
                <Nav.Link href="sign-up">Sign Up/Login</Nav.Link>
            )}
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  );
};

export default AppNavbar;
