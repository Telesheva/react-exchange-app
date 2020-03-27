import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import "./CurrencyCalculatorForm.scss";
import {Button, Input, Select} from "../../common";
import rootReducer from "../../../store/reducers/rootReducer";
import {useDispatch} from "react-redux";
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import {IRates} from "../../../models/models";
import {fetchExchangeRates} from "../../../store/actions/currency";

const CurrencyCalculatorForm = () => {
    type RootState = ReturnType<typeof rootReducer>
    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
    const {rates, base}: IRates = useSelector(state => state.currency);

    const dispatch = useDispatch();

    const [convert, setConvert] = useState({
        amountForConvert: 0,
        currencyForConvert: '',
        convertedValue: 0
    });
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        dispatch(fetchExchangeRates());
    }, [dispatch]);

    const onSubmitFormHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (convert.amountForConvert && convert.currencyForConvert) {
            Object.entries(rates).forEach(rateArr => {
                if (rateArr[0] === convert.currencyForConvert) setConvert({
                    ...convert,
                    convertedValue: (convert.amountForConvert * rateArr[1])
                });
            });
        } else {
            window.alert('Enter all the data!');
        }
    };

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        if (isNaN(Number(event.target.value))) {
            setErrorMessage('Only numbers allowed!');
        } else {
            setErrorMessage('');
            setConvert({
                ...convert,
                amountForConvert: Number(event.target.value)
            });
        }
    };

    const onSelectChangeHandler = (event: ChangeEvent<HTMLSelectElement>): void => {
        setConvert({
            ...convert,
            currencyForConvert: event.target.value
        });
    };

    return (
        <form className="calculator-form" onSubmit={onSubmitFormHandler}>
            <div className="calculator-form__result">
                <div className="calculator-form__result_inputs">
                    <Input
                        type="text"
                        onChange={onInputChangeHandler}
                        errorMessage={errorMessage}
                    />
                    <label htmlFor="select1">
                        FROM <strong>{base}</strong> TO:
                    </label>
                    <Select
                        name="rate"
                        id="select1"
                        options={Object.keys(rates)}
                        onChange={onSelectChangeHandler}
                        selectedOption={convert.currencyForConvert}
                    />
                </div>
                <Button type="submit" colorScheme="dark">Calculate</Button>
                {convert.convertedValue > 0 &&
                <>
                  <strong className="calculator-form__text">Result:</strong>
                  <p>{convert.convertedValue} {convert.currencyForConvert}</p>
                </>
                }
            </div>
        </form>
    )
};

export default CurrencyCalculatorForm;
