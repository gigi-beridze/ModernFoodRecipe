import { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom"
import DropdownItems from '../../data/dropdown-items.json'
import './dropdown.css'

const Dropdown = ({name}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  }
  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  }
  const ref = useRef()
  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [isOpen])
  return (
    <div className="custom-select" ref={ref}>
      <div className="selected" onClick={handleSelectClick}>
        <NavLink>
          {selectedOption ? selectedOption.label : name}
        </NavLink>
        <span className={`arrow ${isOpen ? 'up' : 'down'}`} />
      </div>
      {isOpen && (
        <ul className="options-list">
          {DropdownItems.map((option) => (
           <NavLink to={option.href} key={option.value} onClick={() => handleOptionClick(option)}>
              {option.label}
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown