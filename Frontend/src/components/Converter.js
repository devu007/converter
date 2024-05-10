import React, { useState, useEffect } from "react";
import { Button, Card, Form, Input, Select } from "antd";
import { RiCoinsLine } from "react-icons/ri";

/**
 * Converter component for converting cryptocurrency values.
 */
function Converter() {
  // API URL for fetching cryptocurrency exchange rates
  const apiUrl = "http://localhost:3000/cryptocurrencies";

  // Default cryptocurrency options
  const defaultFirstValue = "Bitcoin";
  const defaultSecondValue = "Ether";

  // State variables
  const [cryptoList, setCryptoList] = useState([]); // List of available cryptocurrencies
  const [inputValue, setInputValue] = useState("0"); // Input value for conversion
  const [firstSelect, setFirstSelect] = useState(defaultFirstValue); // Selected first cryptocurrency
  const [secondSelect, setSecondSelect] = useState(defaultSecondValue); // Selected second cryptocurrency
  const [result, setResult] = useState("0"); // Conversion result

  /**
   * Fetch cryptocurrency exchange rates from the API.
   */
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();

      // Extract rates from API response and format data
      const data = jsonData.rates;
      const tempArray = Object.entries(data).map(([key, value]) => ({
        value: value.name,
        label: value.name,
        rate: value.value,
      }));
      setCryptoList(tempArray);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  /**
   * Perform conversion when input or selected currencies change.
   */
  useEffect(() => {
    if (cryptoList.length === 0) return;

    // Get exchange rates for selected cryptocurrencies
    const firstSelectRate = cryptoList.find(
      (item) => item.value === firstSelect
    ).rate;
    const secondSelectRate = cryptoList.find(
      (item) => item.value === secondSelect
    ).rate;

    // Calculate conversion result
    const resultValue = (inputValue * secondSelectRate) / firstSelectRate;
    setResult(resultValue.toFixed(6)); // Round result to 6 decimal places
  }, [inputValue, firstSelect, secondSelect]);

  return (
    <div className="container" data-testid="converter-1">
      <Card
        className="crypto-card"
        title={
          <h1>
            {" "}
            <RiCoinsLine /> Crypto Converter
          </h1>
        }
      >
        {/* Input field for entering value to convert */}
        <Form size="large">
          <Form.Item>
            <Input onChange={(event) => setInputValue(event.target.value)} />
          </Form.Item>
        </Form>
        {/* Select boxes for choosing cryptocurrencies */}
        <div className="select-box">
          <Select
            style={{ width: "200px" }}
            defaultValue={defaultFirstValue}
            options={cryptoList}
            onChange={(value) => setFirstSelect(value)}
          />
          <Select
            style={{ width: "200px" }}
            defaultValue={defaultSecondValue}
            options={cryptoList}
            onChange={(value) => setSecondSelect(value)}
          />
        </div>
        {/* Display conversion result */}
        <p>
          {inputValue} {firstSelect} = {result} {secondSelect}{" "}
        </p>
      </Card>
    </div>
  );
}

export default Converter;
