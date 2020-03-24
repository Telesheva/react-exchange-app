import React from "react";
import "./ExchangeRateItem.scss";

export interface ExchangeRateItemProps {
    rateItem: string
    key: number
}

const ExchangeRateItem = ({rateItem}: ExchangeRateItemProps) => {
    return (
        <li className="rate-item">
            <strong>{rateItem}</strong>
        </li>
    )
};

export default ExchangeRateItem;
