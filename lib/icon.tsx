import React from 'react'

interface IconProps {
  name: String;
}

const Icon: React.FunctionComponent<IconProps> = ({name}) => {
  return (
    <span>{name}</span>
  )
}

export default Icon;

