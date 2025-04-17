'use client'

import styled from 'styled-components';
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
align-items: flex-start;
width: 100%;
position: relative;
background-color: ${colors.charcoal};
border: 2px solid ${colors.dimWhite};
border-radius: 20px;
overflow: hidden;
`;

const TourDetails = styled.div`
display: flex;
flex-direction: column;
flex: 1;
gap: 8px;
/* height: 116px; */
color: ${colors.offWhite};
padding: 12px;
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
border-radius: 4px;
padding: 4px 8px;
`;

const DateDisplay = styled.span`
font-size: 14px;
font-weight: 800;

text-transform: uppercase;
text-align: center;
white-space: nowrap;
line-height: 1;
`;

const Month = styled(DateDisplay)`
font-size: 13px;
font-weight: 900;
letter-spacing: 1px;
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
`;

const EventTitle = styled.span`
font-size: 14px;
font-weight: 600;
line-height: 1.3;
font-style: italic;
`;

const Venue = styled.span`
font-size: 14px;
font-weight: 400;
line-height: 1.3;
`;

const TourDate = ({ data }) => {
const monthDayArr = splitAtFirstNumber(data?.date);
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
        <TourDetails>
            <Row>
        <City>
        {data?.city}
        </City>
        &#183;
          <Venue>
        {data?.venue}
        </Venue>
        </Row>
        <EventTitle>
        {data?.eventTitle}
        </EventTitle>
        </TourDetails>
    </TourDateContainer>
)
};

const TourSchedule = () => {
    console.log(tourDates);
return (
<TourScheduleLayout>
 {tourDates.map((td) => {
        return (
            <TourDate data={td} key={`${td?.date}${td?.city}`} />
        );
      })}
</TourScheduleLayout>
)
};

export default TourSchedule;