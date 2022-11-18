import React, { Dispatch, SetStateAction } from 'react';
import { getCurrencyInfoList } from '../utils/api';
import { useQuery } from 'react-query';
import { CurrencyInfo } from '../utils/types';
export interface ContextType {
    currencyList: CurrencyInfo[];
    setCurrencyList: Dispatch<SetStateAction<CurrencyInfo[]>>;
}

interface ProviderProps {
    children: React.ReactNode
}

export const DataContext = React.createContext({} as ContextType);

export default function DataProvider({ children }: ProviderProps): JSX.Element {

    const [currencyList, setCurrencyList] = React.useState<CurrencyInfo[]>([]);
    
    const { data, status } = useQuery('currencyInfo', getCurrencyInfoList);

    React.useEffect(() => {
        if(status === 'success') {
            const tempList: CurrencyInfo[] = [];
            const currencyInfo: string[] = data.split('\n');
            currencyInfo.shift();
            currencyInfo.shift();
            currencyInfo.forEach((currencyItem) => {
                if(currencyItem) {
                    const tempData: string[] = currencyItem.split('|');
                    tempList.push({
                        currency: tempData[3],
                        rate: Number(tempData[4])
                    })
                }
            });
            console.log('tempList is ', tempList);
            setCurrencyList(tempList);
        }
    }, [status])
    
    return (
        <DataContext.Provider
            value={{
                currencyList,
                setCurrencyList
            }}
        >
            {
                children
            }
        </DataContext.Provider>
    )
}