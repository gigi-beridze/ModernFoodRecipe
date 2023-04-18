import Map from "/images/map.svg"
import Calendar from "/images/calendar.svg"
import './course.css'

const Course = () => {
    return (
        <div className="course">
            <div className="title">
                <span>გსურს კულინარიის პროფესიონალურ დონეზე შესწავლა?</span>
            </div>
            <div className="course-info">
                <span>გაიარე უფასო კონსულტაცია მითითებულ მისამართზე</span>
                <span>
                    <img src={Calendar} alt="" />
                    Saturday, January 20, 2019</span>
                <span>
                    <img src={Map} alt="" />
                    Ganivi, Tbilisi</span>
            </div>
        </div>
    )
}

export default Course