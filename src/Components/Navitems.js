import React from 'react'
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { Avatar } from '@material-ui/core'

function Navitems() {

    const {letter, title, Icon, Avatar} = props
    return (
        <div className="App_Navbar">
      <div className="logo-dashboard">
        <div className="logo">
          <h1 className="letter valign-text-middle racingsansone-normal-blue-24px">{letter}</h1>
        </div>
        <div className="name valign-text-middle racingsansone-normal-storm-dust-24px">{title}</div>
      </div>
      <div className="button-default">
        <div className="caption valign-text-middle roboto-medium-blue-14px">
            <ModeComment/>
            </div>
      </div>
      <Avatar src={Avatar} className="fernando-pidrilio" />
    </div>
    )
}

export default Navitems
