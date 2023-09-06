import React from "react";
import { useFirestore } from "../../firebase/useFirestore";

const Item = ({ item }) => {
  const { deletItem } = useFirestore();
  return (
    <tbody className={item.actualAmount > 0 ? "income" : "expense"}>
      <tr>
        <td>{item.name}</td>
        <td>{Math.abs(item.actualAmount)}</td>
        <td>{item.date}</td>
        <td className="del" onClick={() => deletItem(item.id)}>
          Del
        </td>
      </tr>
    </tbody>
  );
};
export default Item;
