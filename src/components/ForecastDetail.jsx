// import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function ForecastDetail() {
    const { date } = useParams()
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); // go back one step
    };

    return (
        <div>
            <button onClick={handleGoBack}>Go Back</button>
            <p>{date}</p>
        </div>
    )
}

export default ForecastDetail;