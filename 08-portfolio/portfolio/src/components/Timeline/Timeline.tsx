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
`;

export const TimelinePoint: FC<PointProps> = ({ children, time, title, companyname }) => {
  return (
    <StyledPoint>
      <TimelineContent>
        <Paragraph $fontsize={0.5} $textalign={ 'center'} $margin={ '0px'}>{time}</Paragraph>
        <Heading $fontsize={'1em'}>{title}</Heading>
        <Paragraph $fontsize={0.5} $textalign={ 'center'} $margin={ '0px'}>{companyname}</Paragraph>
      </TimelineContent>
    </StyledPoint>
  )
}
