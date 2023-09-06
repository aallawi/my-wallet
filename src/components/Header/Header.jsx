import React from "react";
import { useFirestore } from "../../firebase/useFirestore";

function Header() {
  const { allAmount } = useFirestore();
  return (
    <div className="header">
      <h4 className="my-wallet">My Wallet</h4>
      <h4 className="remaining">
        The remaining amount is in my wallet :{" "}
        <span className={allAmount >= 0 ? "positive" : "negative"}>
          {allAmount} $
        </span>
      </h4>
    </div>
  );
}

export default Header;
