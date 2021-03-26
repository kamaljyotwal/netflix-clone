import React, { useContext, useState, useEffect } from "react";
import ProfileContainer from "./ProfileContainer";
import { FirebaseContext } from "../context/firebaseContext";
import { Loading, Header, Card, Player } from "../COMPONENTS";
import * as ROUTES from "../CONSTANTS/routes";
import Fuse from "fuse.js";

export default function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("films");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const { firebaseConst } = useContext(FirebaseContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);

  const usr = firebaseConst.auth().currentUser || {};

  // console.log(slideRows[0])
  useEffect(() => {
    function timer() {
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    }
    return () => timer();
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      threshold: 0.2,
      keys: ["data.description", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map((i) => i.item);
    console.log(results);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

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

      <Header src="narc3" notfull={true}>
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
          <Header.Seriesimg src="seriestitle" />
          {/* <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut> */}
          <Header.Text>
            The true story of Colombia's infamously violent and powerful drug cartels fuels this
            gritty gangster drama series. As drug lord Pablo Escobar rises, Colombian and U.S. law
            enforcement find themselves battling an enemy who will do anything to keep his empire.
            <br />
          </Header.Text>

          <Header.MetaInfo>2015 | 18+ | 3 Seasons | TV Dramas</Header.MetaInfo>
          <Header.Textinfo>
            <Header.Lightinfo>Starring:</Header.Lightinfo> Wagner Moura, Pedro Pascal, Boyd Holbrook
          </Header.Textinfo>
          <Header.Textinfo>
            <Header.Lightinfo>Creators:</Header.Lightinfo> Chris Brancato, Carlo Bernard, Doug Miro
          </Header.Textinfo>

          <Player>
            <Player.Video src="/videos/narcos.mp4" />
            <Player.Button noMarginLeft>Play</Player.Button>
          </Player>
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
                <Player.Video src="/videos/intro.mp4" />
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
