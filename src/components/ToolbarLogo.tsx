/**
 * ToolbarLogo props.
 */
export type ToolbarLogoProps = {
  /**
   * children.
   */
  children?: React.ReactNode
}

/**
 * ToolbarLogo component.
 */
export const ToolbarLogo: React.VFC<ToolbarLogoProps> = (props) => {
  return (
    <>
      <div className="toolbar-logo">{props.children}</div>

      <style jsx>{`
        .toolbar-logo {
          margin-right: 32px;
        }
      `}</style>
    </>
  )
}
