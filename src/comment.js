import React from 'react';

const SingleComment = (props) => {
    return(
        <div className = 'column'>
            <a href='/' className='avatar'>
                <img className='ui medium image' src={props.image} alt='profile picture'></img>
            </a>
            <div className='content'>
                <a href='/' className='author'>{props.name}</a>
            <div className='metadata'>
                <span className='date'>{props.date}</span>
            </div>
            <div className='text'>
                {props.text}
            </div>
            </div>
        </div>
    )
}