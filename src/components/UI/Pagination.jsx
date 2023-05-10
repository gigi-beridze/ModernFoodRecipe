import "./pagination.css"

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Pagination = () => {
    return (
        <div className="pagination">
            <ul>
                <li>
                    <KeyboardDoubleArrowLeftIcon />
                </li>
                <li className="pagination-active">1</li>
                <li>2</li>
                <li>3</li>
                <li>
                    <KeyboardDoubleArrowRightIcon />
                </li>
            </ul>
        </div>
    )
}

export default Pagination