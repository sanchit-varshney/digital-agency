import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Hero = styled.section`
    display: flex;
    align-items: center;
    padding: 4rem 0;
    background: ${(props) => props.theme.colors.background};
`;

const HeroText = styled.div`
    flex: 1;

    h1 {
        color: ${(props) => props.theme.colors.textDark};
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;

        span {
            color: ${(props) => props.theme.colors.primary};
        }
    }

    p {
        color: ${(props) => props.theme.colors.textLight};
        font-size: 1.25rem;
        margin-bottom: 2rem;
    }

    a {
        padding: 0.75rem 1.5rem;
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        border-radius: 5px;
        text-decoration: none;
        font-size: 1rem;
        font-weight: 500;
        transition: background 0.3s;

        &:hover {
            background: ${(props) => props.theme.colors.primaryDark};
        }
    }
`;

const HeroImageContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const HeroImage = styled.img`
    max-width: 100%;
    border-radius: 15px;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
`;

const LogoImage = styled.img`
    max-width: 100%;
`;

const HeroSection: React.FC = () => {
    return (
        <Hero>
            <Container>
                <Row>
                    <Col md={6}>
                        <HeroText>
                            <h1>
                                Building Brands in the <span>Digital Age</span>
                            </h1>
                            <p>
                                Your partner in navigating the ever-evolving landscape of digital marketing. From conceptualization to execution, we craft tailored solutions that drive results and elevate your brand to new heights.
                            </p>
                            <Link to="/learn-more">Learn More</Link>
                        </HeroText>
                    </Col>
                    <Col md={6}>
                        <HeroImageContainer>
                            <HeroImage src={`${process.env.PUBLIC_URL}/images/team.png`} alt="Team working" />
                        </HeroImageContainer>
                    </Col>
                </Row>
                <LogoContainer>
                    <LogoImage src={`${process.env.PUBLIC_URL}/images/CompaniesLogo.png`} alt="Company logos" />
                </LogoContainer>
            </Container>
        </Hero>
    );
};

export default HeroSection;
