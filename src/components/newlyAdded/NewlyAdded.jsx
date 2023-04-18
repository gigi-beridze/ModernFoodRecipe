import NewlyAddedData from '../../data/newly-added.json'
import Clock from '/images/clock.svg'
import Bookmark from '/images/bookmark.svg'
import './newlyAdded.css'

const NewlyAdded = () => {
    return (
        <div className="newlyAdded">
            <div className="container">
                <div className="title">
                    <span>Newly Added</span>
                </div>
                <div className="newlyAdded-item">
                    {NewlyAddedData.map((item) => (
                        <div className="newlyAdded-items" key={item.title}>
                            <div className="image-container">
                                <img className="newlyAdded-image" src={item.image} alt={item.title} />
                                <button className="bookmark-icon">
                                    <img src={Bookmark} alt="icon" />
                                </button>
                                <button className="recipe-button">view recipe</button>
                            </div>
                            <div className="newlyAdded-description">
                                <span className="description-title">{item.title}</span>
                                <span className="description-maker">{item.maker}</span>
                                <span className="description-time">
                                    <img className="clock-icon" src={Clock} alt="icon" />
                                    {item.time} {item.timeType}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="newlyAdded-button">
                    <button>view all recipes</button>
                </div>
            </div>
        </div>
    )
}

export default NewlyAdded