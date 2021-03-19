import React, { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebaseContext";
import { Loading, Header } from "../COMPONENTS";
import * as ROUTES from "../CONSTANTS/routes";

export default function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebaseConst } = useContext(FirebaseContext);

  const usr = firebaseConst.auth().currentUser || {};
  const [show, setshow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    // return () => timer();
  }, [profile.displayName]);

  // signout function
  function signout() {
    firebaseConst
      .auth()
      .signOut()
      .then(() => {
        console.log("signedOut");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // return profile.displayName ? (

  //   <>
  //     {loading ? <Loading src={usr.photoURL} /> : <Loading.ReleaseBody />}
  return (
    <>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group noHover>
            <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix logo" />
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>

          <Header.Group>
            <Header.Profile>
              <Header.Picture src={usr.photoURL} onClick={() => console.log("something")} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture2 src={usr.photoURL} />
                  <Header.TextLink>{usr.displayName}</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.Picture2 src={1} />
                  <Header.TextLink>Demo2</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.Picture2 src={2} />
                  <Header.TextLink>Demo3</Header.TextLink>
                </Header.Group>

                <Header.Group>
                  <Header.TextLink onClick={signout}>Sign out</Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the
            streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a
            clown, and the guise he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  );

  // ) : (
  //   <ProfileContainer user={usr} setProfile={setProfile} />
  // );
}
// { <Loading.ReleaseBody />}
