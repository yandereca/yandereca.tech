/**
 * ToolbarItem props.
 */
export type ToolbarItemProps = {
  /**
   * children.
   */
  children?: React.ReactNode
}

/**
 * ToolbarItem component.
 */
export const ToolbarItem: React.VFC<ToolbarItemProps> = (props) => {
  return (
    <>
      <div className="toolbar-item">{props.children}</div>

      <style jsx>{`
        .toolbar-item {
          padding: 32px;
          font-weight: bold;
          color: #939393;
        }
      `}</style>
    </>
  )
}
