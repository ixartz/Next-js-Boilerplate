import type { AnchorHTMLAttributes } from 'react'
import type { LinkProps as NextLinkProps } from 'next/link'
import NextLink from 'next/link'

export type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = (props: LinkProps) => <NextLink prefetch={false} {...props} />
