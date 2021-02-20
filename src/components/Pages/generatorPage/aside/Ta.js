import React, { useContext } from "react";
import { dataContext } from "../conetext";
function Ta() {
  const { StyleObject, setStyleObject } = useContext(dataContext);



  return (
    <>
      <article className="ta--section">
        <h3>HTML and CSS</h3>
        <textarea
          name="html--area"
          id="html--area"
          readOnly
          value={StyleObject.html}
        ></textarea>
        <pre>
          <code>
            {`
             /* this is the main container increase the number of cards by multiplying article--card element and increase grid-template column count */
             ${StyleObject.html}
          
          `}
          </code>
        </pre>
        <button
          className="button"
          onClick={() => {
            setStyleObject({ ...StyleObject, code: false });
          }}
        >
          Copy code
        </button>
      </article>
    </>
  );
}

export { Ta };
