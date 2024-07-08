import React, { useState } from 'react';

const OddsConverter = () => {
  const [americanOdds, setAmericanOdds] = useState(100);
  const [oddsFormat, setOddsFormat] = useState('Decimal');
  const [convertedOdds, setConvertedOdds] = useState('2.00');

  const convertAmericanOdds = (americanOdds) => {
    let decimalOdds, fractionalOdds, hongKongOdds, malayOdds, indonesianOdds;

    if (americanOdds > 0) {
      decimalOdds = (americanOdds / 100 + 1).toFixed(2);
      fractionalOdds = `${americanOdds}/100`;
      hongKongOdds = (americanOdds / 100).toFixed(2);
      malayOdds = (americanOdds / 100).toFixed(2);
      indonesianOdds = (americanOdds / 100).toFixed(2);
    } else {
      decimalOdds = (100 / Math.abs(americanOdds) + 1).toFixed(2);
      fractionalOdds = `100/${Math.abs(americanOdds)}`;
      hongKongOdds = (100 / Math.abs(americanOdds)).toFixed(2);
      malayOdds = (-100 / Math.abs(americanOdds)).toFixed(2);
      indonesianOdds = (-100 / Math.abs(americanOdds)).toFixed(2);
    }

    return {
      Decimal: decimalOdds,
      Fractional: fractionalOdds,
      'Money Line': americanOdds,
      'Hong Kong': hongKongOdds,
      Malay: malayOdds,
      Indonesian: indonesianOdds,
    };
  };

  const handleAmericanOddsChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmericanOdds(value);
    setConvertedOdds(convertAmericanOdds(value)[oddsFormat]);
  };

  const handleOddsFormatChange = (e) => {
    const format = e.target.value;
    setOddsFormat(format);
    setConvertedOdds(convertAmericanOdds(americanOdds)[format]);
  };

  return (
    <div>
      <h1>Odds Converter</h1>
      <label htmlFor="americanOdds">Enter American Odds:</label>
      <input
        type="number"
        id="americanOdds"
        value={americanOdds}
        onChange={handleAmericanOddsChange}
      />
      <br />
      <label htmlFor="oddsFormat">Select Odds Format:</label>
      <select
        id="oddsFormat"
        value={oddsFormat}
        onChange={handleOddsFormatChange}
      >
        <option value="Decimal">Decimal</option>
        <option value="Fractional">Fractional</option>
        <option value="Money Line">Money Line</option>
        <option value="Hong Kong">Hong Kong</option>
        <option value="Malay">Malay</option>
        <option value="Indonesian">Indonesian</option>
      </select>
      <h2>
        Converted Odds: <span>{convertedOdds}</span>
      </h2>
    </div>
  );
};

export default OddsConverter;
