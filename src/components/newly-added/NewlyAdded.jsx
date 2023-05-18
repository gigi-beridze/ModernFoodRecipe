import NewlyAddedData from '../../data/newly-added.json'
import Clock from '/images/clock.svg'
import Bookmark from '/images/bookmark.svg'
import './newlyAdded.css'
import { NavLink } from 'react-router-dom'
import {useState} from "react";
import Popup from "../UI/Popup.jsx";

const NewlyAdded = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        <div className="newlyAdded">
            <div className="container">
                <div className="title">
                    <span>Newly Added</span>
                </div>
                {isOpen && <Popup
                    content={<>
                        <p>{popUpMassage}</p>
                    </>}
                    handleClose={togglePopup}
                    isLogin={isLoggedIn}
                />}
                <div className="newlyAdded-item">
                    {NewlyAddedData.map((item) => (
                        <div className="newlyAdded-items" key={item.title}>
                            <div className="image-container">
                                <img className="newlyAdded-image" src={item.image} alt={item.title} />
                                <button onClick={addFavorites}  className="bookmark-icon">
                                    <img onClick={togglePopup} src={Bookmark} alt="icon" />
                                </button>
                                <NavLink to={`/recipe/${item.title}`}>
                                    <button className="recipe-button">view recipe</button>
                                </NavLink>
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