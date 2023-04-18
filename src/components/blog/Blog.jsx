import BlogData from "../../data/blog.json"
import "./blog.css"

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="title">
                    <span>უახლესი ბლოგები</span>
                </div>
                <div className="blogs">
                    {BlogData.map((blog) => (
                        <div className="blog-card" key={blog.description}>
                            <img src={blog.image} alt={blog.description} className="blog-img" />
                            <span className="blog-description">{blog.description}</span>
                            <div className="description">
                                <span className="blog-type">{blog.type}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog