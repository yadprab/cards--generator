import React from "react";
import { Svg } from "./Svg";
import { Link} from "react-router-dom";
function Nav() {
  return (
    <>
      <nav>
        <article>
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
        </article>

        <a
          href="https://github.com/yadprab/cards--generator"
          target="_blank"
          rel="noOpener noReferrer"
        >
          <Svg />
        </a>
      </nav>
    </>
  );
}

export { Nav };
