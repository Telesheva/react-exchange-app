import {FETCH_CURRENCIES_SUCCESS, FETCH_LATEST_RATES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    currencies: null,
    rates: {}
};

type InitialState = typeof initialState;

export default function currencyReducer(state = initialState, action: any): InitialState {
    switch (action.type) {
        case FETCH_CURRENCIES_SUCCESS:
            return {
                ...state, currencies: action.currencies
            };
        case FETCH_LATEST_RATES_SUCCESS:
            return {
                ...state, currencies: action.rates.data.rates
            };
        default:
            return state;
    }
}
