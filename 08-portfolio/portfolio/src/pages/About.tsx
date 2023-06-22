import React, { FC } from 'react'
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { PageBorder } from './Page.styles';
import { SectionType } from '../components/types';

type PageProps = {
  text: SectionType;
}

export const About: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <h1>{text}</h1>
    </PageBorder>
  );
}
