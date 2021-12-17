import React, { useContext, useState } from "react";
import { emitEvent } from "../../../../Trackers/mixpanel";
import { dataContext } from "../conetext";
function Box() {
  //box shadow component

  //destructuring object from the context
  const { StyleObject, setStyleObject } = useContext(dataContext);

  //state for controlling input
  const [BoxSdw, setBoxSdw] = useState({
    x: StyleObject.x,
    y: StyleObject.y,
    blur: StyleObject.blur,
    spread: StyleObject.spread,
  });

  //handle change function
  const handleChange = (e) => {
    const name = e.target.name;

    let val = e.target.value;
    // checking is Nan and converting negative value to positive int
    if (name === "blur") {
      if (isNaN(val)) {
        return;
      } else {
        val = Math.abs(val);
      }
    }
    // using dynamic objects we changing state
    setBoxSdw({
      ...BoxSdw,
      [name]: val,
    });
    setStyleObject({
      ...StyleObject,
      [name]: val,
    });

    emitEvent("Box shadow", {
      ...StyleObject,
      [name]: val,
      page: window.location.pathname,
    });
  };
  return (
    <>
      <section className="box--shadow">
        <label htmlFor="axis">Box shadow</label>

        <section className="box--shadow--axis">
          <article className="x-axis">
            <label htmlFor="x">X</label>
            <input
              type="text"
              id="x"
              name="x"
              defaultValue={BoxSdw.x}
              onChange={handleChange}
            />
          </article>
          <article className="Y-axis">
            <label htmlFor="y">Y</label>
            <input
              type="text"
              id="y"
              name="y"
              defaultValue={BoxSdw.y}
              onChange={handleChange}
            />
          </article>
          <article className="Blur">
            <label htmlFor="blur">B</label>
            <input
              type="text"
              id="blur"
              name="blur"
              defaultValue={Math.abs(BoxSdw.blur)}
              onChange={handleChange}
            />
          </article>
          <article className="spread">
            <label htmlFor="spread">S</label>
            <input
              type="text"
              id="spread"
              name="spread"
              defaultValue={BoxSdw.spread}
              onChange={handleChange}
            />
          </article>
        </section>
      </section>
    </>
  );
}

export { Box };
