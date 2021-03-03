import React, { useEffect, useState } from "react";
import { Nav } from "./Nav";
import { Aside } from "./generatorPage/Aside";
import { Main } from "./generatorPage/Main";
import { dataContext } from "./generatorPage/conetext";
import { ErrorComp } from "./generatorPage/Error";
import { useParams } from "react-router-dom";

function Generator() {
  // id from useParams to get the id
  let { id } = useParams();
  // useState for storing api content
  const [Image, setImage] = useState({});
  // for maintaining error state
  const [Error, setError] = useState(false);
  // for maintaining loading state
  const [Loading, setLoading] = useState(true);

  // our main context object
  const [StyleObject, setStyleObject] = useState({
    cardWidth: 300, //width of the card
    cardHeight: 300, //Height of the card
    figureW: 80, //width of the profile Image
    figureH: 80, //height of the profile Image
    imageHeight: 200, //height of the card
    x: 0, //box-shadow x-axis
    y: 26, //box-shadow y-axis
    blur: 36, //box-shadow blur
    spread: -20, //box-shadow spread
    positionT: 30, //top position of the overflow image
    positionB: 30, //bottom position of the overflow image
    title: false, //state for choosing title
    code: false, //state for copying code
    html: "", //for storing html string
  });

  // fetching images from unsplash api
  const fetchData = () => {
    fetch(`${process.env.REACT_APP_URL}?client_id=${process.env.REACT_APP_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setImage({});
      });
  };

  // fetching images from ui faces api
  const fetchFaces = () => {
    fetch(`https://uifaces.co/api?limit=1&emotion[]=happiness`, {
      method: "GET",
      headers: {
        "X-API-KEY": [process.env.REACT_APP_API_KEY],
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
       
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setImage({});
     
      });
  };

  // useEffect for fetching data
  useEffect(() => {
    // based on id we're fetching the data
    if (id === "Default-Articles" || id === "Articles-profile-social-media") {
      setTimeout(fetchData, 4000);
    } else if (
      id === "profile-button" ||
      id === "profile-Default" ||
      id === "Testimonial-1" ||
      id === "Testimonial-2"
    ) {
      setTimeout(fetchFaces, 4000);
    }
  }, [id]);
  // id is dependency here based on id we're fetching
  return (
    <>
      {/* checking error state if its true then rendering error component*/}
      {Error ? (
        <ErrorComp />
      ) : (
        <main>
          {/* main content of our page */}
          <Nav />
          {/* context provider and passing values we need to change  */}
          <dataContext.Provider
            value={{ Image, Loading, StyleObject, setStyleObject, setError }}
          >
            {/* passing id here based on id we show whats need */}
            <Main id={id} />
            <Aside id={id} />
          </dataContext.Provider>
        </main>
      )}
    </>
  );
}

export { Generator };
