import React from 'react';
import javascript from './images/javascript.jpeg';
import aws from './images/aws.jpeg';
import c from './images/c++.jpg';
import css from './images/css.jpeg';
import datascience from './images/datascience.jpeg';
import frontend from './images/frontend.jpeg';
import html from './images/html.jpeg';
import python from './images/python.jpg';
import react from './images/react.jpg';
import springboot from './images/springboot.jpeg';
import Courses from './courses';
const AllCourses = () => {
    return(
        <div className='ui five column grid'>
    <Courses name='React Course' price='1000' duration='6 Weeks' image={react} />
    <Courses name='Complete Python' price='500' duration='2 Weeks' image={python}  />
    <Courses name='C++' price='1000' duration='3 Weeks' image={c}/>
    <Courses name='Data Science' price='2000' duration='6 Weeks' image={datascience} />
    <Courses name='Java Script ' price='1000' duration='1 Weeks' image={javascript} />
    <Courses name='Complete html' price='1000' duration='1 Weeks' image={html} />
    <Courses name='CSS Course' price='1000' duration='1 Weeks' image={css} />
    <Courses name='AWS' price='1000' duration='4 Weeks' image={aws} />
    <Courses name='Frontend development' price='1000' duration='6 Weeks' image={frontend} />
    <Courses name='Spring boot' price='1000' duration='2 Weeks' image={springboot} />
    </div>
    )
}
export default AllCourses;