import React from "react";
import styled from "styled-components/macro";
import { StyledAbout, StyledImage, StyledDescription } from "../styles";
import { useScroll } from "./useScroll";
import { fade } from "../animation";

const ServicesSection = () => {
    const [element, controls] = useScroll();

    return (
        <StyledServices ref={element} animate={controls} variants={fade}>
            <StyledDescription>
                <h2>High <span>quality</span> service.</h2>
                <StyledCards>
                    <StyledCard>
                        <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/clock.svg`} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/diaphragm.svg`} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/money.svg`} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                    <StyledCard>
                        <div className="icon"><img src={`${process.env.PUBLIC_URL}/assets/teamwork.svg`} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>
            </StyledDescription>
            <StyledImage>
                <img src={`${process.env.PUBLIC_URL}/assets/home2.png`} alt="home" />
            </StyledImage>
        </StyledServices>
    )
}

const StyledServices = styled(StyledAbout)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const StyledCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 1200px){
        justify-content: center;
    }
`;

const StyledCard = styled.div`
    flex-basis: 20rem;
    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`;

export default ServicesSection;