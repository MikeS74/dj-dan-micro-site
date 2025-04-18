'use client'

import styled from 'styled-components';
import TicketLink from './TicketLink';
import { colors } from '../styles/colors';
import tourDates from '../../data/tour-dates.json'
import { splitAtFirstNumber } from '../helpers/splitAtFirstNumber';

const TourScheduleLayout = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
`;

const TourDateContainer = styled.div`
display: flex;
align-items: center;
width: 100%;
position: relative;
background-color: ${colors.charcoal};
border: 1px solid ${colors.dimWhite};
border-radius: 18px;
overflow: hidden;
`;

const TourDetails = styled.div`
display: flex;
flex-direction: column;
flex: 1;
gap: 6px;
color: ${colors.offWhite};
padding: 12px;
overflow: hidden;
`;

const DateDetails = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 4px;
width: 79px;
max-height: 72px;
color: ${colors.charcoal};
background-color: ${colors.offWhite};
border-radius: 16px;
padding: 4px 8px;
`;

const DateDisplay = styled.span`
font-size: 14px;
font-weight: 800;
letter-spacing: 1px;
text-transform: uppercase;
text-align: center;
white-space: nowrap;
line-height: 1;
`;

const Month = styled(DateDisplay)`
font-size: 13px;
font-weight: 900;
`;

const Day = styled(DateDisplay)`
font-size: 24px;
`;

const DayOfWeek = styled.span`
font-size: 11px;
font-weight: 600;
text-align: center;
`;

const Divider = styled.hr`
border: 0;
border-bottom: 1px solid grey;
background: grey;
`;

const Row = styled.div`
display: flex;
align-items: center;
gap: 8px;
`;

const City = styled.span`
font-size: 17px;
font-weight: 700;
line-height: 1.4;
 display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;  
overflow: hidden;
`;

const EventTitle = styled.span`
font-size: 14px;
font-weight: 600;
line-height: 1.3;
font-style: italic;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const Venue = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 1.3;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`;

const CityAndTicketRow = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 8px;
`;

const ComingSoon = styled.div`
display: flex;
align-items: center;
width: 100%;
font-size: 14px;
color: ${colors.dimWhite};
font-weight: 600;
background-color: ${colors.charcoal};
border: 1px solid grey;
padding: 16px;
border-radius: 18px;
`;

const TourDate = ({ data, $showMobileLayout }) => {
const monthDayArr = splitAtFirstNumber(data?.date);
const hasVenue = Boolean(data?.venue);
const hasEventTitle = Boolean(data?.eventTitle);
const hasTix = Boolean(data?.ticketUrl);
return (
    <TourDateContainer>
        <DateDetails>
            <DayOfWeek>
            {data.dayOfWeek}
            </DayOfWeek>
              <Divider />
            <Month>
            {monthDayArr[0]?.slice(0, 3)}
            </Month>
            <Day>
            {monthDayArr[1]}
            </Day>
        </DateDetails>
        {/* = */}
    <TourDetails>
        <CityAndTicketRow>
        <Row>
            <City>
            {data?.city}
            </City>
        {/* VENUE DESKTOP */}
            {hasVenue && !$showMobileLayout ? (
            <>
            &#183;
            <Venue>
            {data.venue}
            </Venue>
            </>
            ) : null}
        {/* ============= */}
        </Row>
            {hasTix && <TicketLink $url={data.ticketUrl} />}
        </CityAndTicketRow>
        {/* VENUE MOBILE */}
        <Row>
            {hasVenue && $showMobileLayout ? (
            <>
            <Venue>
            {data.venue}
            </Venue>
            </>
            ) : null}
        {/* ============= */}
        {/* EVENT TITLE DESKTOP */}
            {hasEventTitle && !$showMobileLayout ? (
            <EventTitle>
            {data.eventTitle}
            </EventTitle>
            ) : null}
        {/* ============= */}
        </Row>
        {/* EVENT TITLE MOBILE */}
            {hasEventTitle && $showMobileLayout ? (
            <EventTitle>
            {data.eventTitle}
            </EventTitle>
            ) : null}
        {/* ============= */}
    </TourDetails>
    </TourDateContainer>
)
};

const TourSchedule = ({ $showMobileLayout }) => {
    // console.log(tourDates);
return (
<TourScheduleLayout>
    {tourDates.map((td) => {
        return (
            <TourDate data={td} $showMobileLayout={$showMobileLayout} key={`${td?.date}${td?.city}`} />
        );
      })}
      <ComingSoon>
        More dates TBA...
      </ComingSoon>
</TourScheduleLayout>
)
};

export default TourSchedule;