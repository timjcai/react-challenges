import React, { FC, useEffect, useState } from 'react';
import { SectionHeader } from '../components/Badges/SectionBadge';
import { SectionType } from '../components/types';
import { PageBorder } from './Page.styles';
import { Timeline } from '../components/Timeline/Timeline';
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



// function capitalize(string: string ) {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// }

export const Page: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={ text } />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <Timeline resumedata={pagedata}></Timeline>
    </PageBorder>

  );
}
