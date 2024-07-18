import React from 'react';
import styled from 'styled-components';
import { FaMobileAlt, FaGlobe, FaPaintBrush, FaLaptopCode  } from 'react-icons/fa';  // Assuming these icons from react-icons are used

const ServicesContainer = styled.div`
    padding: 4rem 0;
    background: #fff;
    text-align: center;
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2f2e41;
`;

const Subheading = styled.p`
    font-size: 1.2rem;
    margin-bottom: 3rem;
    color: #7a7a7a;
`;

const ServicesGrid = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const ServiceCard = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 2rem;
    text-align: left;
    max-width: 250px;
`;

const IconWrapper = styled.div`
    font-size: 2rem;
    color: #6c63ff;
    margin-bottom: 1rem;
`;

const ServiceTitle = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #2f2e41;
`;

const ServiceDescription = styled.p`
    font-size: 1rem;
    color: #7a7a7a;
`;

const LearnMoreButton = styled.button`
    margin-top: 2rem;
    padding: 0.75rem 1.5rem;
    background: #6c63ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background: #5753d1;
    }
`;

const Services: React.FC = () => {
    return (
        <ServicesContainer>
            <Heading>Explore Our Services</Heading>
            <Subheading>We are self-service data analytics software that lets you create visually.</Subheading>
            <ServicesGrid>
                <ServiceCard>
                    <IconWrapper><FaMobileAlt /></IconWrapper>
                    <ServiceTitle>App Development</ServiceTitle>
                    <ServiceDescription>
                        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconWrapper><FaGlobe /></IconWrapper>
                    <ServiceTitle>Web Designing</ServiceTitle>
                    <ServiceDescription>
                        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconWrapper><FaPaintBrush /></IconWrapper>
                    <ServiceTitle>Graphic Designing</ServiceTitle>
                    <ServiceDescription>
                        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor.
                    </ServiceDescription>
                </ServiceCard>
                <ServiceCard>
                    <IconWrapper><FaLaptopCode  /></IconWrapper>
                    <ServiceTitle>Digital Marketing</ServiceTitle>
                    <ServiceDescription>
                        ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor.
                    </ServiceDescription>
                </ServiceCard>
            </ServicesGrid>
            <LearnMoreButton>Learn More</LearnMoreButton>
        </ServicesContainer>
    );
};

export default Services;
