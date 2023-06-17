import React, { FC, useEffect, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { portfoliodata } from '../data/data'
import { SectionType } from '../components/types';

type PageProps = {
  text: SectionType;
}

function capitalize(string: string ) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Page: FC<PageProps> = ({ text }) => {
  return (
    <>
      <SectionHeader label={ text } />
      <h1>{ text }</h1>
    </>

  );
}
