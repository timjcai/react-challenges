import { BankingBrands } from '../../../types';
import { StyledIconLogo } from './IconLogo.styles'
import React, { FC } from 'react'


import {AdvancedImage} from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";

// https://up.com.au/static/6cc06998a880f98acb5a57f45c7114e0/up-logo-transparent.png
const CompanyMapping: { [key in BankingBrands]: string } = {
  Up: "up2_vuhohi.png",
  NAB: "nab3_ifvr3m.avif",
  CBA: "commonwealth-bank-logo-png-icon-diamond_kvftrf.png",
  ANZ: "anz-logo-og-1200x1200_r1emqj.jpg",
  Westpac: "westpac_hdv9sa.png",
  Macquarie: "macquariebank_nt1akr.png"
};

type LogoProps = {
  brandname: BankingBrands
}

const cld = new Cloudinary({
  cloud: {
    cloudName: 'dhxonutdu'
  }
});

export const CompanyLogo: FC<LogoProps> = ({ brandname }) => {
  const logo = CompanyMapping[brandname];
  const myImage = cld.image(`/useContext-CreditCardThemes/${logo}`);
  myImage.resize(thumbnail().width(36).height(36))
  return (
    <StyledIconLogo>
      <AdvancedImage cldImg={ myImage } />
      {/* <img src={logo} alt={ brandname } /> */}
    </StyledIconLogo>
  )
}
