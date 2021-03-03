import React from 'react'
import {Nav} from '../Nav'
//error component
function ErrorComp() {
    return (
      <>
        <Nav />
        <section className="error--section">
          <h3>unexpected Error has occurred please try later</h3>
          <article>
            <p>sorry for the inconvenience</p>
          </article>
          <figure>
            <picture>
              <img src="/images/feeling.svg" alt="feeling sad illustration" />
            </picture>
          </figure>
        </section>
      </>
    );
}

export { ErrorComp}
