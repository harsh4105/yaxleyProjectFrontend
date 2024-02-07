import React from "react";
import './CourseSearch.css';
const CourseSearch=()=>{
    return(
        <div className="search-course">
            <h1>Course Search</h1>
            <p>Unveil Your Prefect University and Dream <span>Course</span></p>
            <div className='course-search-bar'>
                <input
                    type="text"
                    placeholder="Search Course"
                />
                <button type="submit">Search Now</button>
            </div>
        </div>
    )
}

export default CourseSearch;