import "./App.css";
import AppContext from "./appContext";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./views/HomePage";
import UpdatePage from "./views/UpdatePage";

function App() {
  const [coinTypes, setCoinTypes] = useState([
    { type: "SHEKEL", value: 1 },
    { type: "USD", value: 3.7 },
    { type: "EURO", value: 4 },
    { type: "POUND", value: 4.7 },
  ]);

  const [exchanges, setExchanges] = useState([]);

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const [money, setMoney] = useState("");

  const [counter, setCounter] = useState(1);

  const navigate = useNavigate();

  const onStart = () => {
    const sum = (money * from) / to;
    alert(sum);
    setCounter((prevCounter) => (prevCounter += 1));

    setExchanges((prevExchanges) => [
      ...prevExchanges,
      { from, money, to, sum, counter },
    ]);
  };

  const onUpdate = () => {
    navigate("/update");
  };

  const getCoinType = (value) => {
    const coin = coinTypes.find((coin) => String(coin.value) === String(value));
    return coin ? coin.type : "";
  };

  const onDelete = (index) => {
    setExchanges((prevExchanges) =>
      prevExchanges.filter((exchange, i) => i !== index)
    );
  };

  const contextValue = {
    onDelete,
    getCoinType,
    exchanges,
    onUpdate,
    onStart,
    coinTypes,
    setCoinTypes,
    from,
    setFrom,
    to,
    setTo,
    money,
    setMoney,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/update" element={<UpdatePage />} />
          {/* <Route path="/example" element={<Example />} />
          <Route path="/example/:insideExample" element={<InsideExample />} /> */}
        </Routes>
      </>
    </AppContext.Provider>
  );
}

export default App;
