import React, { useContext } from 'react'
import {dataContext} from '../conetext'

function Button({value}) {
    const { setStyleObject, StyleObject } = useContext(dataContext);
    return (
        <>
        <button className='button' onClick={()=>{setStyleObject({ ...StyleObject, code: true });}}>{value}</button>
            
        </>
    )
}

export { Button}
