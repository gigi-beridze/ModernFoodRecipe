import { useState } from "react"
import AllRecipes from "../data/all-recipes.json"
import Clock from '/images/clock.svg'
import Bookmark from '/images/bookmark.svg'
import Popup from "../components/UI/Popup"
import Pagination from "../components/UI/Pagination"
import { NavLink } from "react-router-dom"


const Recipes = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [popUpMassage, setPopUpMassage] = useState('')

    const addFavorites = () => {
        if(isLoggedIn === false) {
            setPopUpMassage('ფავორიტებში დასამატებლად აუცილებელია შეხვიდეთ თქვენს პროფილზე!')
        }else {
            setPopUpMassage('კერძი წარმატებით დაემატა ფავორიტებში!')
        }
    }
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
  
    return (
        <div className="recipes">
            <div className="section-header">
                <h2>რეცეპტები</h2>
            </div>
            {isOpen && <Popup
                content={<>
                    <p>{popUpMassage}</p>
                </>}
                handleClose={togglePopup}
                isLogin={isLoggedIn}
            />}
            <div className="container">
                <div className="newlyAdded-item">
                    {AllRecipes.map((item) => (
                        <div className="newlyAdded-items" key={item.title}>
                            <div className="image-container">
                                <img className="newlyAdded-image" src={item.image} alt={item.title} />
                                <button onClick={addFavorites} className="bookmark-icon">
                                    <img src={Bookmark} onClick={togglePopup} alt="icon" />
                                </button>
                                <NavLink to={`/recipe/${item.title}`}>
                                    <button className="recipe-button">view recipe</button>
                                </NavLink>
                            </div>
                            <div className="newlyAdded-description">
                                <span className="description-title">{item.title}</span>
                                <span className="description-maker">{item.type}</span>
                                <span className="description-country">{item.country}</span>
                                <span className="description-time">
                                    <img className="clock-icon" src={Clock} alt="icon" />
                                    {item.time} {item.timeType}
                                </span>
                                <span className="description-difficulty"> სირთულე:
                                    <span className="description-difficulty-type">
                                        {item.difficulty}
                                    </span>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Pagination />
        </div>   
    )
}

export default Recipes