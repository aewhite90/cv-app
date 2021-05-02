import React from 'react';
import styled from 'styled-components';
import { FiFileText } from 'react-icons/fi';

const Heading = styled.header`
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    background-color: black;
    color: white;
    padding: 5px;
    margin-bottom: 1rem;
`;

const Header = () => {
    return (
        <Heading>
            <FiFileText />
            <span>CV Builder</span>
        </Heading>
    );
}

export default Header;