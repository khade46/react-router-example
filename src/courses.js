import React from 'react';

const Courses = (props) =>
{
  return(
    <div className='column'>
      <div className='ui card'>
        <a href='/'>
          <img className='ui large bordered image' src={props.image}></img>
        </a>
        <div className='content'>
          <a href='/' className='header'>{props.name}</a>
          <div className='meta'>
          {props.price}
          </div>
          <div className='description'>{props.duration}</div>
        </div>
        <div class="extra content">
    <button class="ui button">Join Course</button>
  </div>
        </div>
      </div>
  )
}

export default Courses;