import { Member } from '../types/Member'

/**
 * MemberCard props.
 */
export type MemberCardProps = {
  /**
   * member.
   */
  member: Member
}

/**
 * MemberCard component.
 */
export const MemberCard: React.VFC<MemberCardProps> = (props) => {
  const { member } = props

  return (
    <>
      <div className="member-card">
        <img className="member-avatar" src={member.avatar} alt="torinikun" />
        <div className="member-content">
          <div className="member-name">
            <a
              className="member-link"
              href={`https://twitter.com/${member.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              {member.name}
            </a>
          </div>
          <div className="member-message">{member.message}</div>
        </div>
      </div>

      <style jsx>{`
        .member-card {
          width: 100%;
          margin-bottom: 32px;

          display: flex;
        }

        .member-avatar {
          object-fit: contain;
          max-width: 128px;
          width: 100%;
        }

        .member-content {
          padding: 32px 16px;
        }

        .member-name {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .member-link {
          text-decoration: none;
          color: inherit;

          background-image: linear-gradient(135deg, #f44336, #d32f2f);
          background-repeat: no-repeat;
          background-size: 100% 10%;
          background-position: left bottom;
        }
      `}</style>
    </>
  )
}
