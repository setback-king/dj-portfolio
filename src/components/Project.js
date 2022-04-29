import { useState } from "react"


const Project = ({urls, names, id, styles, handleClick, hovImg}) => {

    const [isHover, setIsHover] = useState(false)
  
    

    const handleHover = () => {
        setIsHover(prevValue => !prevValue)

    }

    return (
        
        <div  key={id} id={id} className="imageBox" onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={(e) => handleClick(e.target.id)} style={styles}>
              <img id={id} src={urls} alt={names} className="top" />
            <img id={id} src={hovImg} alt={names} className="bottom" />
          
           
        </div>
       
    )
}

export default Project