import React, { FC } from 'react'
import { StyledCasestudyCard } from './CasestudyCard.styles'
import { DevIconType } from '../types';
import { TextOverlay, TextOverlayHeading, TextOverlayParagraph } from "../common/Text";
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

export const CasestudyCard: FC<CaseStudyProps> = ({height, width, image, projectname, summary, github, techstack}) => {
  return (
    <StyledCasestudyCard height={ height } width = {width}>
      <img className="casestudy" src={image} alt={projectname} />
      <TextOverlay $fontcolor='black'>
        <TextOverlayHeading>{projectname}</TextOverlayHeading>
        <TextOverlayParagraph>{summary}</TextOverlayParagraph>
        {github && <Button><a href={github}>Visit Github</a></Button>}
        <FlexCont $d={'row'}>
          {techstack && techstack.map((language) => {
            return <StackIcon icon={ language } />
          })}
        </FlexCont>
      </TextOverlay>
    </StyledCasestudyCard>
  )
}
