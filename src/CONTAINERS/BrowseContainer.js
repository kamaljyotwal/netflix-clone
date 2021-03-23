import React, { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebaseContext";
import { Loading, Header, Card, Player, Footer } from "../COMPONENTS";
import * as ROUTES from "../CONSTANTS/routes";
import FooterContainer from "./FooterContainer";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("films");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebaseConst } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const usr = firebaseConst.auth().currentUser || {};

  useEffect(() => {
    function timer() {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
    return () => timer();
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

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

  return profile.displayName ? (
    <>
      {loading ? <Loading src={usr.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" notfull={true}>
        <Header.Frame>
          <Header.Group noHover>
            <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix logo" />
            <Header.TextLink
              active={category === "series" ? true : false}
              onClick={() => setCategory("series")}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.TextLink>
          </Header.Group>

          <Header.Group noHover>
            <Header.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
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
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>

      <Card.Group>
        {slideRows.map((i) => (
          <Card key={`${category}-${i.title.toLowerCase()}`}>
            <Card.Title>{i.title}</Card.Title>
            <Card.Entities>
              {i.data.map((j) => (
                <Card.Item key={j.docId} item={j}>
                  <Card.Image src={`/images/${category}/${j.genre}/${j.slug}/small.jpg`} />

                  <Card.Meta>
                    <Card.SubTitle>{j.title}</Card.SubTitle>
                    <Card.Text>{j.description}</Card.Text>
                  </Card.Meta>
                </Card.Item>
              ))}
            </Card.Entities>

            <Card.Feature category={category}>
              <Player>
                <Player.Video src="/videos/bunny.mp4" />
                <Player.Button>Play</Player.Button>
              </Player>
            </Card.Feature>
          </Card>
        ))}
      </Card.Group>
    </>
  ) : (
    <ProfileContainer user={usr} setProfile={setProfile} />
  );
}
