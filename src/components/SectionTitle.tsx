/**
 * SectionTitle props.
 */
export type SectionTitleProps = {
  /**
   * chidlren.
   */
  children?: React.ReactNode
}

/**
 * SectionTitle component.
 */
export const SectionTitle: React.VFC<SectionTitleProps> = (props) => {
  return (
    <>
      <h2 className="section-title">
        <span className="section-title-content">{props.children}</span>
      </h2>

      <style jsx>{`
        .section-title {
          text-align: center;
          font-size: 2rem;

          margin-bottom: 32px;
        }

        .section-title-content {
          background-image: linear-gradient(135deg, #f44336, #d32f2f);
          background-repeat: no-repeat;
          background-size: 100% 30%;
          background-position: left bottom;
        }
      `}</style>
    </>
  )
}
