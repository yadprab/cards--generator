import React from 'react';


const Skeleton=()=> {
    return (
      <>
        <section className="container--main">
          <aside>
            <div></div>
            <div></div>
          </aside>
          <main>
            <nav>
              <div></div>

              <div></div>
            </nav>

            <section className="loader">
              <ul>
                <li>
                  <section className="skeleton">
                    <section className="img"></section>

                    <article>
                      <section className="title"></section>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </article>
                  </section>
                </li>
              </ul>
            </section>

        
          </main>
        </section>
      </>
    );
}

export {Skeleton}
