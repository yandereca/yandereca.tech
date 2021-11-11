/**
 * Toolbar props.
 */
export type ToolbarProps = {
  /**
   * children.
   */
  children?: React.ReactNode
}

/**
 * Toolbar component.
 */
export const Toolbar: React.VFC<ToolbarProps> = (props) => {
  return (
    <>
      <div className="toolbar">
        <div className="toolbar-content">{props.children}</div>
      </div>

      <style jsx>{`
        .toolbar {
          display: flex;
          justify-content: center;

          height: 80px;
        }

        .toolbar-content {
          display: flex;
          align-items: center;

          max-width: 1600px;
          width: 100%;
        }
      `}</style>
    </>
  )
}
