import ArticlesDemandData from "../../data/articles-demand.json"
import "./articlesDemand.css"

const ArticlesDemand = () => {
    return (
        <div className="articles-demand">
            <div className="articles-demand-items">
                {ArticlesDemandData.map((blog, index) => (
                    <div key={index} className="articles-demand-item">
                        <div className="articles-demand-image">
                            <img src={blog.image} alt="blog-image" />
                        </div>
                        <div className="articles-demand-description">
                            <span className="articles-demand-type">{blog.type}</span>
                            <span className="articles-demand-text">{blog.description}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ArticlesDemand