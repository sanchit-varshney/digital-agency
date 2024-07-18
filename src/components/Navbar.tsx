import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background: ${(props) => props.theme.colors.white};
`;

const NavLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        font-size: 1rem;
        font-weight: 500;

        &.btn {
            padding: 0.5rem 1rem;
            background: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.white};
            border-radius: 5px;
            transition: background 0.3s;

            &:hover {
                background: ${(props) => props.theme.colors.primaryDark};
            }
        }

        &:hover {
            color: ${(props) => props.theme.colors.primary};
        }
    }
`;

const Logo = styled.img`
    height: 60px;
`;

const Navbar: React.FC = () => {
    return (
        <Nav>
            <Logo src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Digital agency logo" />
            <NavLinks>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact" className="btn">Get in Touch</Link>
            </NavLinks>
        </Nav>
    );
};

export default Navbar;
