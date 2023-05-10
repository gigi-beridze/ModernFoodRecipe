import { NavLink } from "react-router-dom"
import InterestingBlogData from "../../data/interesting-blog.json"
import "./interestingBlog.css"

const InterestingBlog = () => {
    return (
        <div className="interesting-blog">
            <div className="interesting-blog-items">
                {InterestingBlogData.map((blog) => (
                    <div className="intersting-blog-item" key={blog.description}>
                        <div className="interesting-blog-cooking-tips">
                            <span className="cooking-tips">cooking tips</span>
                            <div className="interesting-blog-days">
                                <span className="interesting-blog-month">{blog.month}</span>
                                <span className="interesting-blog-day">{blog.day}</span>
                                <span className="interesting-blog-year">{blog.year}</span>
                            </div>
                        </div>
                        <div className="intersting-blog-image">
                            <img src={blog.image} alt="blog-image" />
                        </div>
                        <div className="interesting-blog-description">
                            <p>{blog.description}</p>
                            <NavLink to="/blog">Continue Reading</NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InterestingBlog