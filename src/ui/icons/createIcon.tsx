import clsx from 'clsx'
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactNode,
} from 'react'
import { forwardRef } from 'react'

export type IconProps = Omit<ComponentProps<'svg'>, 'children'>
export type IconConfig = { size: number }

export const createIcon = (
  node: ReactNode,
  { size }: IconConfig = { size: 24 }
): ForwardRefExoticComponent<PropsWithoutRef<IconProps>> => {
  const Entypo = forwardRef<SVGSVGElement, IconProps>(
    ({ className, ...rest }, ref) => (
      <svg
        viewBox={`0 0 ${size} ${size}`}
        {...rest}
        className={clsx('aspect-square fill-current', className)}
        height={size}
        ref={ref}
        width={size}
      >
        {node}
      </svg>
    )
  )
  Entypo.displayName = 'Icon'
  return Entypo
}

export type CreateEntypo = ReturnType<typeof createIcon>
