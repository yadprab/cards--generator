/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "./conetext";
import ContentEditable from 'react-contenteditable'
import { CardSkeleton } from "../CardSkeleton";

function Main() {
  const { Loading, Image, StyleObject, setStyleObject } = useContext(
    dataContext
  );

  const ref = useRef(null)

  let text = useRef('This text is editable');
 
  let para = useRef(' This text is editable  Lorem ipsum dolor sit amet consectetur adipisicing elit.')
  const STYLE = {
    grid: {
      display: " grid",
      gridTemplateColumns: `repeat(1, ${
        StyleObject.columnWidth === undefined ? 300 : StyleObject.columnWidth
      }px)`,
      placeContent: "center",
    },
    box: {
       backgroundColor: '#fff',
      boxShadow: `${StyleObject.x}px ${StyleObject.y}px ${StyleObject.blur}px ${StyleObject.spread}px  rgba(0, 0, 0, 0.4)`,
    },
  h3:{
  fontSize:' 1.25rem',
  marginTop:0,

  },
    image: {
   width: '100%',
   objectFit:'cover',
      height: `${
        StyleObject.imageHeight === undefined ? 200 : StyleObject.imageHeight
      }px`,
    },

    article:{
      padding: '1em',
  borderBottomLeftRadius: '4px',
  borderBottomRightRadius:' 4px',
 maxWidth: '45ch',
    },

    p:{
      fontSize:'1rem',
      
    }
  };
  const handleChange = (e) => {
    if (e.target.id==='text') {
         text.current = e.target.value;
        
    }else{
       para.current = e.target.value;
    }
  }

  useEffect(() => {
    if (StyleObject.code) {
      
      setStyleObject({ ...StyleObject, html: ref.current.outerHTML });
     
    }else{
       setStyleObject({ ...StyleObject, html: '' });
    }
  }, [StyleObject.code]);
 
  return (
    <>
      {Loading ? (
        <CardSkeleton />
      ) : (
        <section className="card--section" style={STYLE.grid} ref={ref}>
          <article className="card" style={STYLE.box}>
            <img
              src={
                Image.urls.small ||
                Image.urls.thumb ||
                Image.urls.regular ||
                Image.urls.full ||
                Image.urls.raw
              }
              alt={Image.alt_description}
              style={STYLE.image}
            />
            <article style={STYLE.article}>
              {StyleObject.title ? (
                <ContentEditable
                  html={text.current}
                  tagName="h3"
                  onChange={handleChange}
                  id="text"
                  style={STYLE.h3}
                />
              ) : null}

              <ContentEditable
                html={para.current}
                tagName="p"
                onChange={handleChange}
                id="para"
                style={STYLE.p}
              />
            </article>
          </article>
        </section>
      )}
    </>
  );
}

export { Main };
