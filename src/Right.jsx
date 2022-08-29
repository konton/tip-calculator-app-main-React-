import React, {useState}from 'react'
import './App.css';



const Right =(props)=>{

    const resethandler =()=>{
        props.reset()
    }

    
    return(
        <div className='right'>
        <div className='boxes'>
            <div className='firstbox'>
                <div className='tipper'>
                    Tip Amount
                    <p className='bold'>/ person</p>
                </div>
                <div className='tipper'>
                    <p className='money'>{props.dataState.pertip}</p>
                </div>

            </div>
            <div className='secondbox'>
                <div className='totalper'>
                    Total
                    <p className='bold'>/ person</p>
                </div>
                <div className='totalper'>
                    
                    <p className='money'>{props.dataState.total}</p>
                </div>
            </div>
            <div className='btnreset'>
                <button onClick={resethandler}>RESET</button>
            </div>

        </div>


    </div>
    )
}
export default Right;