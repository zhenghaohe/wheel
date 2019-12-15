import React from 'react'
import '../icons/weChat.svg'
import '../icons/reddit.svg'
import '../icons/spotify.svg'
import '../icons/youtube.svg'
import './icon.scss'
import classes from '../helpers/classes';

interface IconProps extends React.SVGAttributes<SVGElement>{
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({className, name, ...restProps}) => {
  return (
    <svg className={classes(className, 'hui-icon')} {...restProps}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  )
};

export default Icon;

