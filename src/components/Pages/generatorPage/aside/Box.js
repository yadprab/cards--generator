import React, { useContext, useState } from "react";
import { dataContext } from "../conetext";
function Box() {
  const { StyleObject, setStyleObject } = useContext(dataContext);

  const [BoxSdw, setBoxSdw] = useState({
    x: StyleObject.x,
    y: StyleObject.y,
    blur: StyleObject.blur,
    spread: StyleObject.spread,
  });

  const handleChange = (e) => {
    const name = e.target.name;

    let val = e.target.value;

    if (name === "blur") {
      val = Math.abs(val);
    }

    setBoxSdw({
      ...BoxSdw,

      [name]: val,
    });
    setStyleObject({
      ...StyleObject,
      [name]: val,
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
