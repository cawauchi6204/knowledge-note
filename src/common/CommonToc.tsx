import React from 'react'
import { Link } from 'react-scroll';

type Props = {
  tocArray: [
    {
      name: string
      id: string
      text: string
    }
  ]
}

const CommonToc: React.FC<Props> = ({ tocArray }) => {
  return (
    <ul className="list-style-none">
      {
        tocArray.map((item: any) => (
          <li key={item.id}>
            <Link
              activeClass="active"
              to={item.id}
              spy={true}
              smooth={true}
              offset={-30}
              duration={0}
              className="tc-black"
            >{item.text}</Link>
          </li>
        ))
      }
    </ul>
  )
}

export default CommonToc
