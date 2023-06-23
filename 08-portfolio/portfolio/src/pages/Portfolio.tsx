import React, { FC } from 'react'
import { SectionHeader } from "../components/Badges/SectionBadge";
import { Heading, Paragraph } from "../components/common/Text";
import { PageBorder } from "./Page.styles";
import { SectionType } from '../components/types';
import { CardContainer, CasestudyWrapper } from '../components/CasestudyCard/CasestudyCard.styles';
import { CasestudyCard } from '../components/CasestudyCard/CasestudyCard';

type PageProps = {
  text: SectionType;
}

export const Portfolio: FC<PageProps> = ({ text }) => {
  return (
    <PageBorder>
      <SectionHeader label={ text } />
      <Heading $margin={'25px 0px 0px 0px'}>{text}</Heading>
      <CasestudyWrapper>
        <CardContainer column={'1'} row={'1'}>
          <CasestudyCard
            height={'25vh'}
            width = {'25vw'}
            image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687495312/profile/stinge-mobileimage_szlqbw.png' }
            projectname={'stinge'}
            summary={''}
            github={'https://github.com/timjcai/stinge'}
            techstack={ ['ruby', 'rails', 'heroku', 'javascript', 'postgresql'] }
          />
        </CardContainer>
        <CardContainer column={'2'} row={'1/3'}>
          <CasestudyCard
              height={'50vh'}
              width = {'25vw'}
              image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687495312/profile/stinge-mobileimage_szlqbw.png' }
              projectname={'stinge'}
              summary={''}
              github={'https://github.com/timjcai/stinge'}
              techstack={ ['ruby', 'rails', 'heroku', 'javascript', 'postgresql'] }
            />
        </CardContainer>
        <CardContainer column={'1'} row={'2'}>
          <CasestudyCard
              height={'25vh'}
              width = {'25vw'}
              image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687495312/profile/stinge-mobileimage_szlqbw.png' }
              projectname={'stinge'}
              summary={''}
              github={'https://github.com/timjcai/stinge'}
              techstack={ ['ruby', 'rails', 'heroku', 'javascript', 'postgresql'] }
            />
        </CardContainer>
        <CardContainer column={'1/3'} row={'3'}>
          <CasestudyCard
              height={'25vh'}
              width = {'50vw'}
              image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687495312/profile/stinge-mobileimage_szlqbw.png' }
              projectname={'stinge'}
              summary={''}
              github={'https://github.com/timjcai/stinge'}
              techstack={ ['ruby', 'rails', 'heroku', 'javascript', 'postgresql'] }
            />
        </CardContainer>
      </CasestudyWrapper>
    </PageBorder>
  );
}
