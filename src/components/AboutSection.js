import React from "react";
import home1 from "../img/home1.png"
import { StyledAbout, StyledImage, StyledHide, StyledDescription } from "../styles";
// Framer Motion
import { motion } from "framer-motion";


const AboutSection = () => {
    const titleAnimation = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 1 } }
    };

    const container = {
        hidden: { x: 100 },
        show: { x: 0, transition: { ease: "easeOut", duration: 0.75, staggerChildren: 0.75 } }
    }

    return (
        <StyledAbout>
            <StyledDescription>
                <motion.div variants={container} initial="hidden" animate="show" className="title">
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                    </motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span></motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}> come true.</motion.h2>
                    </StyledHide>
                </motion.div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec hendrerit sodales augue, ac aliquam ligula varius vel.
                </p>
                <button>Contact us</button>
            </StyledDescription>
            <StyledImage>
                <img src={home1} alt="" />
            </StyledImage>
        </StyledAbout>
    )
}

export default AboutSection;