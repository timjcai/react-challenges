import { FC, PropsWithChildren } from 'react'
import styled from 'styled-components';
import { Heading, Paragraph } from '../common/Text';

interface TimelineProps extends PropsWithChildren {
  resumedata: PointProps[]
}

interface PointProps extends PropsWithChildren {
  time?: string,
  title?: string,
  companyname?: string,
}

const TimelineWrapper = styled.div`
  display: flex;
  width: fit-content;
`;

const TimelineList = styled.ul`
  border-left: 1px solid;
  border-color: rgba(214, 209, 209, 1);
  position: relative;
`;

const TimelineContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  position: relative;
  top: -3px;
  margin-left: 75px;
  margin-bottom: 40px
`;

export const Timeline: FC<TimelineProps> = ({ resumedata }) => {
  return (
    <TimelineWrapper>
      <TimelineList>
        {resumedata && resumedata.map((data) => {
          const { time, title, companyname} = data
          return (<TimelinePoint time={time} title={title} companyname={companyname} />);
        })}
      </TimelineList>
    </TimelineWrapper>
  );
}

const StyledPoint = styled.li`
  display: list-item;
  list-style-type: disc;
  margin-bottom: 20px;
  margin-left: -16px;
  color: white;
  @media (max-width: 1200px) {
    margin-left: -17px;
  }
  @media (max-width: 1100px) {
    margin-left: -18px;
  }
  @media (max-width: 1000px) {
    margin-left: -20px;
  }
  @media (max-width: 900px) {
    margin-left: -21px;
  }
  @media (max-width: 800px) {
    margin-left: -22px;
  }
  @media (max-width: 600px) {
    margin-left: -23px;
  }
  @media (max-width: 550px) {
    margin-left: -24px;
  }
  @media (max-width: 450px) {
    margin-left: -25px;
  }
  @media (max-width: 350px) {
    margin-left: -26px;
  }
`;

export const TimelinePoint: FC<PointProps> = ({ children, time, title, companyname }) => {
  return (
    <StyledPoint>
      <TimelineContent>
        <Paragraph $fontsize={0.5} $textalign={'center'} $margin={'0px'} $color={'var(--text)' }>{time}</Paragraph>
        <Heading $fontsize={'1em'} $margin={ '5px 0px 5px 0px'}>{title}</Heading>
        <Paragraph $fontsize={0.5} $textalign={ 'center'} $margin={ '0px'}>{companyname}</Paragraph>
      </TimelineContent>
    </StyledPoint>
  )
}
