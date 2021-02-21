import React from 'react'
import { Link} from "react-router-dom";
import {Svg2} from './Svg2'
function HeroText() {
    return (
        <>
        <article>
            <h2>Generate Card Easily</h2>
            <h3>Get the code Instantly</h3>
            <Link to='/generator' className='button'>get started <Svg2/></Link>
        </article>
            
        </>
    )
}

export { HeroText}
