import React from 'react';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';  // Assuming this icon from react-icons is used

const BlogsContainer = styled.div`
    padding: 4rem 0;
    background: ${(props) => props.theme.colors.background};
    text-align: center;
`;

const BlogsTitle = styled.h2`
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 2rem;
`;

const BlogsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
`;

const BlogCard = styled.div`
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: left;
`;

const BlogImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const BlogContent = styled.div`
    padding: 1.5rem;
`;

const BlogTitle = styled.h3`
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1rem;
`;

const BlogDescription = styled.p`
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
`;

const BlogReadMore = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

const ViewAllButton = styled.button`
    margin-top: 2rem;
    padding: 1rem 2rem;
    background: ${(props) => props.theme.colors.primary};
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: ${(props) => props.theme.colors.secondary};
    }
`;

const Blogs: React.FC = () => {
    return (
        <BlogsContainer>
            <BlogsTitle>Our Blogs</BlogsTitle>
            <BlogsWrapper>
                <BlogCard>
                    <BlogImage src={`${process.env.PUBLIC_URL}/images/BlogImage1.png`} alt="Blog 1" /> {/* Update the src with the correct path to the image */}
                    <BlogContent>
                        <BlogTitle>Realtime analytics</BlogTitle>
                        <BlogDescription>
                            “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.
                        </BlogDescription>
                        <BlogReadMore>
                            <span>Read more</span>
                            <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </BlogReadMore>
                    </BlogContent>
                </BlogCard>
                <BlogCard>
                    <BlogImage src={`${process.env.PUBLIC_URL}/images/BlogImage2.png`} alt="Blog 2" /> {/* Update the src with the correct path to the image */}
                    <BlogContent>
                        <BlogTitle>Realtime analytics</BlogTitle>
                        <BlogDescription>
                            “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.
                        </BlogDescription>
                        <BlogReadMore>
                            <span>Read more</span>
                            <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </BlogReadMore>
                    </BlogContent>
                </BlogCard>
                <BlogCard>
                    <BlogImage src={`${process.env.PUBLIC_URL}/images/BlogImage3.png`} alt="Blog 3" /> {/* Update the src with the correct path to the image */}
                    <BlogContent>
                        <BlogTitle>Realtime analytics</BlogTitle>
                        <BlogDescription>
                            “The results have been incredible. With Power Digital, it feels like they’re in our trench, supporting and understanding us. They’re like a partner and mentor in helping us get where we want to be. “The results have been incredible.
                        </BlogDescription>
                        <BlogReadMore>
                            <span>Read more</span>
                            <FaArrowRight style={{ marginLeft: '0.5rem' }} />
                        </BlogReadMore>
                    </BlogContent>
                </BlogCard>
            </BlogsWrapper>
            <ViewAllButton>View all posts</ViewAllButton>
        </BlogsContainer>
    );
};

export default Blogs;
