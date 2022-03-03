import { useState } from "react";
import styled from "styled-components";
import appleJpg from "./assets/apple137.png";
import googleJpg from "./assets/google137.png";
import fbJpg from "./assets/fb.png";

const StyledTopWrapper = styled.div`
  margin: 10px;
  display: grid;
  justify-content: center;
  background: #ffffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;

const StyledHeader = styled.h1`
  display: block;
  text-align: center;
  margin: 30px 0;
`;

const StyledInput = styled.input`
  display: block;
  height: 40px;
  width: 250px;
  margin: 5px;
  padding: 5px;
  background-color: #fafafa;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
  border-radius: 3px;

  &:focus {
    outline: none;
    border: 1px solid rgba(var(--b6a, 200, 200, 200), 1);
  }
`;

const StyledButton = styled.button`
  display: block;
  height: 30px;
  width: 250px;
  margin: 10px 5px 5px 5px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 0.9rem;
`;

const StyledSpace = styled.div`
  margin: 10px 5px 5px 5px;
  text-align: center;
  font-size: 0.8rem;
  height: 0.6em;
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: 0.5em;
  color: #aaaaaa;

  :first-line {
    background-color: white;
  }
`;

const StyledLink = styled.a`
  color: blue;
  margin: 15px;
  text-align: center;
  }
`;
const StyledFB = styled.img`
  margin-right: 10px;
  margin-top: 5px;
`;

const StyledBotWrapper = styled.div`
  display: grid;
  align-content: center;
  margin: 0 10px;
  justify-content: center;
  padding: 25px;
  background: #ffffff;
  border: 1px solid rgba(var(--b6a, 219, 219, 219), 1);
`;
const StyledLink2 = styled.a`
  margin-left: 5px;
`;

const StyledDownloadWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "download download"
    "appstore googleplay";
  margin: 5px;
  padding: 10px;
  justify-content: center;
  align-content: center;
`;

const StyledImageButton = styled.div`
  background-repeat: no-repeat;
  width: 140px;
  height: 40px;
  object-fit: scale-down;
`;

function RightPanel() {
  const [loginLongEnough, setLoginLongEnough] = useState(false);
  const [passwordLongEnough, setPasswordLongEnough] = useState(false);

  let lengthChecker = (length, type) => {
    if (type === "login") {
      if (length >= 1) {
        setLoginLongEnough(true);
      } else setLoginLongEnough(false);
    }
    if (type === "password") {
      if (length >= 5) {
        setPasswordLongEnough(true);
      } else setPasswordLongEnough(false);
    }
  };

  let loginFoo = () => {
    if (loginLongEnough && passwordLongEnough) {
      alert("Request do serwera");
    } else {
      alert("Login bądź hasło zbyt krótkie");
    }
  };

  return (
    <>
      <StyledTopWrapper>
        <StyledHeader>Instagram</StyledHeader>
        <StyledInput
          placeholder="Numer uzytkownika"
          onChange={(action) =>
            lengthChecker(action.target.value.length, "login")
          }
        />
        <StyledInput
          placeholder="Hasło"
          type="password"
          onChange={(action) =>
            lengthChecker(action.target.value.length, "password")
          }
        />
        <StyledButton
          type="send"
          onClick={() => loginFoo()}
          style={{
            background: `${
              loginLongEnough && passwordLongEnough ? "#0095f6" : "#b2dffc"
            }`,
          }}
          loginLongEnough={loginLongEnough}
          passwordLongEnough={passwordLongEnough}
        >
          Zaloguj się
        </StyledButton>
        <StyledSpace>LUB</StyledSpace>
        <StyledLink
          href="https://facebook.com"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledFB src={`${fbJpg}`} />
          Zaloguj się przez facebooka
        </StyledLink>
        <StyledLink href="https://google.com" style={{ fontSize: "0.7rem" }}>
          Nie pamiętasz hasła?
        </StyledLink>
      </StyledTopWrapper>
      <StyledBotWrapper>
        <div>
          Nie masz konta?
          <StyledLink2 href="https://google.com">Zarejestruj się</StyledLink2>
        </div>
      </StyledBotWrapper>
      <StyledDownloadWrapper>
        <p
          style={{
            gridArea: "download",
            textAlign: "center",
          }}
        >
          Pobierz aplikację.
        </p>
        <a href="https://itunes.apple.com">
          <StyledImageButton
            style={{
              backgroundImage: `url(${appleJpg})`,
              gridArea: "appstore",
            }}
          />
        </a>
        <a href="https://play.google.com">
          <StyledImageButton
            style={{
              backgroundImage: `url(${googleJpg})`,
              gridArea: "googleplay",
            }}
          />
        </a>
      </StyledDownloadWrapper>
    </>
  );
}

export default RightPanel;
