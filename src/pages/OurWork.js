import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
// Framer Motion
import { motion } from "framer-motion";
import {
    sliderContainer, slider, pageAnimation, fade, photoAnimation, lineAnimation
} from "../animation";

const OurWork = () => {
    return (
        <StyledDiv
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <StyledMovie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div className="line" variants={lineAnimation}></motion.div>
                <Link to="/work/the-athlete">
                    <StlyeHide>
                        <motion.img variants={photoAnimation} src={athlete} alt="athlete" />
                    </StlyeHide>
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={racer} alt="racer" />
                </Link>
            </StyledMovie>
            <StyledMovie>
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodTimes} alt="good times" />
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
`;

const StyledMovie = styled.div`
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
    top: 10%;
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