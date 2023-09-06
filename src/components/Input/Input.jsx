import React, { useState } from "react";
import { useFirestore } from "../../firebase/useFirestore";

const Input = () => {
  const { addItem, items } = useFirestore();

  const initialItem = { name: "", date: "" };

  const [item, setItem] = useState(initialItem);
  const [amount, setAmount] = useState("");
  const [selected, setSelected] = useState("");

  const handelChange = ({ target }) => {
    setItem({
      ...item,
      [target.name]: target.value,
    });
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const actualAmount =
      selected === "income"
        ? Math.abs(parseInt(amount))
        : -Math.abs(parseInt(amount));
    await addItem(item, actualAmount, selected);
    setItem(initialItem);
    setAmount("");
    setSelected("");
  };

  console.log(items);

  return (
    <form onSubmit={handelSubmit}>
      <div className="form_input">
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={handelChange}
          placeholder="name"
          required
        />
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleAmount}
          placeholder="amount"
          required
        />
        <input
          type="date"
          name="date"
          value={item.date}
          onChange={handelChange}
          placeholder="date"
          required
        />
      </div>
      {/* ==================================== */}
      <div className="choose">
        <div className="select">
          <label>
            <input
              type="radio"
              name="select"
              value="income"
              checked={selected === "income"}
              onChange={handleSelected}
              required
            />
            <span>Income</span>
          </label>

          <label>
            <input
              type="radio"
              name="select"
              value="expense"
              checked={selected === "expense"}
              onChange={handleSelected}
              required
            />
            <span>Expense</span>
          </label>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default Input;
