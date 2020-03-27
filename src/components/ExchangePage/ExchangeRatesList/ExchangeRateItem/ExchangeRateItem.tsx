import React from "react";
import "./ExchangeRateItem.scss";
import {IExchangeRateItemProps} from "../../../../models/models";

const ExchangeRateItem = ({rateItem}: IExchangeRateItemProps) => {
    return (
        <li className="rate-item">
            <strong>{rateItem[0]}:</strong>
            <p>{rateItem[1]}</p>
        </li>
    )
};

export default ExchangeRateItem;
