import { useParams } from "react-router-dom"
import NewlyAddedData from "../data/all-recipes.json"
import "../style/theRecipe.css"

import StarIcon from '@mui/icons-material/Star';
import { useState } from "react";
import { Rating } from "@mui/material";
import Popup from "../components/UI/Popup";

const TheRecipe = () => {
    const {food} = useParams()
    const theFood = NewlyAddedData.find(theFood => theFood.title === food)
    const [isLoggin, setIsLoggin] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [popUpMassage, setPopUpMassage] = useState('')

    const addFavorites = () => {
        if(isLoggin === false) {
            setPopUpMassage('კომენტარის დასაწერად აუცილებელია შეხვიდეთ თქვენს პროფილზე!')
        }else {
            setPopUpMassage('კომენტარი დაემატა!')
        }
    }
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    return (
        <div className="the-recipe">
            <div className="section-header">
                <h2>{theFood.title}</h2>
            </div>
            {isOpen && <Popup
                content={<>
                    <p>{popUpMassage}</p>
                </>}
                handleClose={togglePopup}
                isLogin={setIsLoggin}
            />}
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
                            <div className="the-recipe-left">
                                <img src="/images/gigi.jpg" alt="usericon" />
                                <span className="the-recipe-posted-by">Posted by</span>
                                <span className="the-recipe-posted-author-name">{theFood.type}</span>
                            </div>
                            <div className="the-recipe-right">
                                <span>delicous</span>
                                {!isLoggin ? <div>
                                    <StarIcon style={{color: "#f8c231"}} />
                                    <StarIcon style={{color: "#f8c231"}} />
                                    <StarIcon style={{color: "#f8c231"}} />
                                    <StarIcon style={{color: "#f8c231"}} />
                                    <StarIcon style={{color: "#f8c231"}} />
                                </div> : <div>
                                <Rating
                                    name="simple-controlled"
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                </div> }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="the-recipe-main-about">
                    <div className="the-recipe-main-image">
                        <img src={theFood.image} alt="image" />
                    </div>
                    <div className="the-recipe-main-ingredients">
                        <h3>ინგრედიენტების სია</h3>
                        <span>
                            Maecenas eu maximus turpis. Aliquam eget libero vitae elit tempor mollis. Curabitur sed mi et quam varius rhoncus velex. Mauris facilisis consequat libero non varius. Suspendisse nec quam tincidunt, imperdiet risus sed, finibus erat. Curabitur egestas nulla non dolor gravida, maximus dictum massa lacinia. Cras porttitor, diam ac lacinia scelerisque, arcu arcu aliquet quam, non dignissim tortor turpis at mauris. Ut eget euismod nulla.
                            Donec quis finibus nibh. Donec mattis id orci sed dapibus. Praesent augue odio, imperdiet sed mollis in, vehicula quis nulla. Ut eu vulputate ligula. Vivamus volutpat lectus dolor, sed congue elit rhoncus pharetra. Praesent non posuere felis. Ut aliquam luctus odio, ac commodo felis consectetur nec. Integer vehicula sit amet erat ut pharetra. Mauris ornare ligula dui, id placerat lacus iaculis sed.
                        </span>
                    </div>
                </div>
                <div className="the-recipe-making-rule">
                    <div className="the-recipe-making-rule-text">
                        <h3>მომზადების წესი</h3>
                    </div>
                    <ol className="the-recipe-ol">
                        <li>
                            <p>
                                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.
                            </p>
                        </li>
                        <li>
                            <p>
                                Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.
                            </p>
                        </li>
                        <li>
                            <p>
                                Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.
                            </p>
                        </li>
                    </ol>
                </div>
                <div className="comment">
                    <textarea placeholder="დაწერე კომენტარი" cols="45" rows="10"></textarea>
                    <div onClick={togglePopup} className="newlyAdded-button">
                        <button onClick={addFavorites}>დაწერე კომენტარი</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TheRecipe