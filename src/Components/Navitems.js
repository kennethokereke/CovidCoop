import React from 'react'

import Avatar from '@material-ui/core/Avatar'
import '../stylesheet/Navaritem.scss'
import {RiMessage3Fill} from 'react-icons/ri'







function Navitems(props) {
    const { letter, title, color, image } = props;
  
    return (
     <header>
         <div className="left-side">
         <div className="logo-container">
             <h1 className="logo">{letter}</h1>
         </div>
         <div className="logo-title">
              {title}
         </div>

         </div>

         <div className="right-side">
             <Avatar src={image} className="header_avatar" />
             <div className="overlay_message">
             <RiMessage3Fill color={color} className="header_message"/>
          </div>
           

         </div>

     </header>
    );
  }

export default Navitems;


