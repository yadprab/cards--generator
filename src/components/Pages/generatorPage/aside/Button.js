import React, { useContext } from 'react'
import {dataContext} from '../conetext'
// Button to change the get code state
function Button({value}) {
    const { setStyleObject, StyleObject } = useContext(dataContext);
    return (
        <>
        <button className='button' onClick={()=>{setStyleObject({ ...StyleObject, code: true });}}>{value}</button>
            
        </>
    )
}

export { Button}
