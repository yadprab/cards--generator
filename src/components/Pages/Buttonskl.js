import React from 'react'
import Skeleton from "@material-ui/lab/Skeleton";
function ButtonSkl() {
    return (
      <>
        <section className='skeleton'>
          <Skeleton variant="text" width={220} height={36} animation="wave" />
        </section>
      </>
    );
}

export { ButtonSkl
}