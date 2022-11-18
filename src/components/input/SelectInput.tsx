import React from 'react';
import styled from 'styled-components';
import { CurrencyInfo } from '../../utils/types';

interface PropTypes extends React.HtmlHTMLAttributes<unknown> {
    title: string;
    optionList?: CurrencyInfo[];
}

const Select = styled.select`
    outline: none;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    font-size: 16px;
    line-height: 28px;
    padding: 13px 40px 13px 16px;
    height: 56px;
`

export default function SelectInput({ title, optionList, ...props }: PropTypes): JSX.Element {
    return (
        <div style={{marginBottom: '10px'}}>
            <div style={{ fontSize: '1.4rem', lineHeight: '1.5rem', marginBottom: '4px', color: 'white' }}>
                {
                    title
                }
            </div>
            <Select {...props}>
                <option value=''>Choose Currency</option>
                {
                    optionList && optionList.length > 0 && optionList.map((item, index) => (
                        <option value={item.rate} key={index}>
                            {
                                item.currency
                            }
                        </option>
                    ))
                }
            </Select>
        </div>
    )
}