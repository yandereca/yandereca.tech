/**
 * Section props.
 */
export type SectionProps = {
  /**
   * children.
   */
  children?: React.ReactNode
}

/**
 * Section component.
 */
export const Section: React.VFC<SectionProps> = (props) => {
  return (
    <>
      <div className="section">{props.children}</div>

      <style jsx>{`
        .section {
          display: flex;
          align-items: center;

          flex-flow: column;

          width: 100%;
        }
      `}</style>
    </>
  )
}
