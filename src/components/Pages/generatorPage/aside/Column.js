import React, { useContext, useState } from "react";
import { emitEvent } from "../../../../Trackers/mixpanel";
import { dataContext } from "../conetext";
// input component to controlling values
function Column({ id }) {
  const { StyleObject, setStyleObject } = useContext(dataContext);
  // setting same values to the controlling inputs using useState
  const [Input, setInput] = useState({
    cardWidth: StyleObject.cardWidth,
    imageHeight: StyleObject.imageHeight,
    cardHeight: StyleObject.cardHeight,
    figureW: StyleObject.figureW,
    figureH: StyleObject.figureH,
    positionT: StyleObject.positionT,
    positionB: StyleObject.positionB,
  });

  // using dynamic objects we changing state
  const handleChange = (e) => {
    const re = new RegExp("^\\d+$");
    const name = e.target.name;
    const val = parseInt(e.target.value);

    if (e.target.value === "") {
      setInput({
        cardWidth: 300,
        imageHeight: 200,
      });
      setStyleObject({ ...StyleObject, cardWidth: 300, imageHeight: 200 });
    }

    if (!re.test(val)) {
      return;
    } else {
      setInput({
        ...Input,
        [name]: val,
      });

      setStyleObject({ ...StyleObject, [name]: val });
      emitEvent(`input${name}`, {
        event: name,
        attr: { ...Input, [name]: val, page: window.location.pathname },
      });
    }
    // emit
  };

  // based on the id we're change the input names and value
  return (
    <>
      <article className="column--width">
        <label htmlFor="column">Card Width</label>
        <input
          type="text"
          id="column"
          name="cardWidth"
          defaultValue={Input.cardWidth}
          onChange={handleChange}
        />

        <label
          htmlFor="cardHeight"
          style={{
            display:
              id === "Default-Articles" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        >
          CardHeight
        </label>
        <input
          type="text"
          id="cardHeight"
          name="cardHeight"
          defaultValue={Input.cardHeight}
          onChange={handleChange}
          style={{
            display:
              id === "Default-Articles" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        />
        <label
          htmlFor="figureW"
          style={{
            display:
              id === "Default-Articles" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        >
          ProfileImageWidth
        </label>
        <input
          type="text"
          id="figureW"
          name="figureW"
          defaultValue={Input.figureW}
          onChange={handleChange}
          style={{
            display:
              id === "Default-Articles" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        />

        <label
          htmlFor={
            id === "profile-button" ||
            id === "profile-Default" ||
            id === "Testimonial-1" ||
            id === "Testimonial-2"
              ? "figureH"
              : "imageHeight"
          }
        >
          {id === "profile-button" ||
          id === "profile-Default" ||
          id === "Testimonial-1" ||
          id === "Testimonial-2"
            ? "profileImageHeight"
            : "imageHeight"}
        </label>
        <input
          type="text"
          name={
            id === "profile-button" ||
            id === "profile-Default" ||
            id === "Testimonial-1" ||
            id === "Testimonial-2"
              ? "figureH"
              : "imageHeight"
          }
          defaultValue={
            id === "profile-button" ||
            id === "profile-Default" ||
            id === "Testimonial-1" ||
            id === "Testimonial-2"
              ? Input.figureH
              : Input.imageHeight
          }
          onChange={handleChange}
        />
        <label
          htmlFor={id === "Testimonial-1" ? "positionT" : "positionB"}
          style={{
            display:
              id === "Default-Articles" ||
              id === "profile-button" ||
              id === "profile-Default" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        >
          Image position
        </label>
        <input
          type="text"
          id={id === "Testimonial-1" ? "positionT" : "positionB"}
          name={id === "Testimonial-1" ? "positionT" : "positionB"}
          defaultValue={
            id === "Testimonial-1" ? Input.positionT : Input.positionB
          }
          onChange={handleChange}
          style={{
            display:
              id === "Default-Articles" ||
              id === "profile-button" ||
              id === "profile-Default" ||
              id === "Articles-profile-social-media"
                ? "none"
                : "",
          }}
        />
      </article>
    </>
  );
}

export { Column };
