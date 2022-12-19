import styled from "styled-components";

export const StyledHeader = styled.header`
  text-align: center;
`;

export const NavBar = styled.nav`
  display: inline-block;
  text-align: left;
`;

export const NavButton = styled.button`
  margin: 20px;
  display: inline-block;
  color: #c4a323;
  font-weight: normal;
  font-size: 1.5rem;
  background-color: #111823;
  border: none;
  font-family: "PixelarRegularW01-Regular";
`;

function Header() {
  return (
    <StyledHeader>
      <NavBar>
        <NavButton>HOME</NavButton>
        <NavButton>STORE</NavButton>
        <NavButton>MARKETPLACE</NavButton>
        <NavButton>DEXICON</NavButton>
      </NavBar>
    </StyledHeader>
  );
}

export default Header;
