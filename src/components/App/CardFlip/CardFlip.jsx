import { useState } from 'react'


function CardFlip({gItem, gDesc}) {
    const [isVisible, setIsVisible] =useState(true);

    const turnCard = event => {
        setIsVisible(current => !current)

        //PARALLAX? swap img and text?
    }

    return(
       <section onClick={turnCard}>
            <img  src={gItem} className={!isVisible ? 'hidden' : ''}/>
            <p  className={isVisible ? 'hidden' : ''}>{gDesc}</p>

        </section>
    )
}

export default CardFlip