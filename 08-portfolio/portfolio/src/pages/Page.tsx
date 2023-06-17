import React, { FC } from 'react';

type PageProps = {
  text: string;
}


export const Page: FC<PageProps> = ({ text }) => {
  return (
    <h1>{ text }</h1>
  );
}
