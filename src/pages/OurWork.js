import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodTimes from "../img/goodtimes-small.png";
// Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const OurWork = () => {
    return (
        <StyledDiv
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >
            <StyledMovie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="athlete" />
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
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

export default OurWork;