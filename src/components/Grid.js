import React from "react";

const Grid = React.forwardRef(({ type, img, alt }, ref) => {

  return (
    <>
      <section className="grid--container" ref={ref}>
        <ul className={type}>
          <li>
            <section className="cards">
              <figure>
                <img src={img} alt={alt} />
              </figure>
              <article>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur aliquid rem illo adipisci quaerat
                  minima sapiente nam, saepe ducimus soluta fugit labore aperiam
                  voluptatem commodi! Sit totam suscipit vel!
                </p>
              </article>
            </section>
          </li>
          <li>
            <section className="cards">
              <figure>
                <img src={img} alt={alt} />
              </figure>
              <article>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur aliquid rem illo adipisci quaerat
                  minima sapiente nam, saepe ducimus soluta fugit labore aperiam
                  voluptatem commodi! Sit totam suscipit vel!
                </p>
              </article>
            </section>
          </li>
          <li>
            <section className="cards">
              <figure>
                <img src={img} alt={alt} />
              </figure>
              <article>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur aliquid rem illo adipisci quaerat
                  minima sapiente nam, saepe ducimus soluta fugit labore aperiam
                  voluptatem commodi! Sit totam suscipit vel!
                </p>
              </article>
            </section>
          </li>
          <li>
            <section className="cards">
              <figure>
                <img src={img} alt={alt} />
              </figure>
              <article>
                <h2>title</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae consequuntur aliquid rem illo adipisci quaerat
                  minima sapiente nam, saepe ducimus soluta fugit labore aperiam
                  voluptatem commodi! Sit totam suscipit vel!
                </p>
              </article>
            </section>
          </li>
         
     

         
        </ul>
      </section>
    </>
  );
});

export { Grid };
