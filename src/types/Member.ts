import { MemberRole } from './MemberRole'

/**
 * Member type.
 */
export type Member = {
  /**
   * display name.
   */
  name: string

  /**
   * roles.
   */
  roles?: MemberRole[]

  /**
   * message.
   */
  message?: string

  /**
   * twitter name.
   */
  twitter?: string

  /**
   * avatar url.
   */
  avatar?: string
}
