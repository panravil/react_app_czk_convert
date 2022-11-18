import React from 'react';
import styled from 'styled-components';

interface PropTypes extends React.HTMLAttributes<unknown> {
    content: string;
}

const Button = styled.button`
    height: 56px;
    padding: 6px 100px;
    background-color: #4657a1;
    border-radius: 4px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    outline: none;
    border: none;
    cursor: pointer;
`

export default function CalculateButton({content, ...props}: PropTypes): JSX.Element {
    return (
        <Button {...props}>
            {
                content
            }
        </Button>
    )
}