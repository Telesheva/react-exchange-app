import React from "react";
import "./ExchangePage.scss";
import {CurrencyCalculatorForm, ExchangeRatesList, Layout} from "../index";

const ExchangePage = () => {
    return (
        <Layout>
            <div className="exchange-page">
                <ExchangeRatesList/>
                <CurrencyCalculatorForm/>
            </div>
        </Layout>
    );
};

export default ExchangePage;
