import React from 'react'
import './icons/weChat.svg'
import './icons/reddit.svg'
import './icons/spotify.svg'
import './icons/youtube.svg'
import './icon.scss'


interface IconProps {
  name: String;
}

const Icon: React.FunctionComponent<IconProps> = ({name}) => {
  return (
    <svg className='hui-icon'>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
};

export default Icon;

