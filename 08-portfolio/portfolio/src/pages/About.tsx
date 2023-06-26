import React, { FC, useEffect, useState } from 'react'
import { SectionHeader } from '../components/Badges/SectionBadge';
import { PageBorder } from './Page.styles';
import { SectionType, stackType } from '../components/types';
import { Paragraph, Heading, StyledLink } from '../components/common/Text';
import { Button } from '../components/common/Button/Button.styles'
import { StackBadge } from '../components/Badges/StackBadge';
import { FlexCont } from '../components/common/Container/Container.styles';

type PageProps = {
  text: SectionType;
}

const blurb: string[] = [
  'ex-Growth & Operations for startups',
  'After tinkering and learning to code on the side, I decided to take the leap and make a transition from selling software to building the software.',
  'Languages:'
]
const stack: stackType[] = [
  {
    heading: 'front-end',
    labels: ['javascript', 'html5', 'css3','react','typescript']
  },
  {
    heading: 'back-end',
    labels: ['ruby', 'nodejs', 'rails','postgresql','mongodb', 'firebase']
  },
  {
    heading: 'other',
    labels: ['jest', 'rspec', 'github','heroku']
  }
]

export const About: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <h3>Full Stack Web Developer</h3>

      {(blurb).map((item) => {
        return (
          <>
            <Paragraph $fontsize={0.75} $margin={' 0px'}>
              {item}
            </Paragraph>
            <br/>
          </>
        );
      })}

      <FlexCont $d={ 'row' } $m={ '0px 0px 20px 0px'} $jc={'space-between'}>
        {(stack).map((item) => {
          return (
            <FlexCont $d={'column'} $m={'0px 5px 0px 5px'}>
              <Paragraph $fontsize={0.75} $margin={'0px 0px 5px 0px'}>{item['heading']}</Paragraph>
              {item['labels'].map((language) => {
                return <StackBadge label={ language } />
              })}
            </FlexCont>
          )
        })}
      </FlexCont>

      <Button><StyledLink to="/portfolio">Check out what I've built!</StyledLink></Button>
    </PageBorder>
  );
}
