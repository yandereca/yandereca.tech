/**
 * Container props.
 */
export type ContainerProps = {
  /**
   * children.
   */
  children?: React.ReactNode
}

/**
 * Container component.
 */
export const Container: React.VFC<ContainerProps> = (props) => {
  return (
    <>
      <div className="container">{props.children}</div>

      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
      `}</style>
    </>
  )
}
