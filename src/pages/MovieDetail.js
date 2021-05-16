import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components/macro";
import { MovieState } from "../movieState";
import ScrollTop from "../components/ScrollTop";
// Framer Motion
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
    const { id } = useParams();
    const [movies] = useState(MovieState);
    const [movie, setMovie] = useState({});

    useEffect(() => {
        setMovie(movies.find(stateMovie => stateMovie.url.includes(id)));
    }, [id, movies])

    return (
        <>
            {movie &&
                <StyledDetails
                    variants={pageAnimation}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={movie.title}
                >
                    <ScrollTop />
                    <StyledHeadline>
                        <h1>{movie?.title}</h1>
                        <img src={process.env.PUBLIC_URL + movie?.mainImg} alt="movie" />
                    </StyledHeadline>
                    <StyledAwards>
                        {movie?.awards?.map(award =>
                            <Award title={award.title} description={award.description} key={award.url} />
                        )}
                    </StyledAwards>
                    <StyledImage>
                        <img src={process.env.PUBLIC_URL + movie?.secondaryImg} alt="movie" />
                    </StyledImage>
                </StyledDetails>
            }
        </>
    );
}

// Additional Components
const Award = ({ title, description, key }) => {
    return (
        <StyledAward key={key}>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </StyledAward>
    );
}

// Styled Components
const StyledDetails = styled(motion.div)`
    color:white;
`;

const StyledHeadline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h1 {
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;

const StyledAwards = styled.div`
    min-height: 80vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 5rem 10rem;
    @media (max-width: 1200px){
        display: block;
        margin: 2rem;
    }
`;

const StyledAward = styled.div`
    padding: 5rem;
    h3 {
        font-size: 2rem;
    }
    .line {
        width: 100%;
        background: #23D997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p {
        padding: 2rem 0rem;
    }
`;

const StyledImage = styled.div`
    min-height: 50vh;
    img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;

export default MovieDetail;