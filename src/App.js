import React from "react";
import styled from "styled-components";
import itunes from "./images/itunes.svg";
import instagram from "./images/instagram.png";
import spotify from "./images/spotify.png";
import youtube from "./images/youtube.png";
import applemusic from "./images/applemusic.svg";
import tidal from "./images/tidal.png";
import soundcloud from "./images/soundcloud.png";
import amazon from "./images/amazon.png";
import google from "./images/google.png";
import laurent from "./images/laurent.png";
import tiktok from "./images/tiktok.svg";
import twitter from "./images/twitter.png";
import vital from "./images/vital.png";

import { Links } from "./Link";
import "./App.css";

export const App = () => {
  const links = [
    {
      image: spotify,
      link: "https://bit.ly/LAURENT-SPOTIFY",
      text: "play",
      alt: "spotify"
    },
    {
      image: applemusic,
      link: "https://bit.ly/LAURENT-APPLE-MUSIC",
      text: "play",
      alt: "applemusic"
    },
    {
      image: tidal,
      link: "https://bit.ly/LAURENT-TIDAL",
      text: "play",
      alt: "tidal"
    },
    {
      image: youtube,
      link: "https://bit.ly/LAURENT-YOUTUBE-CHANNEL",
      text: "play",
      alt: "youtube"
    },
    {
      image: soundcloud,
      link: "https://bit.ly/LAURENT-SOUNDCLOUD",
      text: "play",
      alt: "soundcloud"
    },
    {
      image: itunes,
      link: "https://music.apple.com/us/artist/laurent/1262929574",
      text: "buy",
      alt: "itunes"
    },
    {
      image: google,
      link:
        "https://play.google.com/store/music/album/Laurent_Sierra_Canyon_Flow?id=Bzrbeqy6z3f64jcijrgevlsnupq",
      text: "buy",
      alt: "google"
    },
    {
      image: amazon,
      link:
        "https://music.amazon.com/albums/B086XKMNRZ?ref=dm_sh_cf84-856c-dmcp-760e-cb94d&musicTerritory=US&marketplaceId=ATVPDKIKX0DER",
      text: "buy",
      alt: "amazon"
    }
  ];
  return (
    <div className="App">
      <App.Container>
        <App.Profile>
          <App.ProfilePic src={laurent} />
          <App.Name>LAURENT</App.Name>
        </App.Profile>
        <Links links={links} />
        <App.SocialContainer>
          <div>
            <a href="https://www.instagram.com/HOMMENOTHOMIE/" target="_blank">
              <App.Social src={instagram} alt="instagram" />
            </a>
            <a href="https://www.tiktok.com/@hommenothomie" target="_blank">
              <App.Social src={tiktok} alt="tiktok" class="tiktok" />
            </a>

            <a href="https://twitter.com/HOMMENOTHOMIE" target="_blank">
              <App.Social src={twitter} alt="twitter" class="twitter" />
            </a>
          </div>
        </App.SocialContainer>
      </App.Container>
      <div class="footer">
        <a href="https://www.instagram.com/vitalnewyork/" target="_blank">
          <App.Vital src={vital} class="vital" />
        </a>
        <App.Copyright class="copyright">
          &copy; 2020 Vital New York Enterprises LLC
        </App.Copyright>
      </div>
    </div>
  );
};

App.Container = styled.div`
  width: 30%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 766px) {
    width: 100%;
  }
`;

App.Profile = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

App.ProfilePic = styled.img`
  width: 50%;
  height: auto;
  max-width: 210px;
`;

App.Name = styled.p`
  font-weight: 600;
  margin-top: 10px;
`;

App.SocialContainer = styled.div`
  margin-top: 50px;
`;

App.Social = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`;

App.Vital = styled.img`
  width: 100px;
  height: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

App.Copyright = styled.p`
  font-size: 1rem;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
`;

export default App;
