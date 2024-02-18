import React, { useContext, useEffect, useState } from "react";
import AppContext from "../appContext";
import FacebookButton from "../components/FacebookButton";
import ExchangeList from "../components/ExchangeList";

const HomePage = () => {
  const {
    coinTypes,
    from,
    to,
    money,
    setFrom,
    setTo,
    setMoney,
    onStart,
    onUpdate,
  } = useContext(AppContext);

  const [isMoney, setIsMoney] = useState(true);
  const [isExchnageList, setIsExchangeList] = useState(false);

  useEffect(() => {
    if (money !== "") {
      setIsMoney(false);
    } else {
      setIsMoney(true);
    }
  }, [money]);

  return (
    <div>
      Exchange
      <br />
      From:
      <select
        value={from}
        onChange={(e) => {
          setFrom(e.target.value);
        }}
      >
        <option value="">Select a coin type</option>
        {coinTypes.map((coinType) => (
          <option key={coinType.type} value={coinType.value}>
            {coinType.type}
          </option>
        ))}
      </select>
      <input
        placeholder="amount"
        type="number"
        onInput={(e) => {
          setMoney(e.target.value);
        }}
      />
      To:
      <select
        value={to}
        onChange={(e) => {
          setTo(e.target.value);
        }}
      >
        <option value="">Select a coin type</option>
        {coinTypes.map((coinType) => (
          <option
            key={coinType.type}
            defaultValue={coinType.value}
            value={coinType.value}
          >
            {coinType.type}
          </option>
        ))}
      </select>
      <button
        disabled={isMoney}
        onClick={() => {
          onStart();
        }}
      >
        Start
      </button>
      <FacebookButton />
      <button
        onClick={() => {
          onUpdate();
        }}
      >
        Update
      </button>
      <button
        onClick={() => {
          setIsExchangeList((prevState) => !prevState);
        }}
      >
        View your exchange list
      </button>
      {isExchnageList ? <ExchangeList /> : <></>}
    </div>
  );
};

export default HomePage;
