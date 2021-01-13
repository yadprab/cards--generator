import React, { useEffect, useRef, useState } from "react";
import { Grid } from "./Grid";
import { Skeleton2 } from "./Skeleton2";
import { ErrorMessage } from "./ErrorMessage";
import { OutputElement } from "./OutputElement";
const Container2 = () => {
  const [dataState, setState] = useState(null);

  const [img, setImage] = useState(null);


  const refContainer = useRef(null)

    const [html, setHTML] = useState(null);
  const fetchData = () => {
    fetch(`${process.env.REACT_APP_URL}?client_id=${process.env.REACT_APP_KEY}`)
      .then((res) => res.json())
      .then((data) => setImage(data))
      .catch((err) => setImage("error"));
  };



  const getData = () => {
    if (sessionStorage.getItem("data") === null) {
      return;
    } else {
      const data = JSON.parse(sessionStorage.getItem("data"));

     
      setState(data);
    
    }
  };

const htmlFn = ()=>{
   const htmlVal = refContainer.current.innerHTML;
 
  setHTML(htmlVal);
}

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setTimeout(fetchData, 4000);
  }, []);
 
  useEffect(() => {

   setTimeout(htmlFn, 12000)
      

  
   
  }, [])

  return (
    <>
      {img === "error" ? (
        <ErrorMessage />
      ) : img ? (
        <Grid
          type={dataState.type}
          img={img.urls.small}
          alt={img.alt_description}
          ref= {refContainer}
         
         
        />
      ) : (
        <Skeleton2 />
      )}
      {img === "error" ? (
        <ErrorMessage />
      ) : img ? ( <OutputElement type={dataState.type} html={html}/>
      ) : (
        <Skeleton2 />
      )}
    </>
  );
};

export { Container2 };
