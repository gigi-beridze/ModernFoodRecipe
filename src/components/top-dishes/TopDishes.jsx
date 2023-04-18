import { NavLink } from "react-router-dom"
import topDishesData from '../../data/top-dishes.json'
import './topDishes.css'

const TopDishes = () => {
    return (
        <div className="topDishes">
            <div className="container">
                <div className="title">
                    <span>Top 5 Dishes of the Week</span>
                </div>
                <div className="items">
                    {topDishesData.map((item) => (
                        <div className="item" key={item.title}>
                            <img src={item.image} alt={item.title} className="item-img" />
                            <div className="item-button">
                                <div className="hover-button">
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopDishes