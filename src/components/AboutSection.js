import React from "react";
import home1 from "../img/home1.png"

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        We work to make
                    </div>
                    <div className="hide">
                        your <span>dreams</span>
                    </div>
                    <div className="hide">
                        come true.
                    </div>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec hendrerit sodales augue, ac aliquam ligula varius vel.
            </p>
            <button>Contact us</button>
            <div className="image">
                <img src={home1} alt="" />
            </div>
        </div>
    )
}

export default AboutSection;