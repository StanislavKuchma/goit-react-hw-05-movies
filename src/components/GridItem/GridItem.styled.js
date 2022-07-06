import styled from '@emotion/styled';

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};

  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};

  overflow: hidden;
  cursor: zoom-in;

  &:hover,
  &:focus {
    transform: scale(1.05);
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
  }
`;
