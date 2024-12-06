import React from 'react'

export default function Time() {
    return (
        <div className="time">
            <div className="arri-depar" >
                <div className="arri"  >
                    <span>ARRIVAL DATE:</span> <input type="date"/>
                </div>
                <div className="depar">
                    <span>DEPARTURE DATE:</span> <input type="date"/>
                </div>
            </div>
            <div className="book2">
                BOOK NOW
            </div>
        </div>
    )
}
