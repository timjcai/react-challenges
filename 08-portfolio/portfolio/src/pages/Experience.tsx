import React, { FC } from 'react'
import { PageBorder } from './Page.styles';
import { Timeline } from '../components/Timeline/Timeline';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
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
    time: "Feb 2022 - Nov 2022",
    title: "Growth Operations",
    companyname: 'Blinq Technologies'
  },
  {
    time: "Jun 2021 - Feb 2022",
    title: "Growth Hacker",
    companyname: 'Startupbootcamp'
  }
]


export const Experience: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <Timeline resumedata={pagedata}></Timeline>
    </PageBorder>
  );
}
