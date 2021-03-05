import React from "react";
import Image from "next/image";
import { MainContainer } from "./styles";

const Home = () => {
  return (
    <>
      <MainContainer>
        <div className="inner-container">
          <Image
            src={"/picture.png"}
            alt="me"
            width="128"
            height="128"
            className="profile-picture"
          />
          <h1>Caio Augusto</h1>
          <div className="social-media-container">
            <a className="social-media-link" href="https://www.instagram.com/ocaioaugusto">
              <Image target="_blank" src="/insta.png" alt="me" width="32" height="32" />
            </a>
            <a className="social-media-link" href="https://github.com/ocaioaugusto">
              <Image target="_blank" src="/github.png" alt="me" width="32" height="32" />
            </a>
            <a className="social-media-link" href="https://www.linkedin.com/in/g-augusto/">
              <Image target="_blank" src="/linkedin.png" alt="me" width="32" height="32" />
            </a>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
