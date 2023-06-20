import React, { FC, useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { SectionType } from '../components/types';
import styled from 'styled-components'
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

const PageBorder = styled.div`
  border: 1px solid white;
  border-radius: 16px;
  position: absolute;
  left: 30vw;
  height: 70vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 2em;
`;

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
