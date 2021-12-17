import React, { useContext } from "react";
import { emitEvent } from "../../../../Trackers/mixpanel";
import { dataContext } from "../conetext";
// Button to change the get code state
function Button({ value }) {
  const { setStyleObject, StyleObject } = useContext(dataContext);
  return (
    <>
      <button
        className="button"
        onClick={(e) => {
          const buttonVal = e.target.textContent;

          emitEvent("buttonClick", {
            buttonVal,
            page: window.location.pathname,
          });
          setStyleObject({ ...StyleObject, code: true });
        }}
      >
        {value}
      </button>
    </>
  );
}

export { Button };
