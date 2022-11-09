import {Link} from 'react-router-dom';
import React from 'react';
const Navbar = () => {
    return(
        <div>
        <div class="ui pointing menu">
  <a class="active item" href='/home'>
    Home
  </a>
  <a class="item" href='/courses'>
    Courses
  </a>
  <a class="item" href='/register'>
    Register
  </a>
  {/* <a class="item">
    Payment
  </a> */}
  <div class="right menu">
    <div class="item">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search link icon"></i>
      </div>
    </div>
  </div>
</div>
<div class="ui segment">
  <p></p>
</div>
</div>
    )
}
export default Navbar;