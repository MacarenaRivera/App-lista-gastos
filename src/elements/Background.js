import React from "react";
import styled from "styled-components";
import { ReactComponent as Points } from "./../images/puntos.svg";

const Background = () => {
    return ( 
        <>
            <PointsUp />
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path 
                    fillOpacity="1" 
                    d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,90.7C672,128,768,192,864,202.7C960,213,1056,171,1152,133.3C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </Svg>
            <PointsDown />
        </>
     );
}
 


const Svg = styled.svg`
    height: 50vh;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 0;
    path {
        fill: rgba(135,182,194, .15);
    }
`;
 
const PointsUp = styled(Points)`
    position: fixed;
    z-index: 1;
    top: 2.5rem; /* 40px */
    left: 2.5rem; /* 40px */
`;
 
const PointsDown = styled(Points)`
    position: fixed;
    z-index: 1;
    bottom: 2.5rem; /* 40px */
    right: 2.5rem; /* 40px */
`;

export default Background;