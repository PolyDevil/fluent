import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import ProtoSet from '../../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Heading.H4'

const H4: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    level: 4,
    className: cn(ClassName, className),
  })

H4.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default H4
