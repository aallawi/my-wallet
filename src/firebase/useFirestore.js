import { useState, useEffect } from "react";

import { db } from "./firebase";

export const useFirestore = () => {
  const [items, setItems] = useState([]);
  const [allAmount, setAllAmount] = useState(0);

  useEffect(() => {
    const unsubscribe = db
      .collection("items")
      .orderBy("date")
      .onSnapshot((snap) => {
        let allitemsFirebase = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });

        let allAmountFirebase = snap.docs.map((doc) => {
          return doc.data().actualAmount;
        });

        setItems(allitemsFirebase);
        setAllAmount(
          allAmountFirebase.length > 0 &&
            allAmountFirebase.reduce((acc, curr) => acc + curr),
          0
        );
      });
    return unsubscribe;
  }, []);

  const addItem = async (item, actualAmount, select) => {
    db.collection("items").add({ ...item, actualAmount, select });
  };

  const deletItem = async (id) => {
    db.collection("items").doc(id).delete();
  };

  return { items, allAmount, addItem, deletItem };
};
