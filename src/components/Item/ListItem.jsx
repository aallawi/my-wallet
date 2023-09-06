import React from "react";
import { useFirestore } from "../../firebase/useFirestore";
import separatio from "../../separation.png";
import Item from "./Item";

const ListItem = () => {
  const { items } = useFirestore();
  return (
    <>
      <div className="all__items">
        <div className="heart">
          <img src={separatio} alt="separatio" />
        </div>
        {items.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Del</th>
              </tr>
            </thead>
            {items.map((item) => {
              return <Item key={item.id} item={item} />;
            })}
          </table>
        )}
      </div>
    </>
  );
};
export default ListItem;
