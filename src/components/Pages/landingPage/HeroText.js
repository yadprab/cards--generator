import React from 'react'
import { Link} from "react-router-dom";
function HeroText() {
    return (
        <>
        <article>
            <h2>Generate Card Easily</h2>
            <h3>Get the code Instantly</h3>
            <Link to='/generator' className='button'>get started</Link>
        </article>
            
        </>
    )
}

export { HeroText}
