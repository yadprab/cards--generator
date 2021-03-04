import React, { useContext, useEffect, useRef } from "react";
import { dataContext } from "./conetext";
function ProfileButton({ id }) {
  //Destructuring the objects from the context
  const { Image, StyleObject, setStyleObject, setError } = useContext(
    dataContext
  );
  //Checking the Image content
  if (Image === undefined || null) {
    setError(true);
  }
  const [{ name, photo, position }] = Image;

  //styles of profile image
  const PROFILE_STYLE = {
    grid: {
      display: " grid",
      gridTemplateColumns: `repeat(1, ${StyleObject.cardWidth}px)`,
      placeContent: "center",
      gridAutoRows: `${StyleObject.cardHeight}px`,
    },
    box: {
      borderRadius: "4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: " column",

      backgroundColor: "#fff",
      boxShadow: `${StyleObject.x}px ${StyleObject.y}px ${StyleObject.blur}px ${StyleObject.spread}px  rgba(0, 0, 0, 0.4)`,
    },
    h3: {
      fontSize: " 1.25rem",
      margin: "1em 0 0 0",
    },
    figure: {
      width: `${StyleObject.figureW}px`,
      height: `${StyleObject.figureH}px`,
    },
    img: {
      height: "inherit",
      width: "inherit",
      borderRadius: "50%",
      objectFit: "cover",
      maxWidth: "100%",
      display: "block",
    },
    sub: {
      fontSize: "0.8",
      marginBottom: "1rem",
    },

    p: {
      fontSize: "1rem",
      marginBottom: "1rem",
    },
    button: {
      background: "linear-gradient(283.34deg, #966BE5 0.2%, #5CA2FF 40.42%)",
      fontWeight: "500",
      fontSize: "0.85rem",
      color: "#fff",
      appearance: "none",
      border: "none",
      lineHeight: "1.5",
      textTransform: "uppercase",
      letterSpacing: " 0.05em",
      borderRadius: "4px",
      cursor: "pointer",
      padding: " 0.75em 1em",
      display: `${id === "profile-Default" ? "none" : "inline-block"}`,
    },
  };
  //styles of Testimonial image
  const Testimonial_STYLE = {
    grid: {
      display: " grid",
      gridTemplateColumns: `repeat(1, ${StyleObject.cardWidth}px)`,
      placeContent: "center",
      gridAutoRows: `${StyleObject.cardHeight}px`,
      position: "relative",
      padding: "1em",
    },
    box: {
      borderRadius: "4px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: " column",
      position: "relative",
      backgroundColor: "#fff",
      boxShadow: `${StyleObject.x}px ${StyleObject.y}px ${StyleObject.blur}px ${StyleObject.spread}px  rgba(0, 0, 0, 0.4)`,
    },
    h3: {
      fontSize: " 1.25rem",
      margin: "1em 0 0 0",
    },
    figure: {
      width: `${StyleObject.figureW}px`,
      height: `${StyleObject.figureH}px`,
      position: "absolute",
      top: id === "Testimonial-1" ? `-${StyleObject.positionT}px` : "unset",
      bottom: id === "Testimonial-2" ? `-${StyleObject.positionB}px` : "unset",
    },
    img: {
      height: "inherit",
      width: "inherit",
      borderRadius: "50%",
      objectFit: "cover",
      maxWidth: "100%",
      display: "block",
    },

    sub: {
      fontSize: "0.8",
      marginBottom: "1rem",
    },

    p: {
      fontSize: "1rem",
      textAlign: "center",
      maxWidth: "45ch",
      marginBottom: "1rem",
    },
    q: {
      fontWeight: 500,
    },
  };
  //ref to get HtmlString
  const ref = useRef(null);
  //useEffect to get the HtmlString 
  useEffect(() => {
    if (StyleObject.code) {
      setStyleObject({ ...StyleObject, html: ref.current.outerHTML });
    } else {
      setStyleObject({ ...StyleObject, html: "" });
    }

    return () => {
      setStyleObject({ ...StyleObject, html: "" });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [StyleObject.code]);

  return (
    <>
      {/* based on id we're rendering the cards */}
      <article
        className="profile--card--section"
        style={
          id === "Testimonial-1" || id === "Testimonial-2"
            ? Testimonial_STYLE.grid
            : PROFILE_STYLE.grid
        }
        ref={ref}
      >
        <article
          className="profile--card"
          style={
            id === "Testimonial-1" || id === "Testimonial-2"
              ? Testimonial_STYLE.box
              : PROFILE_STYLE.box
          }
        >
          <figure
            style={
              id === "Testimonial-1" || id === "Testimonial-2"
                ? Testimonial_STYLE.figure
                : PROFILE_STYLE.figure
            }
          >
            <img
              src={photo}
              alt={name}
              style={
                id === "Testimonial-1" || id === "Testimonial-2"
                  ? Testimonial_STYLE.img
                  : PROFILE_STYLE.img
              }
            />
          </figure>
          <h3
            style={
              id === "Testimonial-1" || id === "Testimonial-2"
                ? Testimonial_STYLE.h3
                : PROFILE_STYLE.h3
            }
          >
            {name}
          </h3>
          <p
            style={
              id === "Testimonial-1" || id === "Testimonial-2"
                ? Testimonial_STYLE.sub
                : PROFILE_STYLE.sub
            }
          >
            {position}
          </p>
          {id === "Testimonial-1" || id === "Testimonial-2" ? (
            <p
              contentEditable={true}
              suppressContentEditableWarning={true}
              style={
                id === "Testimonial-1" || id === "Testimonial-2"
                  ? Testimonial_STYLE.p
                  : PROFILE_STYLE.p
              }
            >
              <q>
                "Development is worth much more than I paid. Keep up the
                excellent work."
              </q>
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quis ea error nobis, animi, harum neque tenetur sint quod, atque
              temporibus nulla? Reiciendis amet quis explicabo similique a cum
              harum beatae.
            </p>
          ) : (
            ""
          )}

          {id === "profile-Default" ||
          id === "Testimonial-1" ||
          id === "Testimonial-2" ? (
            ""
          ) : (
            <button
              id="profile--button"
              className="button"
              contentEditable="true"
              suppressContentEditableWarning={true}
              style={PROFILE_STYLE.button}
            >
              text is editable
            </button>
          )}
        </article>
      </article>
    </>
  );
}

export { ProfileButton };
