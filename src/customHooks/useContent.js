import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebaseContext";

export default function useContent(target) {
  const [contant, setContant] = useState([]);
  const { firebaseConst } = useContext(FirebaseContext);

  useEffect(() => {
    firebaseConst
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        setContant(allContent);
      })
      .catch((err) => console.log(err));
    // return () => {cleanup }
    // eslint-disable-nextline
  }, []);

  return { [target]: contant };
}
