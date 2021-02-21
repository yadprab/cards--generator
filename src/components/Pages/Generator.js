import React, { useEffect, useState} from "react";
import { Nav } from "./Nav";
import { Aside } from "./generatorPage/Aside";
import { Main } from "./generatorPage/Main";
import {dataContext} from './generatorPage/conetext'
import {ErrorComp} from './generatorPage/Error'
function Generator() {
  const [Image, setImage] = useState({});
const [Error, setError] = useState(false)
  const [Loading, setLoading] = useState(true)
  const [StyleObject, setStyleObject] = useState({
    cardWidth:300,
    imageHeight:200,
    x:0,
    y:26,
    blur:36,
    spread:-20,
    title:false,
    code:false,
    html: '',
  })
  const fetchData = () => {
    fetch(`${process.env.REACT_APP_URL}?client_id=${process.env.REACT_APP_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setLoading(false)
       
       

      })
      .catch((err) =>{
       setLoading(false);
       setError(true);
        setImage({});
      });
  };

  useEffect(() => {
  
  setTimeout(fetchData, 4000);
  }, []);

  return (
    <>
      {Error ? (
        <ErrorComp/>
      ) : (
        <main>
          <Nav />

          <dataContext.Provider
            value={{ Image, Loading, StyleObject, setStyleObject }}
          >
            <Main />
            <Aside />
          </dataContext.Provider>
        </main>
      )}
    </>
  );
}

export { Generator };
