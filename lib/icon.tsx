import React from 'react'
import './icons/weChat.svg'
import './icons/reddit.svg'
import './icons/spotify.svg'
import './icons/youtube.svg'


interface IconProps {
  name: String;
}

const Icon: React.FunctionComponent<IconProps> = ({name}) => {
  return (
    <span><svg>
      <use xlinkHref={`#${name}`}></use>
    </svg></span>
  )
}

export default Icon;

