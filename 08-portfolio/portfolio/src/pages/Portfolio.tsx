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
        <CasestudyCard
                height={'auto'}
                width = {'55vw'}
                image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687762893/profile/BIP_m3qobl.png' }
                projectname={'Construction Management App'}
                summary={''}
                github={'https://github.com/timjcai/construction-manager-rails-react'}
                techstack={ ['ruby', 'rails', 'react', 'typescript', 'postgresql'] }
              />
        <CasestudyCard
              height={'auto'}
              width = {'55vw'}
              image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687762673/profile/inv-generator-mockup_h1bws0.png' }
              projectname={'Ruby - Invoice Generator Script'}
              summary={''}
              github={'https://github.com/timjcai/invoice-generator-script-ruby'}
              techstack={ ['ruby'] }
            />
        <CasestudyCard
              height={'auto'}
              width = {'55vw'}
              image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687763891/profile/colorpicker-mockup-wide_gxdooa.png' }
              projectname={'React - Color Picker'}
              summary={''}
              github={'https://github.com/timjcai/react-challenges/tree/main/02-useState/02-colorpicker'}
              techstack={ ['react','html5','css3','typescript','jest'] }
            />
          <CasestudyCard
            height={'auto'}
            width = {'55vw'}
            image={ 'https://res.cloudinary.com/dhxonutdu/image/upload/v1687495312/profile/stinge-mobileimage_szlqbw.png' }
            projectname={'stinge'}
            summary={''}
            github={'https://github.com/timjcai/stinge'}
            techstack={ ['ruby', 'rails', 'heroku', 'javascript', 'postgresql'] }
          />
      </CasestudyWrapper>
    </PageBorder>
  );
}
