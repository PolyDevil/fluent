import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props, PropsRequired } from './types'
import Set from '../../Set'
import { ClassName } from './styles.css'

const displayName = 'Text.DefinedTerm'

const DefinedTerm: FC<Props> = ({ className, ...props }) =>
  Set({
    ...object.mergePropsWithWarning<PropsRequired>(
      defaultProps,
      props,
      displayName
    ),

    // props override
    as: 'dfn',
    className: cn(ClassName, className),
  })

DefinedTerm.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default DefinedTerm
