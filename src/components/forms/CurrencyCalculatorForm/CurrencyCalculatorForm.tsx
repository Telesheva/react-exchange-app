import React from "react";
import "./CurrencyCalculatorForm.scss";
import {Button, Input, Select} from "../../common";

const CurrencyCalculatorForm = () => {
    return (
        <form className="calculator-form">
            <div className="calculator-form__radios">
                <strong className="calculator-form__text">I want</strong>
                <Input type="radio" value="buy" label="To buy" className="input-wrapper__input_radio" id="buyRadio"
                       name="group"/>
                <Input type="radio" value="sell" label="To sell" className="input-wrapper__input_radio" id="sellRadio"
                       name="group"/>
            </div>
            <div className="calculator-form__result">
                <div className="calculator-form__result_inputs">
                    <Input type="number"/>
                    <Select
                        name="rate"
                        options={[{value: "UAH (Ukrainian Hryvnia"}, {value: "USD (United States Dollar)"}]}/>
                </div>
                <Button type="submit" colorScheme="dark">Calculate</Button>
                <strong className="calculator-form__text">Result:</strong>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
                <p>EUR 1000</p>
            </div>
        </form>
    )
};

export default CurrencyCalculatorForm;
