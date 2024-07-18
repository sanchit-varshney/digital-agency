import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';  // Assuming these icons from react-icons are used

const TestimonialsContainer = styled.div`
    padding: 4rem 0;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const TestimonialWrapper = styled.div`
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
    flex: 1;
    text-align: right;
    margin-right: 2rem;
`;

const Image = styled.img`
    object-fit: cover;
`;

const QuoteWrapper = styled.div`
    flex: 3;
    position: relative;
    text-align: left;
    padding-bottom: 235px
`;

const QuoteIcon = styled(FaQuoteLeft)`
    font-size: 1.5rem;
    color: black;
    position: absolute;
    top: -24px;
    left: -374px;
`;

const Quote = styled.p`
    font-size: 1.2rem;
    color: #555;
    margin-bottom: 1rem;
    line-height: 1.5;
`;

const Author = styled.cite`
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    color: #2f2e41;
`;

const Navigation = styled.div`
    display: flex;
    justify-content: center;
    padding-left: 70%;
`;

const NavArrow = styled.button`
    background: none;
    border: none;
    font-size: 1rem;
    color: black;
    cursor: pointer;

    &:hover {
        color: #5753d1;
    }
`;

const Testimonials: React.FC = () => {
    return (
        <TestimonialsContainer>
            <TestimonialWrapper>
                <ImageWrapper>
                    <Image src={`${process.env.PUBLIC_URL}/images/DavidImage.png`} alt="David Calathan" /> 
                </ImageWrapper>
                <QuoteWrapper>
                    <QuoteIcon />
                    <Quote>"The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be."</Quote>
                    <Author>David Calathan – Director of Design Operations, New York</Author>
                </QuoteWrapper>
            </TestimonialWrapper>
            <Navigation>
                <NavArrow><FaArrowLeft /></NavArrow>
                <NavArrow><FaArrowRight /></NavArrow>
            </Navigation>
        </TestimonialsContainer>
    );
};

export default Testimonials;
