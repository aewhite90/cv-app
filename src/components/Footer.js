import React from 'react';
import styled from 'styled-components';

const Footing = styled.footer`
    background-color: lightgrey;
    color: black;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    line-height: 15px;
    font-size: 10px;
`;

const Footer = () => {
    return (
        <Footing>
            <span>Made by aewhite90</span>
        </Footing>
    )
}

export default Footer;