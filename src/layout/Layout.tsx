import React from 'react';
import styled from 'styled-components';
import Header from '../components/header';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const HeaderContainer = styled.div`
    flex: 0 0 auto;
`

const BodyContainer = styled.div`
    flex: 1 1 auto;
    overflow: auto;
`

interface PropTypes {
    children: React.ReactNode
}

export default function Layout({children}: PropTypes): JSX.Element {
    return (
        <Container>
            <HeaderContainer>
                <Header></Header>
            </HeaderContainer>
            <BodyContainer>
                {
                    children
                }
            </BodyContainer>
        </Container>
    )
}