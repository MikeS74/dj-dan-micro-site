'use client'

import styled from 'styled-components';
import { colors } from '../styles/colors';

const TicketLinkStyled = styled.a`
  padding-top: 4px;
  font-size: 14px;
  color: ${colors.lightGrapefruit};
  font-weight: 600;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
`;

const Row = styled.div`
display: flex;
align-items: flex-start;
`;

const ArrowIcon = styled.div`
font-size: 12px;
margin-left: 4px;
margin-top: 2px;
`;

const TicketLink = ({ $url }) => {
  return (
<TicketLinkStyled
 href={$url}
 target="_blank"
 rel="noopener noreferrer"
>
  <Row>Get Tickets<ArrowIcon>&#8599;</ArrowIcon></Row>
</TicketLinkStyled>
  )
}

export default TicketLink;