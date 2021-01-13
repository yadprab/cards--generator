import {React,useState, useEffect} from 'react'
import { Aside } from "./Aside";
import { Main } from "./Main";
import { Skeleton } from "./Skeleton";
const Container=()=> {
    const [img, setImage] = useState(null);

 

    useEffect(() => {
      setTimeout(() => {
        setImage(true);
      }, 4000);
    }, []);
    return (
      <>
      {img?<section className="container--main">
          <Aside />
          <Main />
        </section>:<Skeleton/>}
       
      </>
    );
}

export {Container}
