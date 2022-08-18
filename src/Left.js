import React, { useState } from 'react'
import './App.css';
import ButtonLeft from "./Button.js"

const Left = (props) => {
    const tiphandler = (event) => {
        props.settip(event)
        console.log(event)

    }
    const tipcus = (event) =>{
        props.settip(event.target.value)
    }
    const billhandler = (event) => {
        props.setbill(event.target.value)
    }

    const peoplehandler = (event) => {
        props.setpeople(event.target.value, props.dataState.bill, props.dataState.tipcent)
    }


    return (
        <div className='left'>
            <div className='form'>
                <div className='bill'>
                Bill
                <input placeholder='0' onChange={billhandler} type="number" value={props.dataState.bill || ''} />
                </div>
            
            <div className='tip'>
                Select Tip %
                <div className='tipbtnup'>
                    <ButtonLeft tiphandler={tiphandler} value={5} text="5%" />
                    <ButtonLeft tiphandler={tiphandler} value={10} text="10%" />
                    <ButtonLeft tiphandler={tiphandler} value={15} text="15%" />
                    <ButtonLeft tiphandler={tiphandler} value={25} text="25%" />
                    <ButtonLeft tiphandler={tiphandler} value={50} text="50%" />
                    {/* <button onClick={tiphandler} value={5}>5%</button>
                    <button onClick={tiphandler} value={10}>10%</button>
                    <button onClick={tiphandler} value={15}>15%</button>

                    <button onClick={tiphandler} value={25}>25%</button>
                    <button onClick={tiphandler} value={50}>50%</button> */}
                    <input onChange={tipcus} value={props.dataState.tipcent || ''} placeholder='Custom'/>
                </div>

            </div>
            <div className='people'>
                Number of People
                <input placeholder='0' onChange={peoplehandler} type="number" value={props.dataState.people || ''} />
            </div>
            </div>
        </div>  
  
    )
}

export default Left;