import type { IButtonLayer, IMarginLayer } from 'layers'

type ReactNode =
  | React.ReactChild
  | React.ReactNodeArray
  | ReadonlyArray<ReactNode>
  | React.ReactPortal
// | boolean
// | null
// | undefined;

export type NodeProps = Omit<
  React.HTMLProps<HTMLButtonElement>,
  'color' | 'size'
>

export interface Props extends NodeProps, IButtonLayer, IMarginLayer {
  className?: string
  children: ReactNode
}
