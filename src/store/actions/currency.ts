import axios from 'axios';
import {
    FETCH_CURRENCIES_ERROR,
    FETCH_CURRENCIES_SUCCESS,
    FETCH_LATEST_RATES_ERROR,
    FETCH_LATEST_RATES_SUCCESS
} from "./actionTypes";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


type ActionsType =
    FetchTasksSuccessActionType
    | FetchTasksErrorActionType
    | FetchLatestRatesSuccessActionType
    | FetchLatestRatesErrorActionType;

type FetchTasksSuccessActionType = {
    type: typeof FETCH_CURRENCIES_SUCCESS,
    currencies: string
}

type FetchTasksErrorActionType = {
    type: typeof FETCH_CURRENCIES_ERROR,
    error: string
}

type FetchLatestRatesSuccessActionType = {
    type: typeof FETCH_LATEST_RATES_SUCCESS,
    rates: RatesType
}

type FetchLatestRatesErrorActionType = {
    type: typeof FETCH_LATEST_RATES_ERROR,
    error: string
}

export type CurrencyType = {
    [k: string]: string
}

export type RatesType = {
    data: {
        rates: {
            [k: string]: number
        }
    }
}

export function fetchCurrencies(): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        const {data}: CurrencyType = await axios.get('https://openexchangerates.org/api/currencies.json');
        dispatch(fetchCurrenciesSuccess(data));
    }
}

export function fetchExchangeRates(): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        const rates: RatesType = await axios.get('https://openexchangerates.org/api/latest.json?app_id=0eef8c31ba8042ac9895161e228730b5');
        dispatch(fetchExchangeRatesSuccess(rates));
    }
}

export function fetchCurrenciesSuccess(currencies: string): FetchTasksSuccessActionType {
    return {
        type: FETCH_CURRENCIES_SUCCESS,
        currencies
    }
}

export function fetchExchangeRatesSuccess(rates: RatesType): FetchLatestRatesSuccessActionType {
    return {
        type: FETCH_LATEST_RATES_SUCCESS,
        rates
    }
}
