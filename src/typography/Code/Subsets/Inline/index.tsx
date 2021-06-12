import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Set from '../../Set'
import { ClassName } from './styles.css'

const displayName = 'Code.Inline'

const Inline: FC<Props> = ({ className, ...props }) =>
  Set({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'code',
    type: 'monospace',
    className: cn(ClassName, className),
  })

Inline.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Inline