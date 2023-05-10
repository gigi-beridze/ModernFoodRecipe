import { useParams } from "react-router-dom"
import NewlyAddedData from "../data/all-recipes.json"
import "../style/theRecipe.css"

const TheRecipe = () => {
    const {food} = useParams()

    const theFood = NewlyAddedData.find(theFood => theFood.title === food)
    return (
        <div className="the-recipe">
            <div className="section-header">
                <h2>{theFood.title}</h2>
            </div>
            <div className="container">
                <div className="the-recipe-item">
                    <div className="the-recipe-smallinfo">
                        <span>level:
                            <span className="the-recipe-smallinfo-red">{theFood.difficulty}</span>
                        </span>
                        <span>time: {theFood.time} {theFood.timeType}</span>
                        <span>Category: {theFood.type}</span>
                        <span>Country: {theFood.country}</span>
                    </div>
                </div>
                <div className="the-recipe-full-item">
                    <div className="the-recipe-full-item-header">
                        <div className="the-recipe-posted-author">
                            <div>
                                <img src="/images/person1.png" alt="" />
                                <span className="the-recipe-posted-by">Posted by</span>
                                <span className="the-recipe-posted-author-name">{theFood.type}</span>
                            </div>
                            <div>
                                <span>delicous</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheRecipe