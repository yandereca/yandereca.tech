/**
 * ContentJustify type.
 */
export type ContentJustify = 'left' | 'center' | 'right'

/**
 * ContentAlign type.
 */
export type ContentAlign = 'top' | 'center' | 'bottom'

/**
 * Content props.
 */
export type ContentProps = {
  /**
   * children.
   */
  children?: React.ReactNode

  /**
   * content justify.
   */
  justify?: ContentJustify

  /**
   * content align.
   */
  align?: ContentAlign

  /**
   * content height.
   */
  height?: string

  /**
   * full width.
   */
  fullWidth?: boolean
}

/**
 * Content component.
 */
export const Content: React.VFC<ContentProps> = (props) => {
  return (
    <>
      <div className="content">{props.children}</div>

      <style jsx>{`
        .content {
          display: flex;
          justify-content: ${props.justify ?? 'left'};
          align-items: ${props.align ?? 'top'};
          flex-flow: column;

          ${!props.fullWidth && 'max-width: 1200px;'}
          width: 100%;
          ${props.height && `height: ${props.height};`}
        }
      `}</style>
    </>
  )
}
