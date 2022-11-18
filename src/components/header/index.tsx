import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: #282c34;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 40px;
`

export default function Header (): JSX.Element {
    return (
        <Container>
            Currency Converter
        </Container>
    )
}