/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "./conetext";
import ContentEditable from "react-contenteditable";
import { CardSkeleton } from "../CardSkeleton";
import { ProfileButton } from "./ProfileButton";
import { SocialMedia } from "./SocialMedia";
import { emitEvent } from "../../../Trackers/mixpanel";
function Main({ id }) {
  // destructuring the value from the context
  const { Loading, Image, StyleObject, setStyleObject, setError } =
    useContext(dataContext);

  //if fetching is failed we set error component true
  if (Image === undefined || null) {
    setError(true);
  }
  const ref = useRef(null); // ref for getting html string
  // ref content editable using content editable lib
  let text = useRef("This text is editable");
  // ref content editable using content editable lib
  let para = useRef(
    " This text is editable  Lorem ipsum dolor sit amet consectetur adipisicing elit."
  );

  // style object contains styles so that user can change according to their needs
  const STYLE = {
    grid: {
      display: " grid",
      //applying card width value from context
      gridTemplateColumns: `repeat(1, ${StyleObject.cardWidth}px)`,
      placeContent: "center",
    },
    box: {
      backgroundColor: "#fff",
      //applying box-shadow value from context
      boxShadow: `${StyleObject.x}px ${StyleObject.y}px ${StyleObject.blur}px ${StyleObject.spread}px  rgba(0, 0, 0, 0.4)`,
    },
    h3: {
      fontSize: " 1.25rem",
      margin: "0 0 1.38rem 0",
    },
    image: {
      width: "100%",
      objectFit: "cover",
      //applying image height value from context
      height: `${
        StyleObject.imageHeight === undefined ? 200 : StyleObject.imageHeight
      }px`,
    },

    article: {
      padding: "1em",
      borderBottomLeftRadius: "4px",
      borderBottomRightRadius: " 4px",
    },

    p: {
      fontSize: "1rem",
      marginBottom: "1em",
      maxWidth: "45ch",
    },
  };

  //handle change function
  const handleChange = (e) => {
    if (e.target.id === "text") {
      text.current = e.target.value;
      emitEvent("content Editable text", { page: window.location.pathname });
    }
    if (e.target.id === "para") {
      para.current = e.target.value;
      emitEvent("content Editable para", { page: window.location.pathname });
    }
  };

  //using useEffect we get html string when copy code button clicked
  useEffect(() => {
    if (id === "Default-Articles" || id === "Articles-profile-social-media") {
      if (StyleObject.code) {
        setStyleObject({ ...StyleObject, html: ref.current.outerHTML });
      } else {
        setStyleObject({ ...StyleObject, html: "" });
      }
    }
    return () => {
      setStyleObject({ ...StyleObject, html: "" });
    };
  }, [StyleObject.code, id]);

  return (
    <>
      {Loading ? (
        <CardSkeleton />
      ) : (
        <>
          {/* based on id we're rendering the component */}
          {(id === "Default-Articles" ||
            id === "Articles-profile-social-media") && (
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

                {id === "Articles-profile-social-media" && <SocialMedia />}
              </article>
            </section>
          )}
          {id === "profile-button" && <ProfileButton id={id} />}
          {id === "profile-Default" && <ProfileButton id={id} />}
          {id === "Testimonial-1" && <ProfileButton id={id} />}
          {id === "Testimonial-2" && <ProfileButton id={id} />}
        </>
      )}
    </>
  );
}

export { Main };
