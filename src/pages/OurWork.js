import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
// Imaged
import athlete from "../img/athlete-small.png";
import goodtimes from "../img/goodtimes-small.png";
import theracer from "../img/theracer-small.png";
// Framer Motion
import { motion } from "framer-motion";
import {
    sliderContainer, slider, pageAnimation, fade, photoAnimation, lineAnimation
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
    const [element1, controls1] = useScroll();
    const [element2, controls2] = useScroll();

    return (
        <StyledDiv
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <ScrollTop />
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie initial="show">
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div className="line" variants={lineAnimation}></motion.div>
                <Link to="/work/the-athlete">
                    <StlyeHide>
                        <motion.img
                            variants={photoAnimation}
                            src={athlete}
                            alt="athlete"
                        />
                    </StlyeHide>
                </Link>
            </StyledMovie>
            <StyledMovie ref={element1} variants={fade} animate={controls1} initial="hidden">
                <h2>The Racer</h2>
                <motion.div className="line" variants={lineAnimation}></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer" />
                </Link>
            </StyledMovie>
            <StyledMovie ref={element2} variants={fade} animate={controls2} initial="hidden">
                <h2>Good Times</h2>
                <motion.div className="line" variants={lineAnimation}></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="good times" />
                </Link>
            </StyledMovie>
        </StyledDiv>
    );
};

const StyledDiv = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2 {
        padding: 1rem 0rem;
    }
    @media (max-width: 1200px){
        padding: 2rem;
    }
`;

const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StlyeHide = styled.div`
    overflow: hidden;
`;

// Frame Animations
const Frame1 = styled(motion.div)`
    position: fixed;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
    background: #8effa0;
`;

export default OurWork;