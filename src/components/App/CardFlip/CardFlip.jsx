import { useState } from 'react'


function CardFlip({gItem, gDesc}) {
    const [isVisible, setIsVisible] =useState(true);

    const turnCard = event => {
        setIsVisible(current => !current)

        //PARALLAX? swap img and text?
    }
    //PUT here for like button?
    let showPic = <img  src={gItem} onClick={turnCard}/>
    let showDesc = <p onClick={turnCard}>{gDesc}</p>
    let displayOption = showPic

    return(
       <section onClick={turnCard}>
            <img  src={gItem} className={!isVisible ? 'hidden' : ''}/>
            <p  className={isVisible ? 'hidden' : ''}>{gDesc}</p>

        </section>
    )
}

export default CardFlip

// export default function App() {
//     const [isActive, setIsActive] = useState(false);
  
//     const handleClick = event => {
//       // 👇️ toggle isActive state on click
//       setIsActive(current => !current);
//     };
  
//     return (
//       <div>
//         <button className={isActive ? 'bg-salmon' : ''}