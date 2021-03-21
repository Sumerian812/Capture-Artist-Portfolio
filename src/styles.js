import styled from "styled-components/macro";
import { motion } from "framer-motion";

// Styled components
export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1200px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;

export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
    @media (max-width: 1200px){
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`;

export const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

export const StyledHide = styled.div`
    overflow: hidden
`;
