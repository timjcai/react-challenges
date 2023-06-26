import React, { FC, useState, useEffect } from 'react'
import { CasestudyImage, StyledCasestudyCard, StyledImageWrapper } from './CasestudyCard.styles'
import { DevIconType } from '../types';
import { Heading, TextOverlay, TextOverlayHeading, TextOverlayParagraph } from "../common/Text";
import { Button } from '../common/Button/Button.styles';
import { StackBadge } from '../Badges/StackBadge';
import { FlexCont } from '../common/Container/Container.styles';
import { StackIcon } from '../common/Icon/Icon';

type CaseStudyProps = {
  height: string,
  width: string,
  image?: string,
  projectname?: string,
  summary?: string,
  github?: string,
  techstack?: DevIconType[];
}

export const CasestudyCard: FC<CaseStudyProps> = ({ height, width, image, projectname, summary, github, techstack }) => {
  return (
    <StyledCasestudyCard>
      <StyledImageWrapper
        height={height} width={width}>
        <CasestudyImage className="casestudy" src={image} alt={projectname} />
        <TextOverlay $fontcolor='black'>
          <TextOverlayParagraph>{summary}</TextOverlayParagraph>
          {github && <Button><a href={github}>Visit Github</a></Button>}
        </TextOverlay>
      </StyledImageWrapper>
      <FlexCont $d={'row'} $jc={'space-between'} $p={'0em 0.5em 0em 0.5em'} $ai={'center'} $w={ 'inherit'}>
        <Heading $fontsize={'1.5em'}>{projectname}</Heading>
      </FlexCont>
      <FlexCont $d={'row'} $p={'0em 0.5em 0.5em 0.5em'} $g={5}>
          {techstack && techstack.map((language) => {
            return <StackBadge label={ language } />
          })}
      </FlexCont>
     </StyledCasestudyCard>
  )
}
