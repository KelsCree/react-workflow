import React from 'react'

export default function ListItem(props) {
  return (
    <li>
      <img src={props.game.image_url}/>
      <p>{props.game.name}</p>
  </li>
  )
}


