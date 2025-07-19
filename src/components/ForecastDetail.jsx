// import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ForecastDetail() {
    const { date } = useParams()
    return (
        <div>
            <p>{date}</p>
        </div>
    )
}

export default ForecastDetail;