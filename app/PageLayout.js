'use client'

import styled from 'styled-components';
import HeaderDesktop from './components/HeaderDesktop';
import TicketLink from './components/TicketLink';
import useMediaQuery from './helpers/useMediaQuery';

const PageLayoutStyled = styled.div`
display: flex;
flex-direction: column;
padding: 16px;
align-items: center;
`;

const PageLayout = () => {
const isSmallScreen = useMediaQuery('(max-width: 768px)');
console.log(isSmallScreen);
    return (
<PageLayoutStyled>
    <HeaderDesktop />
    <TicketLink />
</PageLayoutStyled>
    )
}

export default PageLayout;