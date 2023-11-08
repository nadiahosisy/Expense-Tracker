import React from "react";
import { useState } from "react";

const TransactionList = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <li className="minus">
          Cash <span>-$400</span>
          <button className="delete-btn">X</button>
        </li>
      </ul>
    </>
  );
};

export default TransactionList;
