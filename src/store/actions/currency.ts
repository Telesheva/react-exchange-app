import axios from 'axios';
import {
    CONVERT_CURRENCY_ERROR,
    CONVERT_CURRENCY_SUCCESS,
    FETCH_LATEST_RATES_ERROR,
    FETCH_LATEST_RATES_SUCCESS
} from "./actionTypes";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {
    ActionsType,
    ConvertCurrencyErrorActionType,
    ConvertCurrencySuccessActionType,
    FetchLatestRatesErrorActionType,
    FetchLatestRatesSuccessActionType,
    RatesType,
    RateType
} from "../../models/models";

export function fetchExchangeRates(): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        try {
            const {data}: RatesType = await axios.get('https://openexchangerates.org/api/latest.json?app_id=0eef8c31ba8042ac9895161e228730b5');
            dispatch(fetchExchangeRatesSuccess(data.rates, data.base));
        } catch (e) {
            dispatch(fetchLatestRatesError(e))
        }
    }
}

export function fetchExchangeRatesSuccess(rates: RateType, base: string): FetchLatestRatesSuccessActionType {
    return {
        type: FETCH_LATEST_RATES_SUCCESS,
        rates,
        base
    }
}

export function fetchLatestRatesError(error: string): FetchLatestRatesErrorActionType {
    return {
        type: FETCH_LATEST_RATES_ERROR,
        error
    }
}

export function convertCurrency(amount: number, from: string, to: string): ThunkAction<Promise<void>, {}, {}, ActionsType> {
    return async (dispatch: ThunkDispatch<{}, {}, ActionsType>) => {
        try {
            //const {data}: RatesType = await axios.get(`https://openexchangerates.org/api/convert/${amount}/${from}/${to}?app_id=0096e9010d37405ebb1b560dd90043b5`);
            //dispatch(convertCurrencySuccess());
        } catch (e) {
            dispatch(convertCurrencyError(e))
        }
    }
}

export function convertCurrencySuccess(convertedAmount: number): ConvertCurrencySuccessActionType {
    return {
        type: CONVERT_CURRENCY_SUCCESS,
        convertedAmount
    }
}

export function convertCurrencyError(error: string): ConvertCurrencyErrorActionType {
    return {
        type: CONVERT_CURRENCY_ERROR,
        error
    }
}
