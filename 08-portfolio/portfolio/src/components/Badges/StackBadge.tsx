import React, { FC } from 'react'
import { StyledBadge } from './StackBadge.styles'
import { DevIconType } from '../types'
import { StackIcon } from '../common/Icon/Icon'
import { Paragraph } from '../common/Text'

type BadgeComponents = {
  label: DevIconType;
}

export const StackBadge: FC<BadgeComponents> = ({ label }) => {
  return (
    <StyledBadge $padding={'3px 5px 3px 5px' }>
      <StackIcon icon={label} />
      <Paragraph $fontsize={0.5} $color={'var(--secondary)'} $margin={'0px'}>{label}</Paragraph>
    </StyledBadge>
  );
}
