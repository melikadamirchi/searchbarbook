import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mel = () => {
    let nav = useNavigate()
    return ( <
        div className = 'mt-3 mb-3 border border-1' > < p > This project is made by < h3 > Melika Damirchi < /h3> <br / > You can search the name of the book and it will show you the available books then by clicking on the link you will redirect to the site of the book. < br / > Enjoy! < /p> <
        button onClick = {
            () => nav("/") } > Back to Home < /button> <
        /div>
    )
}

export default Mel