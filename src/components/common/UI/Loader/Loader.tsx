import React from "react";
import './Loader.scss';

const Loader = () => {
    return (
        <div className="spinner">
            <div className="spinner__animate">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
            <div className="spinner__text">Loading...</div>
        </div>
    )
};

export default Loader;
