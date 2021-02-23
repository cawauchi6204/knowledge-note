import React from 'react'
import { Link } from 'react-scroll';

type Props = {
  item: {
    name: string
    id: string
    text: string
  }
}

const Toc: React.FC<Props> = ({ item }) => {
  return (
    <li key={item.id}>
      <Link
        activeClass="active"
        to={item.id}
        spy={true}
        smooth={true}
        offset={-30}
        duration={0}
      >{item.text}</Link>
    </li>
  )
}

export default Toc
