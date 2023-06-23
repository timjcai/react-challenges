import React, { FC } from 'react'
import { PageBorder } from './Page.styles';
import { Timeline } from '../components/Timeline/Timeline';
import { SectionHeader } from '../components/Badges/SectionBadge';
import { SectionType } from '../components/types';
import { Heading } from '../components/common/Text';

type PageProps = {
  text: SectionType;
}

const pagedata = [
  {
    time: "Jan 2023 - Mar 2023",
    title: "Web Dev Bootcamp Student",
    companyname: 'Le Wagon'
  },
  {
    time: "Jun 2014 - Jun 2018",
    title: "Bachelor of Commerce & Diploma of Languages",
    companyname: 'University of Melbourne'
  },
  {
    time: "Jan 2017 - Jun 2017",
    title: "Exchange Semester",
    companyname: 'University of Southern California'
  }
]


export const Education: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <Timeline resumedata={pagedata}></Timeline>
    </PageBorder>
  );
}
