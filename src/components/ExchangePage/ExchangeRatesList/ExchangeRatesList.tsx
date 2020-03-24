import React, {useEffect} from "react";
import "./ExchangeRatesList.scss";
import {ExchangeRateItem} from "../../index";
import {useDispatch} from "react-redux";
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import rootReducer from "../../../store/reducers/rootReducer";
import {fetchCurrencies, fetchExchangeRates} from "../../../store/actions/currency";

export interface IRates {
    [k: string]: number
}

export const ExchangeRatesList: React.FC = () => {
    type RootState = ReturnType<typeof rootReducer>
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const currencies = useSelector(state => state.currency.currencies);
    //const rates: IRates = useSelector(state => state.currency.rates);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCurrencies());
        dispatch(fetchExchangeRates());
    }, []);

    return (
        <div className="exchange-rates">
            <h2>Exchange Rates on 18 March 2020</h2>
            <ul className="exchange-rates__list">
                {currencies ? Object.values(currencies).map(currency => {
                    if (typeof currency === 'string') {
                        console.log(currency);
                        return <ExchangeRateItem rateItem={currency} key={Math.random()}/>
                    }
                }) : <h2>Loading...</h2>}
            </ul>
        </div>
    )
};

export default ExchangeRatesList;
