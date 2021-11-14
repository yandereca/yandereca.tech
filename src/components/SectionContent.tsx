/**
 * SectionContentAlign type.
 */
export type SectionContentAlign = 'left' | 'center' | 'right'

/**
 * SectionContent props.
 */
export type SectionContentProps = {
  /**
   * children.
   */
  children?: React.ReactNode

  /**
   * content align.
   */
  align?: SectionContentAlign
}

/**
 * SectionContent component.
 */
export const SectionContent: React.VFC<SectionContentProps> = (props) => {
  return (
    <>
      <p className="section-content">{props.children}</p>

      <style jsx>{`
        .section-content {
          text-align: ${props.align ?? 'left'};
          font-size: 1.1rem;
          line-height: 1.6;

          max-width: 600px;
        }
      `}</style>
    </>
  )
}
