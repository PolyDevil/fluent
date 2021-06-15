import type { Props as ParentProps } from '../../ProtoSet'

export type { PropsRequired } from '../../ProtoSet'

export type Props = Omit<ParentProps, 'aspectRatio'>