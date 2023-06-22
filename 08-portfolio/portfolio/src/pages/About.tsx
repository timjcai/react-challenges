import React, { FC } from 'react'
import { SectionHeader } from '../components/Badges/SectionBadge';
import { PageBorder } from './Page.styles';
import { SectionType } from '../components/types';
import { StyledLink } from '../components/common/Links/Links.styles';
import { Paragraph } from '../components/common/Text';
import { Button } from '../components/common/Button/Button.styles'
import { Heading } from '../components/common/Text/Heading.styles'
import { StackIcon } from '../components/common/Icon/Icon';
import { StackBadge } from '../components/Badges/StackBadge';
import { ColumnContainer, FlexCont } from '../components/common/Container/Container.styles';

type PageProps = {
  text: SectionType;
}

const aboutPageData = {
  Heading: 'front-end',
  labels: ['javascript', 'html5']
}

export const About: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <h3>Full Stack Web Developer</h3>
      <Paragraph $fontsize={0.75} $margin={'0px'}>ex-Growth & Operations for startups</Paragraph>
      <br />
      <Paragraph $fontsize={0.75} $margin={ '0px'}>After tinkering and learning to code on the side, I decided to take the leap and make a transition from selling software to <strong> building the software. </strong></Paragraph>
      <br />
      <Paragraph $fontsize={0.75} $margin={ '0px'}>Languages</Paragraph>
      <br />
      <FlexCont $d={ 'row' }>
        <FlexCont $d={'column'} $m={ '0px 5px 0px 5px'}>
          <Paragraph $fontsize={0.75} $margin={ '0px 0px 5px 0px'}>front end</Paragraph>
          <StackBadge label={'javascript'} />
          <StackBadge label={'html5'} />
          <StackBadge label={'css3'} />
          <StackBadge label={'react'} />
          <StackBadge label={'typescript'} />
        </FlexCont>
        <FlexCont $d={'column'} $m={ '0px 5px 0px 5px'}>
          <Paragraph $fontsize={0.75} $margin={ '0px 0px 5px 0px'} >back end</Paragraph>
          <StackBadge label={'ruby'} />
          <StackBadge label={'nodejs'} />
          <StackBadge label={'rails'} />
          <StackBadge label={'postgresql'} />
          <StackBadge label={'mongodb'} />
          <StackBadge label={'firebase'} />
        </FlexCont>
        <FlexCont $d={'column'} $m={ '0px 5px 0px 5px'}>
          <Paragraph $fontsize={0.75} $margin={ '0px 0px 5px 0px'}>other</Paragraph>
          <StackBadge label={'jest'} />
          <StackBadge label={'rspec'} />
          <StackBadge label={'github'} />
          <StackBadge label={'heroku'} />
        </FlexCont>
      </FlexCont>

      <Button><StyledLink to="/portfolio">Check out what I've built!</StyledLink></Button>
    </PageBorder>
  );
}
