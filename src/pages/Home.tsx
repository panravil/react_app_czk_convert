import React from 'react';
import styled from 'styled-components';
import CalculateButton from '../components/button/CalculateButton';

import Card from '../components/card/Card';
import SelectInput from '../components/input/SelectInput';
import TitleInput from '../components/input/TitleInput';
import { ContextType, DataContext } from '../context/DataContext';


const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    justify-content: center;
    align-items: center;
`

const FlexBetween = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
const FlexCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default function Home(): JSX.Element {

    const { currencyList }: ContextType = React.useContext(DataContext);

    const [amount, setAmount] = React.useState<number>(0);
    const [rate, setRate] = React.useState<number>();
    const [result, setResult] = React.useState<number>(0);

    const handleCalc = () => {
        if(rate) {
            setResult(amount * rate);
        } else {
            setResult(0);
        }
    }

    return (
        <Container>
            <Card>
                <FlexBetween>
                    <TitleInput value={amount} title='Amount' onChange={(e: any) => setAmount(e.target.value)}></TitleInput>
                    <SelectInput title='From' optionList={currencyList} onChange={(e: any) => setRate(e.target.value)}></SelectInput>
                    <TitleInput value={result.toFixed(2)} title='Result' disabled></TitleInput>
                </FlexBetween>
                <div style={{ textAlign: 'center', color: 'white', marginTop: '20px', marginBottom: '20px' }}>
                    Conversion rate is {rate ? rate : 0}
                </div>
                <FlexCenter>
                    <CalculateButton content='Calculate' onClick={handleCalc}></CalculateButton>
                </FlexCenter>
            </Card>
        </Container>
    )
}