import React, { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebaseContext";
import { Loading } from "../COMPONENTS";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebaseConst } = useContext(FirebaseContext);

  const usr = firebaseConst.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={usr.photoURL} />
    ) : (
      <Loading.ReleaseBody />
    )
  ) : (
    <ProfileContainer user={usr} setProfile={setProfile} />
  );
}
