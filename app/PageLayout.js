'use client'

import styled from 'styled-components';
import HeaderDesktop from './components/HeaderDesktop';
import TourSchedule from './components/TourSchedule';
import useMediaQuery from './helpers/useMediaQuery';

 const mainStackGap = 64;

const PageLayoutStyled = styled.div`
display: flex;
flex-direction: column;
padding: 16px;
`;

const HeaderLayout = styled.div`
margin: 16px auto ${mainStackGap}px auto;
`;

const MainContent = styled.div`
display: flex;
flex-direction: column;
gap: ${mainStackGap}px;
width: 100%;
margin: 0 auto;
max-width: 560px;
`;

const PageLayout = () => {
const showMobileLayout = useMediaQuery('(max-width: 620px)');
    return (
<PageLayoutStyled>
    <HeaderLayout>
    {showMobileLayout ? null :  <HeaderDesktop />}
    </HeaderLayout>
    <MainContent>
    <TourSchedule />
    {/* <div style={{ width: '100%', height: 80, backgroundColor: '#222222' }} /> */}
    </MainContent>
</PageLayoutStyled>
    )
}

export default PageLayout;