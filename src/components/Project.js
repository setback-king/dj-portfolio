import { useState } from "react"


const Project = ({urls, names, id, styles, handleClick}) => {

    const [isHover, setIsHover] = useState(false)
  
    

    const handleHover = () => {
        setIsHover(prevValue => !prevValue)
    }

    return (
        <div key={id} id={id} className={isHover ? "imageBox hovered" : "imageBox"} onMouseEnter={handleHover} onMouseLeave={handleHover} onClick={(e) => handleClick(e.target.id)} style={styles}>
            <img className={isHover? "project--image image--hovered" : "project--image"} src={urls} alt={names} />
            {isHover && <div className="hoveredProject"> <span className="hoveredName">{names}</span></div>}
        </div>
    )
}

export default Project