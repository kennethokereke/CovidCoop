import React from 'react'
import ModeCommentIcon from '@material-ui/icons/ModeCommentRounded';
import Avatar from '@material-ui/core/Avatar'
import '../stylesheet/Navaritem.scss'





function Navitems(props) {
    const { letter, name, caption, fernandoPidrilio } = props;
  
    return (
      <div className="x-appbar">
        <div className="logo-dashboard">
          <div className="overlap-group">
            <h1 className="letter valign-text-middle racingsansone-normal-blue-24px">{letter}</h1>
          </div>
          <div className="name valign-text-middle racingsansone-normal-storm-dust-24px">{name}</div>
        </div>
        <div className="button-default">
          <div className="caption valign-text-middle roboto-medium-blue-14px">{caption}</div>
        </div>
        <img className="fernando-pidrilio" src={fernandoPidrilio} />
      </div>
    );
  }

export default Navitems;


