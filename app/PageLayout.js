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
const showMobileLayout = useMediaQuery('(max-width: 620px)');
    return (
<PageLayoutStyled>
    {showMobileLayout ? null :  <HeaderDesktop />}
    <TicketLink>
        Get Tickets
    </TicketLink>
</PageLayoutStyled>
    )
}

export default PageLayout;