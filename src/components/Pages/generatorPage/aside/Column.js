import React, { useContext, useState } from "react";
import { dataContext } from "../conetext";
function Column() {
  const { StyleObject, setStyleObject } = useContext(dataContext);
  const [Input, setInput] = useState({
    cardWidth: StyleObject.cardWidth,
    imageHeight: StyleObject.imageHeight,
  
  });

  const handleChange = (e) => {
    const re = new RegExp("^\\d+$");
    const name = e.target.name;
    const val = parseInt(e.target.value);

    if (e.target.value==='') {
      setInput({
        cardWidth: 300,
    imageHeight:200,
     
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
console.log(Input);
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
          name="cardWidth"
          defaultValue={Input.cardWidth}
          onChange={handleChange}
        />

        <label htmlFor="height">ImageHeight</label>
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
