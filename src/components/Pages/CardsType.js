import React from "react";

import { Link } from "react-router-dom";
import { emitEvent } from "../../Trackers/mixpanel";

function CardsType() {
  const handleClick = (e) => {
    const id = e.target.id;
    const link = `page${id}`;

    emitEvent("links", { id, link }, { useMixp: false });
    emitEvent("pageSelect", { page: id });
  };

  return (
    <>
      {/* contains different types of cards  with link to each one */}
      <section className="types--section">
        <h3>choose the card type</h3>
        <article className="types">
          <article>
            <Link
              to="/generator/profile-button"
              id="profile-button"
              onClick={handleClick}
            >
              <figure>
                <img src="/images/card1.png" alt="" id="profile-button" />
                <figcaption>profile card with button</figcaption>
              </figure>
            </Link>
          </article>
          <article>
            <Link
              to="/generator/profile-Default"
              id="profile-Default"
              onClick={handleClick}
            >
              <figure>
                <img src="/images/card2.png" alt="" id="profile-Default" />
                <figcaption>Default profile card</figcaption>
              </figure>
            </Link>
          </article>
          <article>
            <Link
              to="/generator/Testimonial-1"
              id="Testimonial-1"
              onClick={handleClick}
            >
              <figure>
                <img src="/images/card3.png" alt="" id="Testimonial-1" />
                <figcaption>Testimonial cards-1</figcaption>
              </figure>
            </Link>
          </article>
          <article>
            <Link
              to="/generator/Testimonial-2"
              id="Testimonial-2"
              onClick={handleClick}
            >
              <figure>
                <img src="/images/card4.png" alt="" id="Testimonial-2" />
                <figcaption>Testimonial cards-2</figcaption>
              </figure>
            </Link>
          </article>
          <article>
            <Link
              to="/generator/Articles-profile-social-media"
              id="Articles-profile-social-media"
              onClick={handleClick}
            >
              <figure>
                <img
                  src="/images/card5.png"
                  alt=""
                  id="Articles-profile-social-media"
                />
                <figcaption>
                  {" "}
                  Articles and profile cards with social media
                </figcaption>
              </figure>
            </Link>
          </article>
          <article>
            <Link
              to="/generator/Default-Articles"
              id="Default-Articles"
              onClick={handleClick}
            >
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

export { CardsType };
