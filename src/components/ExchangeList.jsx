import React, { useContext } from "react";
import AppContext from "../appContext";

const ExchangeList = () => {
  const { exchanges, getCoinType, onDelete } = useContext(AppContext);

  return (
    <div>
      {exchanges.map((exchange, index) => (
        <div key={index} style={{ border: "3px solid white", margin: "10px" }}>
          <p>{exchange.counter}</p>
          From: {getCoinType(exchange.from)} To: {getCoinType(exchange.to)}
          <br />
          {exchange.money} = {exchange.sum}
          <br />
          <button
            style={{
              borderRadius: "50%",
              borderColor: "white",
              color: "red",
              margin: "15px",
            }}
            onClick={() => {
              onDelete(index);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ExchangeList;
