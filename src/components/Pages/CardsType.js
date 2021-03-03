import React from 'react'

import {Link} from 'react-router-dom';
function CardsType() {

    return (
      <>
        {/* contains different types of cards  with link to each one */}
        <section className="types--section">
          <h3>choose the card type</h3>
          <article className="types">
            <article>
              <Link to="/generator/profile-button">
                <figure>
                  <img src="/images/card1.png" alt="" />
                  <figcaption>profile card with button</figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="/generator/profile-Default">
                <figure>
                  <img src="/images/card2.png" alt="" />
                  <figcaption>Default profile card</figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="/generator/Testimonial-1">
                <figure>
                  <img src="/images/card3.png" alt="" />
                  <figcaption>Testimonial cards-1</figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="/generator/Testimonial-2">
                <figure>
                  <img src="/images/card4.png" alt="" />
                  <figcaption>Testimonial cards-2</figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="/generator/Articles-profile-social-media">
                <figure>
                  <img src="/images/card5.png" alt="" />
                  <figcaption>
                    {" "}
                    Articles and profile cards with social media
                  </figcaption>
                </figure>
              </Link>
            </article>
            <article>
              <Link to="/generator/Default-Articles">
                <figure>
                  <img src="/images/card6.png" alt="" />
                  <figcaption>Default Articles cards</figcaption>
                </figure>
              </Link>
            </article>
          
          </article>
        </section>
      </>
    );
}

export  {CardsType}
