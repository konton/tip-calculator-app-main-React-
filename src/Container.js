import React, { useState } from 'react'
import './App.css';
import Left from "./Left"
import Right from './Right';
const Container = () => {
    const [dataState, setDataState] = useState({
    
            bill: 0,
            tipcent: 0,
            people: 0,
            pertip: 0,
            total: 0
    
        
    })
    const settip = (event) => {

        setDataState({
            bill: dataState.bill,
            tipcent: event,
            people: dataState.people,
            pertip: dataState.pertip,
            total: dataState.total
        })
        console.log(dataState.tipcent)
        
    }

    const setbill = (event) => {
        setDataState({
            bill: event,
            tipcent: dataState.tipcent,
            people: dataState.people,
            pertip: dataState.pertip,
            total: dataState.total
        })
        console.log(dataState)
    }

    const setpeople = (event,bill, tip) => {
        const pertip = (bill*(tip/100))/parseInt(event)
        const total = (parseInt(bill)/parseInt(event))+parseInt(pertip)
        setDataState({
            bill: dataState.bill,
            tipcent: dataState.tipcent,
            people: event,
            pertip: pertip,
            total: total
        })
        
    }
    
    const reset=()=>{
        setDataState({
            bill: 0,
            tipcent: 0,
            people: 0,
            pertip: 0,
            total: 0
        })
    }
    return (
        <div className='box'>
            <Left settip={settip} setbill={setbill} setpeople={setpeople} dataState={dataState}></Left>
            <Right dataState={dataState} reset={reset}></Right>
        </div>
    )
}

export default Container;
