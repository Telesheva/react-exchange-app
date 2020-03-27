import {
    CONVERT_CURRENCY_ERROR,
    CONVERT_CURRENCY_SUCCESS,
    FETCH_LATEST_RATES_ERROR,
    FETCH_LATEST_RATES_SUCCESS
} from "../store/actions/actionTypes";

//INTERFACES
export interface IExchangeRateItemProps {
    rateItem: [string, number]
    key: number
}

export interface IRates {
    rates: {[k: string]: number};
    base: string
}

//TYPES
export type ActionsType = FetchLatestRatesSuccessActionType
    | FetchLatestRatesErrorActionType
    | ConvertCurrencySuccessActionType
    | ConvertCurrencyErrorActionType;

export type FetchLatestRatesSuccessActionType = {
    type: typeof FETCH_LATEST_RATES_SUCCESS,
    rates: RateType,
    base: string
}

export type FetchLatestRatesErrorActionType = {
    type: typeof FETCH_LATEST_RATES_ERROR,
    error: string
}

export type ConvertCurrencySuccessActionType = {
    type: typeof CONVERT_CURRENCY_SUCCESS,
    convertedAmount: number
}

export type ConvertCurrencyErrorActionType = {
    type: typeof CONVERT_CURRENCY_ERROR,
    error: string
}

export type RatesType = {
    [k: string]: {
        rates: { [k: string]: number }
        base: string
    }
}

export type RateType = { [k: string]: number }
