import { FC } from 'react'
import { defaultProps } from '../defaultProps'
import ProtoSet from '../../../ProtoSet'
import { Props } from './types'

export const displayName = 'H1'

const H1: FC<Props> = (props) =>
  ProtoSet({
    ...defaultProps,
    ...props,
    level: 1,
  })

H1.displayName = displayName

export default H1
