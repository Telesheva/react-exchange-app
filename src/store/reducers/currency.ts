import {
    CONVERT_CURRENCY_ERROR,
    CONVERT_CURRENCY_SUCCESS,
    FETCH_LATEST_RATES_ERROR,
    FETCH_LATEST_RATES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    base: '',
    rates: {},
    convertedCurrency: null,
    error: ''
};

type InitialState = typeof initialState;

export default function currencyReducer(state = initialState, action: any): InitialState {
    switch (action.type) {
        case FETCH_LATEST_RATES_SUCCESS:
            return {
                ...state, rates: action.rates, base: action.base
            };
        case FETCH_LATEST_RATES_ERROR:
            return {
                ...state, error: action.error
            };
        case CONVERT_CURRENCY_SUCCESS:
            return {
                ...state, convertedCurrency: action.convertedAmount
            };
        case CONVERT_CURRENCY_ERROR:
            return {
                ...state, error: action.error
            };
        default:
            return state;
    }
}
