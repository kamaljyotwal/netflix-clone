import { useState, useContext, useEffect } from "react";
import { FirebaseContext } from "../context/firebaseContext";

export default function AuthListenerHook() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("AU")));
  const { firebaseConst } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebaseConst.auth().onAuthStateChanged((AU) => {
      if (AU) {
        localStorage.setItem("AU", JSON.stringify(AU));
        setUser("AU");
      } else {
        localStorage.removeItem("AU");
        setUser(null);
      }
    });
    return () => listener();
  }, []);
  return { user };
}
