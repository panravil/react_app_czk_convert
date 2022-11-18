import React from 'react';
import styled from'styled-components';

const Container = styled.div`
    max-width: 600px;
    width: 80%;
    padding: 20px 20px;
    border-radius: 8px;
    background-color: #282c34;
`

interface PropTypes {
    children: React.ReactNode
}

export default function Card ({children}: PropTypes): JSX.Element {
    return (
        <Container>
            {
                children
            }
        </Container>
    )
}