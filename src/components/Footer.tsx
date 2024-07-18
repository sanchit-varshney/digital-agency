import React from 'react';
import styled from 'styled-components';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
    padding: 3rem 2rem;
    background: ${(props) => props.theme.colors.dark};
    color: ${(props) => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: black;
`;

const Section = styled.div`
    flex: 1;
    margin: 0 1.5rem;
`;

const Title = styled.h3`
    margin-bottom: 1.5rem;
    font-weight: bold;
`;

const Text = styled.p`
    margin-bottom: 2rem;
    line-height: 1.6;
`;

const LinkList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const LinkItem = styled.li`
    margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 1rem;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <Section>
                <Title>Digital agency</Title>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Nunc sodales in volutpat ullamcorper amet adipiscing fermentum.</Text>
                <SocialIcons>
                    <FaTwitter />
                    <FaFacebookF />
                    <FaInstagram />
                </SocialIcons>
            </Section>
            <Section>
                <Title>Company</Title>
                <LinkList>
                    <LinkItem>About</LinkItem>
                    <LinkItem>Features</LinkItem>
                    <LinkItem>Works</LinkItem>
                    <LinkItem>Career</LinkItem>
                </LinkList>
            </Section>
            <Section>
                <Title>Help</Title>
                <LinkList>
                    <LinkItem>Customer Support</LinkItem>
                    <LinkItem>Delivery Details</LinkItem>
                    <LinkItem>Terms & Conditions</LinkItem>
                    <LinkItem>Privacy Policy</LinkItem>
                </LinkList>
            </Section>
            <Section>
                <Title>Resources</Title>
                <LinkList>
                    <LinkItem>Free eBooks!</LinkItem>
                    <LinkItem>How to - Blog</LinkItem>
                </LinkList>
            </Section>
        </FooterContainer>
    );
};

export default Footer;
