import React, {useEffect, useState} from "react";
import "./ExchangeRatesList.scss";
import {ExchangeRateItem} from "../../index";
import {useDispatch} from "react-redux";
import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';
import rootReducer from "../../../store/reducers/rootReducer";
import {fetchExchangeRates} from "../../../store/actions/currency";
import {Button} from "../../common";

export interface IRates {
    rates: {[k: string]: number};
    base: string
}

export const ExchangeRatesList: React.FC = () => {
    type RootState = ReturnType<typeof rootReducer>
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const {rates, base}: IRates = useSelector(state => state.currency);

    const [showMore, setShowMore] = useState(false);
    const [showedHeight, setShowedHeight] = useState(450);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExchangeRates());
    }, []);

    return (
        <div className="exchange-layout">
        <div className="exchange-rates">
            <h2>Exchange Rates on 18 March 2020</h2>
            <h3 className="exchange-rates__base">Base: {base}</h3>
            <ul className="exchange-rates__list" style={{height: `${showedHeight}px`}}>
                {rates ? Object.entries(rates).map(rate => {
                    return <ExchangeRateItem rateItem={rate} key={Math.random()}/>
                }) : <h2>Loading...</h2>}
            </ul>
        </div>
        {(rates && showedHeight <= 4300) && <Button colorScheme="transparent" onClick={() => {
            setShowMore(true);
            if (showedHeight <= 4300) setShowedHeight(showedHeight + 450);
            console.log(showedHeight, showMore);
        }}>Show more</Button>}
        </div>
    )
};

export default ExchangeRatesList;
