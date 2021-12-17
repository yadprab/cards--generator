import React, { useContext } from "react";
import { emitEvent } from "../../../../Trackers/mixpanel";
import { dataContext } from "../conetext";
function Select({ id }) {
  const { setStyleObject, StyleObject } = useContext(dataContext);
  const handleChange = (e) => {
    if (e.target.value === "yes") {
      setStyleObject({ ...StyleObject, title: true });
    } else {
      setStyleObject({ ...StyleObject, title: false });
    }
    emitEvent("titleSelect", {
      value: e.target.value,
      page: window.location.pathname,
    });
  };
  return (
    <>
      <article
        className="title--section"
        style={{
          display:
            id === "Default-Articles" || id === "Articles-profile-social-media"
              ? "flex"
              : "none",
        }}
      >
        <label htmlFor="title">Title</label>
        <select name="title" id="title" onChange={handleChange}>
          <option value="no">no</option>
          <option value="yes">yes</option>
        </select>
      </article>
    </>
  );
}

export { Select };
