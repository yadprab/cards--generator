import React from 'react'
import { Link} from "react-router-dom";
import {Svg2} from './Svg2'
function HeroText({content1, content2}) {
    return (
        <>
        <article>
            <h2>{content1}</h2>
            <h3>{content2}</h3>
            <Link to='/cards' className='button'>get started <Svg2/></Link>
        </article>
            
        </>
    )
}

export { HeroText}
