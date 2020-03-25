import axios from 'axios';
import {
    FETCH_CURRENCY_BY_ABBREVIATION_ERROR, FETCH_CURRENCY_BY_ABBREVIATION_SUCCESS,
    FETCH_LATEST_RATES_ERROR,
    FETCH_LATEST_RATES_SUCCESS
} from "./actionTypes";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


type ActionsType =
    FetchCurrencySuccessActionType
    | FetchCurrencyErrorActionType
    | FetchLatestRatesSuccessActionType
    | FetchLatestRatesErrorActionType;

type FetchCurrencySuccessActionType = {
    type: typeof FETCH_CURRENCY_BY_ABBREVIATION_SUCCESS,
    currency: string
}

type FetchCurrencyErrorActionType = {
    type: typeof FETCH_CURRENCY_BY_ABBREVIATION_ERROR,
    error: string
}

type FetchLatestRatesSuccessActionType = {
    type: typeof FETCH_LATEST_RATES_SUCCESS,
    rates: RateType,
    base: string
}

type FetchLatestRatesErrorActionType = {
    type: typeof FETCH_LATEST_RATES_ERROR,
    error: string
}

export type CurrencyType = {
    [k: string]: string
}

export type RatesType = {
    [k: string]: {
        rates: {[k:string]: number}
        base: string
    }
}

export type RateType = {[k: string]: number}

export function fetchCurrencyByAbbreviation(abbreviation: string): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        const {data}: CurrencyType = await axios.get('https://openexchangerates.org/api/currencies.json');
        let currency: string;
        Object.entries(data).forEach(cur => {
            if (cur[0] === abbreviation) currency = cur[1];
            dispatch(fetchCurrenciesSuccess(currency));
        });
    }
}

export function fetchExchangeRates(): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        const {data}: RatesType = await axios.get('https://openexchangerates.org/api/latest.json?app_id=0eef8c31ba8042ac9895161e228730b5');
        dispatch(fetchExchangeRatesSuccess(data.rates, data.base));
    }
}

export function fetchCurrenciesSuccess(currency: string): FetchCurrencySuccessActionType {
    return {
        type: FETCH_CURRENCY_BY_ABBREVIATION_SUCCESS,
        currency
    }
}

export function fetchExchangeRatesSuccess(rates: RateType, base: string): FetchLatestRatesSuccessActionType {
    return {
        type: FETCH_LATEST_RATES_SUCCESS,
        rates,
        base
    }
}
