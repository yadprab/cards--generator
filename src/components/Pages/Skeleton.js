import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
function SkeletonInput() {
    return (
      <>
        <section className="skeleton">
          <Skeleton variant="text" width={140} animation="wave" />
          <Skeleton variant="text" width={260} height={30} animation="wave" />
        </section>
        <section className="skeleton">
          <Skeleton variant="text" width={140} animation="wave" />
          <Skeleton variant="text" width={260} height={30} animation="wave" />
        </section>
      </>
    );
}

export  {SkeletonInput}
