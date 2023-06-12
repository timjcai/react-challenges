import { BankingBrands } from '../../../types';
import { StyledIconLogo } from './IconLogo.styles'
import React, { FC }  from 'react'

const CompanyMapping: { [key in BankingBrands]: string } = {
  Up: "https://up.com.au/static/6cc06998a880f98acb5a57f45c7114e0/up-logo-transparent.png",
  NAB: "https://www.nab.com.au/content/dam/nab/images/types/logos/nab-app-logo-283x283.png",
  CBA: "https://www.edigitalagency.com.au/wp-content/uploads/commbank-logo-png-large-icon-diamond.png",
  ANZ: "https://s3.amazonaws.com/pro.brandkit.io/accounts/anz/asset_files/283001/large_thumb_preview.png?updatedAt=2016-11-17T02:53:12",
  Westpac: "data:image/png;base64,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",
  Macquarie: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkFYsxI_qurCwbxgt7IOKEuIKNuwTTi8OcQ&usqp=CAU"
};

type LogoProps = {
  brandname: BankingBrands
}

export const CompanyLogo: FC<LogoProps> = ({ brandname }) => {
  const logo = CompanyMapping[brandname];
  return (
    <StyledIconLogo>
      <img src={logo} alt={ brandname } />
    </StyledIconLogo>
  )
}
