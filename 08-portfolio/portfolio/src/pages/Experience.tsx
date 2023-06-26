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
    time: "Apr 2023 - Present",
    title: "Self-employed",
    companyname: 'bootstrapping startups'
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
  },
  {
    time: "Feb 2020 - Feb 2022",
    title: "SMB Account Executive",
    companyname: 'DoorDash Australia'
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
