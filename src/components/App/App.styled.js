import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${props => props.theme.spacing.step * 5}px;
  padding-bottom: ${props => props.theme.spacing.step * 5}px;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    padding-top: ${props => props.theme.spacing.step * 10}px;
    padding-bottom: ${props => props.theme.spacing.step * 10}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding-top: ${props => props.theme.spacing.step * 20}px;
    padding-bottom: ${props => props.theme.spacing.step * 20}px;
  }
`;

export const Container = styled.div`
  padding-left: ${props => props.theme.spacing.step * 5}px;
  padding-right: ${props => props.theme.spacing.step * 5}px;

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    width: ${props => props.theme.breakpoints.s};
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    width: ${props => props.theme.breakpoints.m};
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    width: ${props => props.theme.breakpoints.l};
  }
`;
