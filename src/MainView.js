import styled from "styled-components";
import grafika from "./assets/grafika.png";
import RightPanel from "./RightPanel";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "image rightpanel"
    "footer footer";
  grid-template-rows: 0 1fr;
  grid-template-columns: 450px 380px;
  grid-row-gap: 10px;
  grid-column-gap: 0px;
  height: 100%;
  margin: 0;
  padding: 5px;
  justify-content: center;
  align-content: center;
`;

const StyledImage = styled.div`
  background-image: url(${grafika});
  background-repeat: no-repeat;
  grid-area: image;
`;

const StyledRightPanel = styled.div`
  grid-area: rightpanel;
  margin-top: 30px;
`;

const StyledFooter = styled.div`
  grid-area: footer;
`;

function MainView() {
  return (
    <StyledWrapper>
      <StyledImage />
      <StyledRightPanel>
        <RightPanel />
      </StyledRightPanel>
      <StyledFooter>
        Footer Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
        totam architecto perferendis quas modi sit labore iusto sint eum cum
        minus eligendi quaerat odit pariatur recusandae dignissimos consequatur
        nihil. Nam.
      </StyledFooter>
    </StyledWrapper>
  );
}

export default MainView;
