import React, { createContext, useContext, useState, useEffect } from "react";
import { PlayerDiv, Overlay, Close, Button } from "./styles/playerStyles";
import ReactDOM from "react-dom";

export const PlayerContext = createContext();

export default function Player({ children, ...restProps }) {
  const [showPlayer, setshowPlayer] = useState(false);

  useEffect(() => {
    showPlayer
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  }, [showPlayer]);

  return (
    <PlayerContext.Provider value={{ showPlayer, setshowPlayer }}>
      <PlayerDiv>{children}</PlayerDiv>
    </PlayerContext.Provider>
  );
}

Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showPlayer, setshowPlayer } = useContext(PlayerContext);

  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay {...restProps}>
        <video id="netflix-player" controls>
          <source src={src} type="video/mp4" />
        </video>
        <Close onClick={() => setshowPlayer((showPlayer) => !showPlayer)}>
          <img src="/images/icons/close.png" alt="Close" />
        </Close>
      </Overlay>,
      document.getElementById("portalDiv")
    )
  );
};

Player.Button = function PlayerButton({ children, ...restProps }) {
  const { showPlayer, setshowPlayer } = useContext(PlayerContext);

  return (
    <Button {...restProps} onClick={() => setshowPlayer((showPlayer) => !showPlayer)}>
      {children}
    </Button>
  );
};
