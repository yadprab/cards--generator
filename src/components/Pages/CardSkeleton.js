import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
function CardSkeleton() {
  return (
    <>
      <section className="card--section--skeleton">
        <article>
          <Skeleton variant="text" height={400} animation="wave" />

          <article>
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
            <Skeleton variant="text" animation="wave" />
          </article>
        </article>
      </section>
    </>
  );
}

export { CardSkeleton };
