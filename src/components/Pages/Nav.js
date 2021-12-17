import React from "react";
import { Svg } from "./Svg";
import { Link } from "react-router-dom";
import { emitEvent } from "../../Trackers/mixpanel";
function Nav() {
  const handleClick = (e) => {
    const id = e.target.id;
    emitEvent("navigation", { to: id });
  };
  return (
    <>
      <nav>
        <article>
          <Link to="/" id="home" onClick={handleClick}>
            <img src="/images/logo.png" alt="" id="home" />
          </Link>
        </article>

        <a
          href="https://github.com/yadprab/cards--generator"
          target="_blank"
          rel="noOpener noReferrer"
          id="my github"
          onClick={handleClick}
        >
          <Svg />
        </a>
      </nav>
    </>
  );
}

export { Nav };
