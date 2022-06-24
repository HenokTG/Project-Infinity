import React, { useState, useEffect } from 'react'

import ProgressBar from "react-bootstrap/ProgressBar";

import { useGlobalContext } from "../context";

export default function Progress() {

    const [percent, setPercent] = useState(0)
    const {listofItems} = useGlobalContext()

    useEffect(() => {
        
        if(listofItems.length !== 0){
            const toggledList = listofItems.filter((elem)=> elem.Bought_Item === true )
            const toggleTotal = toggledList.reduce((partialSum, a) => partialSum + a.Cost, 0)
            const total = listofItems.reduce((partialSum, a) => partialSum + a.Cost, 0)
            setPercent(toggleTotal/total*100)
            }
        else{setPercent(0)}

    },[listofItems])

    return (<>
        {listofItems.length !== 0 && 
            <div className="my-1 p-2">
                <h5>Percentage of Purchased: <small style={{color:"#f0ad4e"}}>{percent===0&&"Items in the Cart...But No Item is Purchased Yet!"}</small></h5>
                <ProgressBar
                    animated
                    variant="success"
                    now={percent}
                    label={`${percent.toFixed(2)} %`}
                />
            </div>
        }</>
    )
}
