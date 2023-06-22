import React, { FC, useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { SectionType } from '../components/types';
import { PageBorder } from './Page.styles';
import { Timeline } from '../components/Timeline/Timeline';

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



// function capitalize(string: string ) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

export const Page: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={ text } />
      <h1>{text}</h1>
      <Timeline resumedata={pagedata}></Timeline>
    </PageBorder>

  );
}
