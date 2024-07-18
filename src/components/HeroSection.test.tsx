import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroSection from './HeroSection';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';

test('renders HeroSection component', () => {
    render(
        <ThemeProvider theme={theme}>
            <HeroSection />
        </ThemeProvider>
    );
    expect(screen.getByText(/Building Brands in the Digital Age/i)).toBeInTheDocument();
    expect(screen.getByText(/Learn More/i)).toBeInTheDocument();
});
