import React from "react";
import "./ExchangeRateItem.scss";

export interface ExchangeRateItemProps {
    rateItem: [string, number]
    key: number
}

const ExchangeRateItem = ({rateItem}: ExchangeRateItemProps) => {
    return (
        <li className="rate-item">
            <strong>{rateItem[0]}:</strong>
            <p>{rateItem[1]}</p>
        </li>
    )
};

export default ExchangeRateItem;
