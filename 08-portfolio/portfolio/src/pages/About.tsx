import React, { FC } from 'react'
import { SectionHeader } from '../components/SectionHeader/SectionHeader';
import { PageBorder } from './Page.styles';
import { SectionType } from '../components/types';
import { StyledLink } from '../components/common/Links/Links.styles';
import { Paragraph } from '../components/common/Text';
import { Button } from '../components/common/Button/Button.styles'
import { Heading } from '../components/common/Text/Heading.styles'

type PageProps = {
  text: SectionType;
}

const aboutPageData = {

}

export const About: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={text} />
      <Heading $margin={ '25px 0px 0px 0px'}>{text}</Heading>
      <h3>Full Stack Web Developer</h3>
      <Paragraph $fontsize={0.75}>ex-Growth & Operations for startups</Paragraph>
      <br />
      <Paragraph $fontsize={0.75}>After tinkering and learning to code on the side, I decided to take the leap and make a transition from selling software to <strong> building the software. </strong></Paragraph>
      <br />
      <Paragraph $fontsize={0.75}>Languages</Paragraph>
      <br />

      <Button><StyledLink to="/portfolio">Check out what I've built!</StyledLink></Button>
    </PageBorder>
  );
}
