import axios from "axios"

export const getCurrencyInfoList = async (): Promise<any> => {
    try {
        const response = await axios.get('https://circumvent-cors.herokuapp.com/https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt');
        return response.data;
    } catch (err) {
        throw new Error('Fetch data failed!');
    }
}