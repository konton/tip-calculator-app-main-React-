import {useState} from 'react';
import './App.css';

const ButtonLeft = (props) => {
    const [isActive, setIsActive] = useState(false);
    const { tiphandler, value, text } = props

    const handleClick = (value) => {
        setIsActive(current => !current);
    }

    const tip = (event) =>{
        tiphandler(event)
    }

    return (
        <button style={{
            backgroundColor: isActive ? 'var(--Strongcyan)' : '',
          }} 
          onClick={()=>{
            handleClick();
            tip(value);
          }} 
          value={value}>{text}</button>
    )
}

export default ButtonLeft;