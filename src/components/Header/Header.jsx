import { useTheme } from '@emotion/react';
import { Container } from 'components/App/App.styled';
import { Outlet } from 'react-router-dom';

import {
  HeaderWrapper,
  LinkWrapper,
  NavBar,
  NavLinkStyled,
} from './Header.styled';

export const Header = () => {
  const theme = useTheme();

  return (
    <>
      <NavBar>
        <Container>
          <HeaderWrapper>
            <LinkWrapper>
              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/movies">Movies</NavLinkStyled>
            </LinkWrapper>
          </HeaderWrapper>
        </Container>
      </NavBar>
      <Outlet />
    </>
  );
};
