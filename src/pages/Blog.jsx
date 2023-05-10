import Pagination from "../components/UI/Pagination"
import ArticlesDemand from "../components/articles-demand/ArticlesDemand"
import FollowInstagram from "../components/follow-instagram/FollowInstagram";
import InterestingBlog from "../components/interesting-blog/InterestingBlog"
import "../style/blog.css"

const Blog = () => {
    return (
        <div className="page-blog">
           <div className="section-header">
                <h2>სტატიები</h2>
            </div>
            <div className="container">
                <div className="page-blogs">
                    <div className="page-left-blog">
                        <div className="page-blog-header">
                            <h3>საინტერესო ბლოგები</h3>
                        </div>
                        <div className="page-intersting-blog">
                            <InterestingBlog />
                        </div>
                    </div>
                    <div className="page-right-blog">
                        <div className="page-blog-header">
                            <h3>ძებნა</h3>
                        </div>
                        <div className="page-right-search">
                            <input placeholder="Type Keywords" type="search" />
                            <button>search</button>
                        </div>
                        <div className="page-right-blog-items">
                            <div className="page-blog-header">
                                <h3>მოთხოვნადი სტატიები</h3>
                            </div>
                            <div className="page-demanded-blog">
                                <ArticlesDemand />
                            </div>
                        </div>
                    </div>
                </div>
                <Pagination />
            </div>
            <div className="followInstagram">
                <FollowInstagram />
            </div>
        </div>
    )
}

export default Blog