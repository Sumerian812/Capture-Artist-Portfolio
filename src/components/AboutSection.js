import React from "react";
import home1 from "../img/home1.png"
import { StyledAbout, StyledImage, StyledHide, StyledDescription } from "../styles";

const AboutSection = () => {
    return (
        <StyledAbout>
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <h2>We work to make</h2>
                    </StyledHide>
                    <StyledHide>
                        <h2>your <span>dreams</span></h2>
                    </StyledHide>
                    <StyledHide>
                        <h2> come true.</h2>
                    </StyledHide>
                </div>
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