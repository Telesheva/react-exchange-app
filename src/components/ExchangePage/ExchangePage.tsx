import React from "react";
import "./ExchangePage.scss";
import { Layout } from "../index";
import { Button } from "../common/index";

const ExchangePage = () => {
  return (
    <div className="exchange-page">
      <Layout>
        <p>Exchange Page Component!</p>
        <Button colorScheme="transparent">Test</Button>
      </Layout>
    </div>
  );
};

export default ExchangePage;
