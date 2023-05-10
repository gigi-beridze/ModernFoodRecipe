import ig1 from "/images/ig-1.png"
import ig2 from "/images/ig-2.png"
import ig3 from "/images/ig-3.png"
import ig4 from "/images/ig-4.png"
import ig5 from "/images/ig-5.png"
import "./followInstagram.css"

import InstagramIcon from '@mui/icons-material/Instagram';

const FollowInstagram = () => {
    return (
        <div className="follow-instagram">
            <div className="follow-instagram-button">
                <a target="_blank" href="https://www.instagram.com/tsu.zustebi/?igshid=YmMyMTA2M2Y%3D">
                    <button>
                        <InstagramIcon className="follow-instagram-icon small" />
                        <span>follow me on instagram</span>
                    </button>
                </a>
            </div>
            <ul>
                <li>
                    <img src={ig1} alt="ig-image" />
                </li>
                <li>
                    <img src={ig2} alt="ig-image" />
                </li>
                <li>
                    <img src={ig3} alt="ig-image" />
                </li>
                <li>
                    <img src={ig4} alt="ig-image" />
                </li>
                <li>
                    <img src={ig5} alt="ig-image" />
                </li>
            </ul>
        </div>
    )
}

export default FollowInstagram