import React, { FC } from 'react'
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { Heading } from "../components/common/Text";
import { PageBorder } from "./Page.styles";
import { SectionType } from '../components/types';

type PageProps = {
  text: SectionType;
}

export const Portfolio: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={ text } />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
    </PageBorder>
  );
}
