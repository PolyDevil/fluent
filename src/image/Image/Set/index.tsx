import { FC } from 'react'
import cn from 'classnames'
import { object } from 'utils'
import { defaultProps } from './defaultProps'
import type { Props } from './types'
import ProtoSet from '../ProtoSet'
import { ClassName } from './styles.css'

export const displayName = 'Image'

const Image: FC<Props> = ({ className, ...props }) =>
  ProtoSet({
    ...object.mergePropsWithWarning(defaultProps, props, displayName),

    // props override
    className: cn(ClassName, className),
  })

Image.displayName = displayName

export { defaultProps } from './defaultProps'
export type { Props } from './types'
export default Image