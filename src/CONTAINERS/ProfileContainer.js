import React from "react";
import { Header, Profiles } from "../COMPONENTS/index";
import * as ROUTES from "../CONSTANTS/routes";

export default function ProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="images/misc/logo.svg" alt="Netflix logo" />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onMouseEnter={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
//  onMouseEnter={() =>
// setProfile({
//   displayName: user.displayName,
//   photoURL: user.photoURL,
// })
// }
