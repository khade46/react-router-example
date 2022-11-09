import React from 'react';

const UserCard = (props) => {
    return(
        <div className='column'>
        <div class="ui card">
        <div class="image">
          <img src={props.image}/>
        </div>
        <div class="content">
          <a class="header">{props.name}</a>
          <div class="meta">
            <span class="date">{props.date}</span>
          </div>
          <div class="description">
            {props.description}
          </div>
        </div>
        <div class="extra content">
          <a>
            <i class="add icon"></i>
            Add Friend
          </a>
        </div>
      </div>
      </div>
    )
}
export default UserCard;