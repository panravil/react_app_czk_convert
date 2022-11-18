import React from 'react';
import styled from 'styled-components';
import { InputType } from 'zlib';

interface PropTypes extends React.InputHTMLAttributes<unknown> {
    title?: string;
    style?: React.CSSProperties;
}

const Input = styled.input`
    outline: none;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 16px;
    line-height: 28px;
    padding: 13px 16px;
    width: 100px;
    &:disabled {
        background-color: white;
    }
    @media (max-width: 768px) {
        width: unset;
    }
`

export default function TitleInput ({title, style, ...props}: PropTypes): JSX.Element {
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={{fontSize: '1.4rem', lineHeight: '1.5rem', marginBottom: '4px', color: 'white'}}>
                {
                    title ? title : ''
                }
            </div>
            <Input style={style} type={'number'} {...props} ></Input>
        </div>        
    )
}