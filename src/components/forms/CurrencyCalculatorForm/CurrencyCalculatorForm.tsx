import React, {useEffect} from "react";
import "./CurrencyCalculatorForm.scss";
import {Button, Input, Select} from "../../common";
import rootReducer from "../../../store/reducers/rootReducer";
import {useDispatch} from "react-redux";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {IRates} from "../../ExchangePage/ExchangeRatesList/ExchangeRatesList";
import {fetchExchangeRates} from "../../../store/actions/currency";

const CurrencyCalculatorForm = () => {

    type RootState = ReturnType<typeof rootReducer>
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const {rates}: IRates = useSelector(state => state.currency);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchExchangeRates());
    }, [dispatch]);

    return (
        <form className="calculator-form">
            <div className="calculator-form__result">
                <div className="calculator-form__result_inputs">
                    <Input type="number"/>
                    <Select
                        name="rate"
                        options={Object.keys(rates)}
                    />
                    <Select
                        name="rate"
                        options={Object.keys(rates)}
                    />
                </div>
                <Button type="submit" colorScheme="dark">Calculate</Button>
                <strong className="calculator-form__text">Result:</strong>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
            </div>
        </form>
    )
};

export default CurrencyCalculatorForm;
