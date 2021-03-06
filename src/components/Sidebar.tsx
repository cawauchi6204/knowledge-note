import React from "react"

type Props = {}

const Sidebar: React.FC<Props> = ({ children }) => {
  return (
    <aside>
      {children}
    </aside>
  )
}

export default Sidebar
