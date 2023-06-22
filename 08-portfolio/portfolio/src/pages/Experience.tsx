import React, { FC } from 'react'
import { PageBorder } from './Page.styles';
import { Timeline } from '../components/Timeline/Timeline';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { SectionType } from '../components/types';

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
      <h1>{text}</h1>
      <Timeline resumedata={pagedata}></Timeline>
    </PageBorder>
  );
}
