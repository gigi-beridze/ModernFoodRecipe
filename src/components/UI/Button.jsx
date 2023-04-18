import './button.css'

const Button = ({name}) => {
    return (
        <div className="btn">
            <button>{name}</button>
        </div>
    )
}

export default Button