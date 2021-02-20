import React, { useContext, useState } from "react";
import { dataContext } from "../conetext";
function Column() {
  const { StyleObject, setStyleObject } = useContext(dataContext);
  const [Input, setInput] = useState({
    cardWidth: StyleObject.columnWidth,
    imageHeight: StyleObject.imageHeight,
  });

  const handleChange = (e) => {
    const re = new RegExp("^\\d+$");
    const name = e.target.name;
    const val = parseInt(e.target.value);

    if (!re.test(val)) {
      return;
    } else {
      setInput({
        ...Input,
        [name]: val,
      });

      setStyleObject({ ...StyleObject, [name]: val });
    }
  };
  return (
    <>
      <article className="column--width">
        <label htmlFor="column">Card Width</label>
        <input
          type="text"
          id="column"
          name="columnWidth"
          defaultValue={Input.cardWidth}
          onChange={handleChange}
        />

        <label htmlFor="height">imageHeight</label>
        <input
          type="text"
          id="imageHeight"
          name="imageHeight"
          defaultValue={Input.imageHeight}
          onChange={handleChange}
        />
      </article>
    </>
  );
}

export { Column };
