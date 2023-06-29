import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #f08080;
  font-size: 20px;

  &:hover {
    color: #ffffff;
  }
`;
