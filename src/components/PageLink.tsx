import { ComponentPropsWithoutRef } from 'react'
import { Link } from 'react-scroll'

/**
 * PageLink props.
 */
export type PageLinkProps = ComponentPropsWithoutRef<typeof Link>

/**
 * PageLink component.
 */
export const PageLink: React.VFC<PageLinkProps> = (props) => {
  return (
    <>
      <Link {...props} />
    </>
  )
}
