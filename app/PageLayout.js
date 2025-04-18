'use client'

import styled from 'styled-components';
import HeaderDesktop from './components/HeaderDesktop';
import HeaderMobile from './components/HeaderMobile';
import TourSchedule from './components/TourSchedule';
import useMediaQuery from './helpers/useMediaQuery';

const mainStackGap = 48;

const PageLayoutStyled = styled.div`
display: flex;
flex-direction: column;
`;

const HeaderLayout = styled.div`
margin-top: 32px;
margin-right: auto;
margin-bottom: ${({ $showMobileLayout })=> $showMobileLayout ? '40px' : `${mainStackGap}px`};
margin-left: auto;
`;

const MainContent = styled.div`
display: flex;
flex-direction: column;
gap: ${mainStackGap}px;
width: 100%;
max-width: 560px;
margin: 0 auto;
padding: 0 16px;
overflow: hidden;
`;

const ResponsiveHeader = styled.div`
    svg {
        width: 100vw;
        height: auto;
    }
    /* @media screen and (max-width: 480px) {
        margin-top: -20px;
    } */
`;

const PageLayout = () => {
const showMobileLayout = useMediaQuery('(max-width: 620px)');
    return (
<PageLayoutStyled>
    <HeaderLayout $showMobileLayout={showMobileLayout}>
    {showMobileLayout ? (
        <ResponsiveHeader>
            <HeaderMobile />
        </ResponsiveHeader>
     ) :  <HeaderDesktop />}
    </HeaderLayout>
    <MainContent>
    <TourSchedule $showMobileLayout={showMobileLayout} />
    {/* <div style={{ width: '100%', height: 80, backgroundColor: '#222222' }} /> */}
    </MainContent>
</PageLayoutStyled>
    )
}

export default PageLayout;