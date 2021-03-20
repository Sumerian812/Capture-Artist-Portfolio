import React from "react";
// Framer Motion
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";


const ContactUs = () => {
    return (
        <SytledContact
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}>
            <StyledTitle>
                <StyledHide>
                    <motion.h2 variants={titleAnimation}>
                        Get in Touch
                    </motion.h2>
                </StyledHide>
            </StyledTitle>
            <div>
                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Send Us a Message</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Give Us a Call</h2>
                    </StyledSocial>
                </StyledHide>
                <StyledHide>
                    <StyledSocial variants={titleAnimation}>
                        <StyledCircle />
                        <h2>Social Media</h2>
                    </StyledSocial>
                </StyledHide>
            </div>
        </SytledContact>
    );
};


const SytledContact = styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const StyledTitle = styled(motion.div)`
    margin-bottom: 4rem;
    color: black;
`;

const StyledHide = styled(motion.div)`
    overflow: hidden; 
`;

const StyledCircle = styled(motion.div)`
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    background: #353535;
`;

const StyledSocial = styled(motion.div)`
    display: flex;
    align-items: center;
    h2 {
        margin: 2rem;
    }
`;



export default ContactUs;

