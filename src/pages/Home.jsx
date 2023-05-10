import Slider from "../components/hero/Slider"
import NewlyAdded from "../components/newly-added/NewlyAdded"
import Teams from "../components/team/Teams"
import TopDishes from "../components/top-dishes/TopDishes"
import Course from "../components/course-section/Course"
import Blog from "../components/blog/Blog"

const Home = () => {
    return (
        <div className="home">
            <Slider />
            <TopDishes />
            <NewlyAdded />
            <Teams />
            <Course />
            <Blog />
        </div>
    )
}

export default Home