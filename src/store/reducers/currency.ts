import {FETCH_CURRENCY_BY_ABBREVIATION_SUCCESS, FETCH_LATEST_RATES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    currency: '',
    base: '',
    rates: {}
};

type InitialState = typeof initialState;

export default function currencyReducer(state = initialState, action: any): InitialState {
    switch (action.type) {
        case FETCH_CURRENCY_BY_ABBREVIATION_SUCCESS:
            return {
                ...state, currency: action.currency
            };
        case FETCH_LATEST_RATES_SUCCESS:
            return {
                ...state, rates: action.rates, base: action.base
            };
        default:
            return state;
    }
}
