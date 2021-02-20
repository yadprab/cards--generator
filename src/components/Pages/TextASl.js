import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
function TextASl() {
  return (
    <>
      <section className="skeleton">
        <Skeleton variant="text" height={48} animation="wave" />
        <Skeleton variant="text" height={300} animation="wave" />
      </section>
    </>
  );
}

export { TextASl };
